import { useEffect, useId, useRef } from 'react'

export interface EmbedHubSpotError {
  message: string
  /** HubSpot error code or a local failure such as TIMEOUT or SCRIPT_LOAD_ERROR. */
  reason?: string
  /** HTTP status when known; transient failures may not have a status. */
  status?: number
}

export interface EmbedHubSpotProps {
  formId: string
  portalId: string
  /** The account region from HubSpot's embed code. Defaults to na1. */
  region?: string
  /** Called once when the form renders successfully, including modern embeds. */
  onReady?: () => void
  /** Reports load failures for the host to display; this component renders no error UI. */
  onError?: (error: EmbedHubSpotError) => void
}

type HubSpotErrorHandler = (eventType: unknown, reason?: unknown) => void

interface HubSpotFormInstance {
  on: (event: string, handler: HubSpotErrorHandler) => void
  off?: (event: string, handler: HubSpotErrorHandler) => void
}

interface HubSpotForms {
  create: (options: {
    portalId: string
    formId: string
    region: string
    target: string
    formInstanceId: string
    onReady: () => void
    onFormReady: () => void
    onRenderError: HubSpotErrorHandler
  }) => HubSpotFormInstance | void
}

declare global {
  interface Window {
    hbspt?: {
      forms: HubSpotForms
    }
  }
}

const scriptUrl = 'https://js.hsforms.net/forms/embed/v2.js'

export const EmbedHubSpot = ({ formId, portalId, region = 'na1', onReady, onError }: EmbedHubSpotProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const instanceId = useId()
  // Duplicate copies of the same form need distinct, CSS-selector-safe targets.
  const containerId = `hs-form-container-${instanceId.replace(/:/g, '')}`
  const callbacks = useRef({ onReady, onError })

  useEffect(() => {
    // Keep host callbacks current without recreating the embed on every host render.
    callbacks.current = { onReady, onError }
  }, [onReady, onError])

  useEffect(() => {
    // Each settings change starts a new attempt; ignore callbacks from cleaned-up attempts.
    let active = true
    let created = false
    let notifiedReady = false
    const container = formContainerRef.current
    if (!container) return
    // WordPress may mount this component inside an editor iframe, not the global document.
    const document = container.ownerDocument
    const view = document.defaultView
    if (!view) return
    let formInstance: HubSpotFormInstance | void

    const fail = (message: string, reason: string, status?: number) => {
      if (!active) return
      view.clearTimeout(timeout)
      console.error(message)
      callbacks.current.onError?.({ message, reason, ...(status !== undefined && { status }) })
    }

    const timeout = view.setTimeout(
      () =>
        fail('The HubSpot form could not be loaded. Check the Portal ID, Form ID and region, or try again.', 'TIMEOUT'),
      15000,
    )
    let script = document.querySelector<HTMLScriptElement>(`script[src="${scriptUrl}"]`)
    const observedFrames = new Map<HTMLIFrameElement, () => void>()
    const frameObservers = new Set<MutationObserver>()
    const ready = () => {
      if (!active) return
      view.clearTimeout(timeout)
      // SDK callbacks and DOM observers can report the same successful render.
      if (!notifiedReady) {
        notifiedReady = true
        callbacks.current.onReady?.()
      }
    }

    // Some HubSpot render paths insert the form without calling onFormReady.
    const checkForm = () => {
      if (container.querySelector('form')) ready()
      container.querySelectorAll<HTMLIFrameElement>('iframe.hs-form-iframe, .hs-form-frame iframe').forEach((frame) => {
        if (observedFrames.has(frame)) return
        let observedDocument: Document | null = null
        const checkFrame = () => {
          const document = frame.contentDocument
          // Cross-origin modern frames cannot expose their form DOM; use the embed frame as readiness.
          if (!document) {
            if (frame.closest('.hs-form-frame') && frame.src.startsWith('https://')) ready()
            return
          }
          if (document.querySelector('form')) ready()
          // Reattach observation when an iframe navigates from its initial blank document.
          if (document === observedDocument) return
          observedDocument = document
          const observer = new view.MutationObserver(checkFrame)
          observer.observe(document, { childList: true, subtree: true })
          frameObservers.add(observer)
        }
        observedFrames.set(frame, checkFrame)
        frame.addEventListener('load', checkFrame)
        checkFrame()
      })
    }
    const formObserver = new view.MutationObserver(checkForm)
    formObserver.observe(container, { childList: true, subtree: true })

    const renderError: HubSpotErrorHandler = (eventType, reason) => {
      // Early instance events put the specific code in reason; configured callbacks may use eventType.
      const codes = [eventType, reason]
      // The legacy API reports this before switching to the modern embed.
      if (codes.includes('NON_EMBEDDABLE_EDITOR2_FORM')) return
      const response =
        typeof reason === 'object' && reason !== null && 'response' in reason ? reason.response : undefined
      const status =
        typeof response === 'object' && response !== null && 'status' in response ? response.status : undefined
      // Preserve explicit ID/access failures so hosts can distinguish them from temporary load failures.
      if (codes.includes('FORBIDDEN') || status === 403) {
        fail(
          'HubSpot denied access to this form (403 Forbidden). Check the Portal ID, Form ID and region, and confirm the form is published and allowed to be embedded.',
          'FORBIDDEN',
          403,
        )
      } else if (codes.includes('INVALID_FORM_GUID')) {
        fail('The HubSpot Form ID is invalid. Check the Form ID in your HubSpot embed code.', 'INVALID_FORM_GUID')
      } else if (codes.includes('INVALID_PORTAL_ID')) {
        fail('The HubSpot Portal ID is invalid. Check the Portal ID in your HubSpot embed code.', 'INVALID_PORTAL_ID')
      } else if (codes.includes('DEFINITION_NOT_FOUND') || status === 404) {
        fail(
          'The HubSpot form was not found (404). Check the Portal ID, Form ID and region.',
          'DEFINITION_NOT_FOUND',
          404,
        )
      } else {
        fail(
          'The HubSpot form could not be loaded. Check the Portal ID, Form ID and region, and confirm the form is available for embedding.',
          typeof reason === 'string' ? reason : typeof eventType === 'string' ? eventType : 'RENDER_ERROR',
          typeof status === 'number' ? status : undefined,
        )
      }
    }

    const createForm = () => {
      if (!active || created) return
      if (!view.hbspt) {
        script?.remove()
        fail(
          'The HubSpot forms script is unavailable. Check your connection or content blocker and try again.',
          'SCRIPT_UNAVAILABLE',
        )
        return
      }

      created = true
      try {
        formInstance = view.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${containerId}`,
          formInstanceId: containerId,
          onReady: ready,
          onFormReady: ready,
          onRenderError: renderError,
        })
        // Definition-fetch errors occur before the configured callbacks are registered.
        formInstance?.on('onRenderError', renderError)
      } catch (cause) {
        console.error('Failed to initialize the HubSpot form.', cause)
        fail(
          'The HubSpot form could not be initialized. Check the form settings and try again.',
          'INITIALIZATION_ERROR',
        )
      }
    }

    const scriptFailed = () => {
      script?.remove()
      fail(
        'The HubSpot forms script could not be loaded. Check your connection or content blocker and try again.',
        'SCRIPT_LOAD_ERROR',
      )
    }

    if (view.hbspt) {
      createForm()
    } else {
      // Share one script per document, but subscribe even if another embed is still loading it.
      const needsScript = !script
      if (!script) {
        script = document.createElement('script')
        script.src = scriptUrl
        script.async = true
      }
      script.addEventListener('load', createForm)
      script.addEventListener('error', scriptFailed)
      if (needsScript) document.body.appendChild(script)
    }

    return () => {
      // Detach only this attempt's listeners/observers; the shared SDK script stays available.
      active = false
      view.clearTimeout(timeout)
      formInstance?.off?.('onRenderError', renderError)
      script?.removeEventListener('load', createForm)
      script?.removeEventListener('error', scriptFailed)
      formObserver.disconnect()
      frameObservers.forEach((observer) => observer.disconnect())
      observedFrames.forEach((listener, frame) => frame.removeEventListener('load', listener))
      // Other embeds may still be waiting for this shared script.
      container?.replaceChildren()
    }
  }, [formId, portalId, region, containerId])

  return <div id={containerId} ref={formContainerRef} className="w-full" />
}

EmbedHubSpot.displayName = 'EmbedHubSpot'

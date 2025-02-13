/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

export interface EmbedHubSpotProps {
  formId: string
  portalId: string
}

export const EmbedHubSpot = ({ formId, portalId }: EmbedHubSpotProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if ((window as any).hbspt) {
        ;(window as any).hbspt.forms.create({
          portalId,
          formId,
          target: `#hs-form-container-${formId}`,
          onFormReady: () => {
            // Adjust form container height dynamically
            if (formContainerRef.current) {
              const observer = new MutationObserver(() => {
                formContainerRef.current!.style.height = `${formContainerRef.current!.scrollHeight}px`
              })
              observer.observe(formContainerRef.current, { childList: true, subtree: true })
            }
          },
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [formId, portalId])

  return (
    <div
      id={`hs-form-container-${formId}`}
      ref={formContainerRef}
      style={{
        width: '100%',
        transition: 'height 0.3s ease-in-out', // Smooth transition
      }}
    />
  )
}

EmbedHubSpot.displayName = 'EmbedHubSpot.HubSpot'

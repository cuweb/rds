/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

export interface EmbedHubSpotProps {
  title: string
  formId: string // HubSpot Form ID
  portalId: string // HubSpot Portal ID
}

export const EmbedHubSpot = ({ title, formId, portalId }: EmbedHubSpotProps) => {
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
    <div>
      <h2>{title}</h2>
      <div
        id={`hs-form-container-${formId}`}
        ref={formContainerRef}
        style={{
          width: '100%',
          transition: 'height 0.3s ease-in-out', // Smooth transition
        }}
      />
    </div>
  )
}

EmbedHubSpot.displayName = 'FormEmbed.HubSpot'

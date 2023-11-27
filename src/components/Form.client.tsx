import React, { useEffect } from 'react'

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.charset = 'utf-8'
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '23535580',
          formId: '697fd349-b668-4fa2-a41e-d72701bcae49',
        })
      }
    })

    // Remove script when component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div id="hubspotForm">{/* The form will be injected here */}</div>
}

export default HubSpotForm

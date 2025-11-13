// src/utils/analytics.js
import TagManager from 'react-gtm-module'

export function sendAppointmentEvent(label = 'Hero Randevu Al') {
    TagManager.dataLayer({
        dataLayer: {
            event: 'randevu_click',
            category: 'CTA',
            label
        },
    })
}

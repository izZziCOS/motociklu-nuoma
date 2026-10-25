export const PHONE_NUMBER = "+37064307225"
export const PHONE_DISPLAY = "+370 643 07225"
export const PHONE_DIGITS = PHONE_NUMBER.replace("+", "")

export const PHONE_HREF = `tel:${PHONE_NUMBER}`
export const WHATSAPP_HREF = `https://wa.me/${PHONE_DIGITS}`
export const VIBER_HREF = `viber://chat?number=%2B${PHONE_DIGITS}`

export const COMPANY_NAME = "UAB „Track Bike Rentals LT“"

// Formspree (or compatible) endpoint that receives enquiries as JSON.
// When unset, enquiries are sent through WhatsApp instead.
export const FORM_ENDPOINT = process.env.REACT_APP_FORM_ENDPOINT

import React from "react"
import { VIBER_HREF, WHATSAPP_HREF } from "../config"
import "./ContactBand.css"

function ContactBand({ onEnquire }) {
  return (
    <section id="contact" className="contact-band">
      <div className="container contact-band-inner">
        <div className="contact-band-text">
          <h2 className="display-heading">Pasiruošę trasai?</h2>
          <p className="contact-band-lead">
            Palikite kontaktinius duomenis ir mes jums paskambinsime 10 minučių
            bėgyje.
          </p>
        </div>
        <div className="contact-band-actions">
          <button
            type="button"
            className="btn btn--dark btn--lg"
            onClick={onEnquire}
          >
            Pateikti užklausą
          </button>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-dark btn--lg"
          >
            WhatsApp
          </a>
          <a href={VIBER_HREF} className="btn btn--outline-dark btn--lg">
            Viber
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactBand

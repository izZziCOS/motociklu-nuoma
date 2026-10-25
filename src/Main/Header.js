import React from "react"
import { PHONE_DISPLAY, PHONE_HREF } from "../config"
import "./Header.css"

function Header({ onEnquire }) {
  return (
    <header className="header">
      <nav className="container header-nav" aria-label="Pagrindinė navigacija">
        <a href="#top" className="header-logo">
          <span className="header-logo-mark" aria-hidden="true" />
          Žiedo nuoma
        </a>
        <div className="header-links">
          <a href="#fleet" className="header-link">
            Motociklai
          </a>
          <a href="#packages" className="header-link">
            Paketai
          </a>
          <a href="#tracks" className="header-link">
            Trasos
          </a>
          <a href="#booking" className="header-link">
            Kaina
          </a>
          <a href="#faq" className="header-link">
            DUK
          </a>
        </div>
        <div className="header-actions">
          <a href={PHONE_HREF} className="header-phone">
            {PHONE_DISPLAY}
          </a>
          <button type="button" className="btn btn--accent" onClick={onEnquire}>
            Pateikti užklausą
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

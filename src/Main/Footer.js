import React from "react"
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_HREF } from "../config"
import "./Footer.css"

function Footer() {
  return (
    <footer className="container footer">
      <span>
        © {new Date().getFullYear()} {COMPANY_NAME}
      </span>
      <a href={PHONE_HREF} className="footer-link">
        {PHONE_DISPLAY}
      </a>
    </footer>
  )
}

export default Footer

import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} UAB &quot;Track Bike Rentals LT&quot;
      </p>
    </footer>
  )
}

export default Footer

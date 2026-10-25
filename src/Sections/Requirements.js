import React from "react"
import { EXTRAS, formatPrice } from "../pricing"
import "./Requirements.css"

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

function Requirements({ requirements, gear }) {
  return (
    <section id="requirements" className="container section">
      <div className="section-header">
        <h2 className="display-heading">Reikalavimai ir saugumas</h2>
        <p className="section-intro">
          Trasa – ne kelias. Kad diena būtų smagi ir saugi, prašome atitikti
          šiuos reikalavimus.
        </p>
      </div>
      <div className="requirements-grid">
        <div className="card requirements-card">
          <h3 className="requirements-title">Vairuotojui</h3>
          <ul className="requirements-list">
            {requirements.map((item) => (
              <li key={item}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card requirements-card">
          <h3 className="requirements-title">Privaloma ekipiruotė</h3>
          <ul className="gear-list">
            {gear.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="gear-note">
            Neturite savo? Visą komplektą išnuomosime už{" "}
            <strong>{formatPrice(EXTRAS.gear.pricePerDay)} per dieną</strong> –
            dydžiai nuo XS iki XXL.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Requirements

import React from "react"
import { formatPrice, packagePrice } from "../pricing"
import "./Packages.css"

function Packages({ items, fromBike, onChoose }) {
  return (
    <section id="packages" className="container section">
      <div className="section-header">
        <h2 className="display-heading">Paketai</h2>
        <p className="section-intro">
          Kainos nurodytos su {fromBike.model}. Trasos mokestis ir priedai
          skaičiuojami atskirai.
        </p>
      </div>
      <div className="packages-grid">
        {items.map((pkg) => (
          <article
            key={pkg.id}
            className={`card package${pkg.featured ? " package--featured" : ""}`}
          >
            {pkg.featured && (
              <span className="package-badge">Populiariausias</span>
            )}
            <div className="package-head">
              <span className="package-duration">{pkg.duration}</span>
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-description">{pkg.description}</p>
            </div>
            <p className="package-price">
              <span className="package-price-from">nuo</span>{" "}
              <span className="package-price-value">
                {formatPrice(packagePrice(pkg, fromBike))}
              </span>
            </p>
            <ul className="package-features">
              {pkg.features.map((feature) => (
                <li key={feature}>
                  <svg
                    width="18"
                    height="18"
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
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`btn ${pkg.featured ? "btn--accent" : "btn--ghost"}`}
              onClick={() => onChoose(pkg)}
              aria-label={`Pasirinkti paketą ${pkg.name}`}
            >
              Pasirinkti
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Packages

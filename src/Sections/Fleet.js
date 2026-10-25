import React from "react"
import "./Fleet.css"

function Fleet({ items, onReserve }) {
  return (
    <section id="fleet" className="container fleet">
      <div className="fleet-header">
        <h2 className="display-heading">Nuomojami motociklai</h2>
        <p className="fleet-intro">
          998 cm³, keturi cilindrai, IMU elektronika ir greitas pavarų
          perjungimas – visi trys.
        </p>
      </div>
      <div className="fleet-grid">
        {items.map((bike) => {
          const name = `${bike.brand} ${bike.model}`
          return (
            <article key={bike.id} className="bike-card">
              <div className="bike-card-media">
                <img
                  src={bike.imageSrc}
                  alt={name}
                  className="bike-card-image"
                />
              </div>
              <div className="bike-card-title">
                <span className="bike-card-brand">{bike.brand}</span>
                <h3 className="bike-card-model">{bike.model}</h3>
              </div>
              <dl className="bike-card-specs">
                <div>
                  <dt>Maks. greitis</dt>
                  <dd>{bike.topSpeed}</dd>
                </div>
                <div>
                  <dt>Pakaba</dt>
                  <dd>{bike.suspension}</dd>
                </div>
                <div>
                  <dt>Transmisija</dt>
                  <dd>6 pav., quickshifter</dd>
                </div>
              </dl>
              <div className="bike-card-footer">
                <p className="bike-card-price">
                  <span className="bike-card-price-value">
                    {bike.pricePerDay} €
                  </span>{" "}
                  / diena
                </p>
                <button
                  type="button"
                  className="btn btn--accent"
                  onClick={() => onReserve(name)}
                  aria-label={`Rezervuoti ${name}`}
                >
                  Rezervuoti
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Fleet

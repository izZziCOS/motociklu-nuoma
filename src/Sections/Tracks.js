import React from "react"
import { formatPrice } from "../pricing"
import "./Tracks.css"

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("lt-LT", {
    month: "long",
    day: "numeric",
  })

function Tracks({ items, onChoose }) {
  return (
    <section id="tracks" className="container section">
      <div className="section-header">
        <h2 className="display-heading">Trasos</h2>
        <p className="section-intro">
          Motociklą atvešime į pasirinktą trasą – jums tereikia atvykti.
          Artimiausios 2027 m. sezono datos:
        </p>
      </div>
      <div className="tracks-grid">
        {items.map((track) => (
          <article key={track.id} className="card track">
            <div className="track-map">
              <svg
                viewBox="0 0 200 120"
                role="img"
                aria-label={`${track.name} trasos schema`}
              >
                <path
                  d={track.path}
                  pathLength="1"
                  className="track-map-line"
                />
              </svg>
            </div>
            <div className="track-head">
              <h3 className="track-name">{track.name}</h3>
              <p className="track-location">{track.location}</p>
            </div>
            <dl className="track-stats">
              <div>
                <dt>Ilgis</dt>
                <dd>{track.length}</dd>
              </div>
              <div>
                <dt>Posūkiai</dt>
                <dd>{track.turns}</dd>
              </div>
              <div>
                <dt>Mokestis</dt>
                <dd>{formatPrice(track.feePerDay)} / d.</dd>
              </div>
            </dl>
            <ul className="track-dates" aria-label="Artimiausios datos">
              {track.dates.map((date) => (
                <li key={date}>{formatDate(date)}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => onChoose(track)}
              aria-label={`Rinktis trasą ${track.name}`}
            >
              Rinktis trasą
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Tracks

import React from "react"
import {
  EXTRAS,
  FORMATS,
  MAX_DAYS,
  calculateQuote,
  formatPrice,
} from "../pricing"
import "./Booking.css"

const today = () => new Date().toISOString().slice(0, 10)

export const describeBooking = ({ bike, track, format, date, quote }) =>
  [
    `${bike.brand} ${bike.model}`,
    `${FORMATS[format].label}${quote.days > 1 ? ` × ${quote.days} d.` : ""}`,
    track.name,
    date,
    formatPrice(quote.total),
  ]
    .filter(Boolean)
    .join(" · ")

function Booking({ bikes, tracks, booking, onChange, onSubmit }) {
  const bike = bikes.find((b) => b.id === booking.bikeId)
  const track = tracks.find((t) => t.id === booking.trackId)
  const quote = calculateQuote({
    bike,
    track,
    format: booking.format,
    days: booking.days,
    extras: booking.extras,
  })
  const isHalfDay = booking.format === "half"

  const setDays = (days) =>
    onChange({ days: Math.min(Math.max(days, 1), MAX_DAYS) })
  const toggleExtra = (id) =>
    onChange({ extras: { ...booking.extras, [id]: !booking.extras[id] } })

  return (
    <section id="booking" className="container section">
      <div className="section-header">
        <h2 className="display-heading">Apskaičiuokite kainą</h2>
        <p className="section-intro">
          Sudėliokite savo dieną trasoje – kaina persiskaičiuoja iš karto.
        </p>
      </div>

      <div className="booking-layout">
        <form
          className="card booking-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <fieldset className="booking-field">
            <legend className="booking-label">Motociklas</legend>
            <div className="bike-options">
              {bikes.map((option) => (
                <label
                  key={option.id}
                  className={`bike-option${option.id === bike.id ? " is-selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="bike"
                    value={option.id}
                    checked={option.id === bike.id}
                    onChange={() => onChange({ bikeId: option.id })}
                    className="sr-only"
                  />
                  <img
                    src={option.imageSrc}
                    alt=""
                    className="bike-option-image"
                  />
                  <span className="bike-option-name">{option.model}</span>
                  <span className="bike-option-price">
                    {formatPrice(option.pricePerDay)} / d.
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="booking-row">
            <fieldset className="booking-field">
              <legend className="booking-label">Formatas</legend>
              <div className="segmented">
                {Object.entries(FORMATS).map(([id, format]) => (
                  <label
                    key={id}
                    className={`segmented-option${booking.format === id ? " is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="format"
                      value={id}
                      checked={booking.format === id}
                      onChange={() => onChange({ format: id })}
                      className="sr-only"
                    />
                    {format.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="booking-field">
              <span className="booking-label" id="days-label">
                Dienų skaičius
              </span>
              <div
                className="stepper"
                role="group"
                aria-labelledby="days-label"
              >
                <button
                  type="button"
                  className="stepper-button"
                  onClick={() => setDays(booking.days - 1)}
                  disabled={isHalfDay || booking.days <= 1}
                  aria-label="Mažiau dienų"
                >
                  −
                </button>
                <output className="stepper-value" aria-live="polite">
                  {quote.days}
                </output>
                <button
                  type="button"
                  className="stepper-button"
                  onClick={() => setDays(booking.days + 1)}
                  disabled={isHalfDay || booking.days >= MAX_DAYS}
                  aria-label="Daugiau dienų"
                >
                  +
                </button>
              </div>
              <span className="booking-hint">
                {isHalfDay
                  ? "Pusė dienos – viena diena trasoje."
                  : "2 d. –10 %, 3+ d. –15 %"}
              </span>
            </div>
          </div>

          <div className="booking-row">
            <label className="booking-field">
              <span className="booking-label">Trasa</span>
              <select
                className="booking-input"
                value={track.id}
                onChange={(e) => onChange({ trackId: e.target.value })}
              >
                {tracks.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name} ({formatPrice(option.feePerDay)} / d.)
                  </option>
                ))}
              </select>
            </label>

            <label className="booking-field">
              <span className="booking-label">Data</span>
              <input
                type="date"
                className="booking-input"
                min={today()}
                value={booking.date}
                onChange={(e) => onChange({ date: e.target.value })}
              />
            </label>
          </div>

          <fieldset className="booking-field">
            <legend className="booking-label">Priedai</legend>
            <div className="extras">
              {Object.entries(EXTRAS).map(([id, extra]) => (
                <label
                  key={id}
                  className={`extra${booking.extras[id] ? " is-selected" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={booking.extras[id]}
                    onChange={() => toggleExtra(id)}
                  />
                  <span className="extra-label">{extra.label}</span>
                  <span className="extra-price">
                    {formatPrice(extra.pricePerDay)} / d.
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </form>

        <aside className="card booking-summary" aria-label="Užsakymo suvestinė">
          <h3 className="booking-summary-title">Jūsų užsakymas</h3>
          <ul className="booking-lines">
            {quote.lines.map((line) => (
              <li
                key={line.label}
                className={line.discount ? "booking-line--discount" : undefined}
              >
                <span>{line.label}</span>
                <span>
                  {line.amount < 0 ? "−" : ""}
                  {formatPrice(Math.abs(line.amount))}
                </span>
              </li>
            ))}
          </ul>
          <div className="booking-total">
            <span>Iš viso</span>
            <span className="booking-total-value" data-testid="booking-total">
              {formatPrice(quote.total)}
            </span>
          </div>
          <button
            type="button"
            className="btn btn--accent btn--lg"
            onClick={() =>
              onSubmit(
                describeBooking({
                  bike,
                  track,
                  format: booking.format,
                  date: booking.date,
                  quote,
                }),
              )
            }
          >
            Rezervuoti
          </button>
          <p className="booking-note">
            Mokėti nieko nereikia – paskambinsime per 10 min. ir patvirtinsime
            datą. Atvykus blokuojamas 500 € užstatas.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default Booking

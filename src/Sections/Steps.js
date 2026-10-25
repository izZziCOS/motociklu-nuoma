import React from "react"
import "./Steps.css"

function Steps({ items }) {
  return (
    <section id="steps" className="container steps">
      <h2 className="display-heading steps-heading">Kaip tai veikia</h2>
      <ol className="steps-list">
        {items.map((step, index) => (
          <li key={step.title} className="step">
            <span className="step-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Steps

import React from "react"
import "./Faq.css"

function Faq({ items }) {
  return (
    <section
      id="faq"
      className="container section faq"
      aria-labelledby="faq-title"
    >
      <div className="faq-intro">
        <h2 id="faq-title" className="display-heading">
          Dažni klausimai
        </h2>
        <p className="section-intro">
          Neradote atsakymo? Paskambinkite arba parašykite – atsakysime per 10
          minučių.
        </p>
      </div>
      <div className="faq-list">
        {items.map((item, index) => (
          <details key={item.question} className="faq-item" open={index === 0}>
            <summary className="faq-question">
              {item.question}
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default Faq

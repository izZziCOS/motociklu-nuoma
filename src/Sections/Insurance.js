import React from "react"
import "./Insurance.css"

const icons = {
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  heart: (
    <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z" />
  ),
  document: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8M8 17h5" />
    </>
  ),
}

function Insurance({ items }) {
  return (
    <section id="insurance" className="container insurance">
      <h2 className="display-heading insurance-heading">
        Suteikiami draudimai
      </h2>
      <ul className="insurance-list">
        {items.map((item) => (
          <li key={item.text} className="insurance-card">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="insurance-icon"
              aria-hidden="true"
            >
              {icons[item.icon]}
            </svg>
            <h3 className="insurance-title">{item.text}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Insurance

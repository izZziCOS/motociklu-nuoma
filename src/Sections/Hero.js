import React from "react"
import { PHONE_HREF } from "../config"
import { motorcycles, packages, tracks } from "../data"
import { formatPrice, packagePrice } from "../pricing"
import "./Hero.css"

const stats = [
  { value: String(motorcycles.length), label: "superbike'ai parke" },
  { value: String(tracks.length), label: "trasos Lietuvoje ir Latvijoje" },
  {
    value: `nuo ${formatPrice(packagePrice(packages[0], motorcycles[0]))}`,
    label: "už pusę dienos trasoje",
  },
  { value: "10 min.", label: "ir mes jums paskambinsime" },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <img
        src={`${process.env.PUBLIC_URL}/main-display.jpg`}
        alt=""
        className="hero-image"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-eyebrow">Žiedo motociklų nuoma Lietuvoje</p>
        <h1 className="hero-title">Jūsų nuotykiai prasideda čia</h1>
        <p className="hero-lead">
          Mūsų misija – suteikti jums nepakartojamus motociklų patyrimus.
          Superbike'ai, paruošti trasai, su draudimu.
        </p>
        <div className="hero-actions">
          <a href="#fleet" className="btn btn--accent btn--lg">
            Rinktis motociklą
          </a>
          <a href={PHONE_HREF} className="btn btn--ghost btn--lg">
            Skambinti
          </a>
        </div>
        <dl className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <dt className="hero-stat-label">{stat.label}</dt>
              <dd className="hero-stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero

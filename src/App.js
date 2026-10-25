import React from "react"
import "./App.css"
import Header from "./Main/Header"
import Footer from "./Main/Footer"
import SplitContentSwitcher from "./Reusable/SplitContentSwitcher"
import ImageTextGrid from "./Reusable/ImageTextGrid"
import { insurances, motorcycles } from "./data"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <img
            src={`${process.env.PUBLIC_URL}/main-display.jpg`}
            alt=""
            className="hero-image"
          />
          <div className="hero-content">
            <p className="hero-subtitle">
              Mūsų misija – suteikti jums nepakartojamus motociklų patyrimus
            </p>
            <h1 className="hero-title">JŪSŲ NUOTYKIAI PRASIDEDA ČIA</h1>
            <div className="rentals">
              <h2 className="section-title section-title--light">
                Nuomojami motociklai
              </h2>
              <SplitContentSwitcher items={motorcycles} />
            </div>
          </div>
        </section>

        <section className="insurance">
          <h2 className="section-title">Suteikiami draudimai</h2>
          <ImageTextGrid items={insurances} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

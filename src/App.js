import React from "react"
import "./App.css"
import Header from "./Main/Header"
import Box from "@mui/material/Box"
import Footer from "./Main/Footer"
import SplitContentSwitcher from "./Reusable/SplitContentSwitcher"
import ImageTextGrid from "./Reusable/ImageTextGrid"

const contentData = [
  {
    imageSrc: `${process.env.PUBLIC_URL}/crash.jpg`,
    text: "Motociklo KASKO draudimas",
  },
  {
    imageSrc: `${process.env.PUBLIC_URL}/life-insurance.jpg`,
    text: "Vairuotojo sveikatos draudimas",
  },
  {
    imageSrc: `${process.env.PUBLIC_URL}/insurance.jpg`,
    text: "Privalomasis vairuotojų civilinės atsakomybės draudimas",
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/main-display.jpg`}
          alt="Background image"
          className="main-image"
        />
        <div className="overlay-text-small">
          Mūsų misija – suteikti jums nepakartojamus motociklų patyrimus,
          nepriklausomai nuo jūsų patirties lygio ar poreikių
        </div>
        <div className="overlay-text-big">JŪSŲ NUOTYKIAI PRASIDEDA ČIA</div>
        <div className="content-switcher-container">
          <div className="overlay-text-big-white">Nuomojami motociklai</div>
          <SplitContentSwitcher />
        </div>
      </div>

      <div className="text-big">Suteikiami draudimai</div>
      <ImageTextGrid items={contentData} />
      <Footer />
    </div>
  )
}

export default App

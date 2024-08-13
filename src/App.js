import React from "react"
import "./App.css"
import Header from "./Main/Header"
import Box from "@mui/material/Box"
import Footer from "./Main/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/main-display.gif`}
          alt="Animated GIF"
          className="main-image"
        />
        <div className="overlay-text-small">
          Mūsų misija – suteikti jums nepakartojamus motociklų patyrimus,
          nepriklausomai nuo jūsų patirties lygio ar poreikių
        </div>
        <div className="overlay-text-big">JŪSŲ NUOTYKIAI PRASIDEDA ČIA</div>
      </div>
      <Footer />
    </div>
  )
}

export default App

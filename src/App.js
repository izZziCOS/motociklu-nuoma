import React, { useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import "./App.css"
import Header from "./Main/Header"
import Footer from "./Main/Footer"
import Hero from "./Sections/Hero"
import Fleet from "./Sections/Fleet"
import Steps from "./Sections/Steps"
import Insurance from "./Sections/Insurance"
import ContactBand from "./Sections/ContactBand"
import EnquiryDialog from "./Reusable/EnquiryDialog"
import { insurances, motorcycles, steps } from "./data"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#c6f432", contrastText: "#0e0f11" },
    background: { paper: "#17191c", default: "#0e0f11" },
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
})

function App() {
  const [enquiry, setEnquiry] = useState({ open: false, bike: null })

  const openEnquiry = (bike = null) => setEnquiry({ open: true, bike })
  const closeEnquiry = () => setEnquiry((prev) => ({ ...prev, open: false }))

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header onEnquire={() => openEnquiry()} />
        <main>
          <Hero />
          <Fleet items={motorcycles} onReserve={openEnquiry} />
          <Steps items={steps} />
          <Insurance items={insurances} />
          <ContactBand onEnquire={() => openEnquiry()} />
        </main>
        <Footer />
        <EnquiryDialog
          open={enquiry.open}
          bike={enquiry.bike}
          onClose={closeEnquiry}
        />
      </div>
    </ThemeProvider>
  )
}

export default App

import React, { useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import "./App.css"
import Header from "./Main/Header"
import Footer from "./Main/Footer"
import Hero from "./Sections/Hero"
import Fleet from "./Sections/Fleet"
import Packages from "./Sections/Packages"
import Tracks from "./Sections/Tracks"
import Booking from "./Sections/Booking"
import Steps from "./Sections/Steps"
import Requirements from "./Sections/Requirements"
import Insurance from "./Sections/Insurance"
import Reviews from "./Sections/Reviews"
import Faq from "./Sections/Faq"
import ContactBand from "./Sections/ContactBand"
import EnquiryDialog from "./Reusable/EnquiryDialog"
import {
  faqs,
  gear,
  insurances,
  motorcycles,
  packages,
  requirements,
  reviews,
  steps,
  tracks,
} from "./data"

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

const initialBooking = {
  bikeId: motorcycles[0].id,
  trackId: tracks[0].id,
  format: "full",
  days: 1,
  date: "",
  extras: { gear: false, instructor: false },
}

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView?.({ behavior: "smooth" })
}

function App() {
  const [enquiry, setEnquiry] = useState({ open: false, details: null })
  const [booking, setBooking] = useState(initialBooking)

  const openEnquiry = (details = null) => setEnquiry({ open: true, details })
  const closeEnquiry = () => setEnquiry((prev) => ({ ...prev, open: false }))

  const updateBooking = (patch) => setBooking((prev) => ({ ...prev, ...patch }))
  const preselect = (patch) => {
    updateBooking(patch)
    scrollToBooking()
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header onEnquire={() => openEnquiry()} />
        <main>
          <Hero />
          <Fleet
            items={motorcycles}
            onReserve={(bike) => preselect({ bikeId: bike.id })}
          />
          <Packages
            items={packages}
            fromBike={motorcycles[0]}
            onChoose={(pkg) =>
              preselect({ format: pkg.format, days: pkg.days })
            }
          />
          <Tracks
            items={tracks}
            onChoose={(track) => preselect({ trackId: track.id })}
          />
          <Booking
            bikes={motorcycles}
            tracks={tracks}
            booking={booking}
            onChange={updateBooking}
            onSubmit={openEnquiry}
          />
          <Steps items={steps} />
          <Requirements requirements={requirements} gear={gear} />
          <Insurance items={insurances} />
          <Reviews items={reviews} />
          <Faq items={faqs} />
          <ContactBand onEnquire={() => openEnquiry()} />
        </main>
        <Footer />
        <EnquiryDialog
          open={enquiry.open}
          details={enquiry.details}
          onClose={closeEnquiry}
        />
      </div>
    </ThemeProvider>
  )
}

export default App

import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import OutlinedButton from "../Reusable/OutlinedButton"
import PopupDialog from "../Reusable/PopupDialog"
import "./Header.css"

function Header() {
  const handlePhoneCall = () => {
    window.location.href = "tel:+37064307225" // Initiates phone call
  }

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/37064307225" // Initiates WhatsApp chat
  }

  const handleViber = () => {
    window.location.href = "viber://chat?number=%2B37064307225" // Initiates Viber chat
  }

  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar className="toolbar">
        <Box className="leftSideBox">
          <Box
            component="img"
            className="logo"
            alt="Logo"
            src={`${process.env.PUBLIC_URL}/header-motorcycle.png`}
          />
          <Typography variant="h6" component="div">
            Žiedo motociklų nuoma Lietuvoje
          </Typography>
        </Box>
        <Box className="rightSideBox">
          <OutlinedButton text="+37064307225" onClick={handlePhoneCall} />
          <OutlinedButton text="WhatsApp" onClick={handleWhatsApp} />
          <OutlinedButton text="Viber" onClick={handleViber} />
          <PopupDialog
            buttonText="Pateikti užklausą"
            dialogTitle="Sužinokite apie motociklo nuomą per 10 minučių"
            dialogContent="Palikite kontaktinius duomenis ir mes jums paskambinsime 10 minučių bėgyje."
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

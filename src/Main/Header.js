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
    window.location.href = "tel:+37064307225" // Initiates phone call to the specified number
  }

  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar className="toolbar">
        {/* Left side: Logo and Text */}
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

        {/* Right side: Container for Buttons */}
        <Box className="rightSideBox">
          <OutlinedButton text="+37064307225" onClick={handlePhoneCall} />
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

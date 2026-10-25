import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import OutlinedButton from "../Reusable/OutlinedButton"
import PopupDialog from "../Reusable/PopupDialog"
import { PHONE_HREF, PHONE_NUMBER, VIBER_HREF, WHATSAPP_HREF } from "../config"
import "./Header.css"

function Header() {
  return (
    <AppBar position="sticky" className="appBar">
      <Toolbar className="toolbar">
        <Box className="leftSideBox">
          <Box
            component="img"
            className="logo"
            alt=""
            src={`${process.env.PUBLIC_URL}/header-motorcycle.png`}
          />
          <Typography variant="h6" component="div" className="site-title">
            Žiedo motociklų nuoma Lietuvoje
          </Typography>
        </Box>
        <Box className="rightSideBox">
          <OutlinedButton text={PHONE_NUMBER} href={PHONE_HREF} />
          <OutlinedButton
            text="WhatsApp"
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
          />
          <OutlinedButton text="Viber" href={VIBER_HREF} />
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

import React from "react"
import Button from "@mui/material/Button"
import "./OutlinedButton.css"

function OutlinedButton({ text, onClick, ...props }) {
  return (
    <Button
      variant="outlined"
      color="inherit"
      className="outlined-button"
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  )
}

export default OutlinedButton

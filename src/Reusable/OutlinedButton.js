import React from "react"
import Button from "@mui/material/Button"

function OutlinedButton({ text, onClick, ...props }) {
  return (
    <Button
      variant="outlined" // Ensures the button has a border
      color="inherit" // Inherit color from the theme (e.g., white border, white text)
      sx={{
        border: "2px solid white", // White border around the button
        color: "white", // White text color
        padding: "6px 16px", // Adjust padding as needed
        "&:hover": {
          border: "2px solid white", // Ensure border color stays white on hover
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: light background on hover
        },
      }}
      onClick={onClick}
      {...props} // Spread additional props
    >
      {text}
    </Button>
  )
}

export default OutlinedButton

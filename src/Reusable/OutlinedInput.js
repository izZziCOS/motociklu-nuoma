import React from "react"
import TextField from "@mui/material/TextField"

function OutlinedInput({ label, ...props }) {
  return <TextField variant="outlined" label={label} {...props} />
}

export default OutlinedInput

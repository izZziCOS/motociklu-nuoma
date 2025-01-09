import React, { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import OutlinedButton from "./OutlinedButton"
import OutlinedInput from "./OutlinedInput"

function PopupDialog({ buttonText, dialogTitle, dialogContent }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ name: "", phone: "" })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setPhone()
    setName("")
    setOpen(false)
  }

  const handleSubmit = () => {
    const newErrors = {}
    if (!name.trim()) {
      newErrors.name = "Vardas yra privalomas."
    }

    const phoneRegex = /^\+\d+$/
    if (!phone.trim()) {
      newErrors.phone = "Telefono numeris yra privalomas."
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone =
        "Telefono numeris turi prasidėti su + ir būti sudarytas tik iš skaičių."
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      // Clear errors, remove phone and name from memory and proceed
      setErrors({})
      setOpen(false)
      setPhone()
      setName("")
    }
  }

  return (
    <div>
      <OutlinedButton text={buttonText} onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <div>{dialogContent}</div>
          <div style={{ marginTop: "16px" }}>
            {" "}
            {/* Optional margin for spacing */}
            <OutlinedInput
              label="Jūsų vardas *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            {" "}
            {/* Optional margin for spacing */}
            <OutlinedInput
              label="Telefono numeris *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Pateikti užklausą</Button>
          <Button onClick={handleClose} color="primary">
            Uždaryti
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PopupDialog

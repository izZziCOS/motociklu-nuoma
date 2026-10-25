import React, { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import OutlinedButton from "./OutlinedButton"
import OutlinedInput from "./OutlinedInput"
import { FORM_ENDPOINT, WHATSAPP_HREF } from "../config"

const PHONE_REGEX = /^(\+\d{8,15}|8\d{8})$/

export const normalizePhone = (phone) => phone.replace(/[\s()-]/g, "")

export const validate = ({ name, phone }) => {
  const errors = {}
  if (!name.trim()) {
    errors.name = "Vardas yra privalomas."
  }

  const normalized = normalizePhone(phone)
  if (!normalized) {
    errors.phone = "Telefono numeris yra privalomas."
  } else if (!PHONE_REGEX.test(normalized)) {
    errors.phone = "Įveskite teisingą telefono numerį, pvz. +370 600 00000."
  }
  return errors
}

const sendEnquiry = async ({ name, phone }) => {
  if (FORM_ENDPOINT) {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, phone }),
    })
    if (!response.ok) {
      throw new Error(`Form endpoint responded with ${response.status}`)
    }
    return
  }

  const message = `Sveiki, norėčiau sužinoti apie motociklo nuomą.\nVardas: ${name}\nTelefonas: ${phone}`
  window.open(
    `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener",
  )
}

function PopupDialog({ buttonText, dialogTitle, dialogContent }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | sent | failed

  const reset = () => {
    setErrors({})
    setPhone("")
    setName("")
    setStatus("idle")
  }

  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newErrors = validate({ name, phone })
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setStatus("sending")
    try {
      await sendEnquiry({ name: name.trim(), phone: normalizePhone(phone) })
      setStatus("sent")
    } catch {
      setStatus("failed")
    }
  }

  return (
    <div>
      <OutlinedButton text={buttonText} onClick={() => setOpen(true)} />

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ component: "form", onSubmit: handleSubmit, noValidate: true }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          {status === "sent" ? (
            <Alert severity="success">
              Ačiū! Susisieksime su jumis artimiausiu metu.
            </Alert>
          ) : (
            <>
              <div>{dialogContent}</div>
              <OutlinedInput
                label="Jūsų vardas"
                required
                fullWidth
                margin="normal"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
              <OutlinedInput
                label="Telefono numeris"
                required
                fullWidth
                margin="normal"
                type="tel"
                autoComplete="tel"
                placeholder="+370 600 00000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={!!errors.phone}
                helperText={errors.phone}
              />
              {status === "failed" && (
                <Alert severity="error">
                  Nepavyko išsiųsti užklausos. Paskambinkite mums arba bandykite
                  dar kartą.
                </Alert>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          {status !== "sent" && (
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Siunčiama..." : "Pateikti užklausą"}
            </Button>
          )}
          <Button onClick={handleClose}>Uždaryti</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PopupDialog

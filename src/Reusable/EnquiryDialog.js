import React, { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import Chip from "@mui/material/Chip"
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

const sendEnquiry = async ({ name, phone, bike }) => {
  if (FORM_ENDPOINT) {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, phone, bike }),
    })
    if (!response.ok) {
      throw new Error(`Form endpoint responded with ${response.status}`)
    }
    return
  }

  const lines = [
    "Sveiki, norėčiau sužinoti apie motociklo nuomą.",
    bike && `Motociklas: ${bike}`,
    `Vardas: ${name}`,
    `Telefonas: ${phone}`,
  ]
  const message = lines.filter(Boolean).join("\n")
  window.open(
    `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener",
  )
}

function EnquiryDialog({ open, bike, onClose }) {
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newErrors = validate({ name, phone })
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setStatus("sending")
    try {
      await sendEnquiry({
        name: name.trim(),
        phone: normalizePhone(phone),
        bike,
      })
      setStatus("sent")
    } catch {
      setStatus("failed")
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      TransitionProps={{ onExited: reset }}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        noValidate: true,
        sx: { backgroundImage: "none", border: "1px solid #23262b" },
      }}
    >
      <DialogTitle sx={{ fontWeight: 600 }}>
        Sužinokite apie motociklo nuomą per 10 minučių
      </DialogTitle>
      <DialogContent>
        {status === "sent" ? (
          <Alert severity="success">
            Ačiū! Susisieksime su jumis artimiausiu metu.
          </Alert>
        ) : (
          <>
            {bike && (
              <Chip
                label={`Motociklas: ${bike}`}
                color="primary"
                variant="outlined"
                sx={{ mb: 1 }}
              />
            )}
            <div>
              Palikite kontaktinius duomenis ir mes jums paskambinsime 10
              minučių bėgyje.
            </div>
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
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} color="inherit">
          Uždaryti
        </Button>
        {status !== "sent" && (
          <Button
            type="submit"
            variant="contained"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Siunčiama..." : "Pateikti užklausą"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default EnquiryDialog

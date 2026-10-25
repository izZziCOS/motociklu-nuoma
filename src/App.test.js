import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
import { normalizePhone, validate } from "./Reusable/PopupDialog"

test("renders the hero and sections", () => {
  render(<App />)
  expect(screen.getByText(/JŪSŲ NUOTYKIAI PRASIDEDA ČIA/i)).toBeInTheDocument()
  expect(screen.getByText(/Nuomojami motociklai/i)).toBeInTheDocument()
  expect(screen.getByText(/Suteikiami draudimai/i)).toBeInTheDocument()
})

test("motorcycle switcher cycles through items", () => {
  render(<App />)
  expect(screen.getByText("1 / 3")).toBeInTheDocument()
  userEvent.click(screen.getByLabelText("Kitas motociklas"))
  expect(screen.getByText("2 / 3")).toBeInTheDocument()
  userEvent.click(screen.getByLabelText("Ankstesnis motociklas"))
  userEvent.click(screen.getByLabelText("Ankstesnis motociklas"))
  expect(screen.getByText("3 / 3")).toBeInTheDocument()
})

test("phone validation accepts common formats", () => {
  expect(normalizePhone("+370 643 07225")).toBe("+37064307225")
  expect(validate({ name: "Jonas", phone: "+370 643 07225" })).toEqual({})
  expect(validate({ name: "Jonas", phone: "864307225" })).toEqual({})
  expect(validate({ name: "", phone: "" })).toHaveProperty("name")
  expect(validate({ name: "Jonas", phone: "abc" })).toHaveProperty("phone")
})

test("enquiry form can be submitted again after being closed", () => {
  render(<App />)
  userEvent.click(screen.getAllByText("Pateikti užklausą")[0])
  userEvent.click(screen.getByText("Uždaryti"))
  userEvent.click(screen.getAllByText("Pateikti užklausą")[0])
  userEvent.click(screen.getByRole("button", { name: "Pateikti užklausą" }))
  expect(screen.getByText("Vardas yra privalomas.")).toBeInTheDocument()
})

import { fireEvent, render, screen, within } from "@testing-library/react"
import App from "./App"
import { normalizePhone, validate } from "./Reusable/EnquiryDialog"

test("renders the hero and sections", () => {
  render(<App />)
  expect(
    screen.getByRole("heading", { level: 1, name: /Jūsų nuotykiai/i }),
  ).toBeInTheDocument()
  expect(screen.getByText("Nuomojami motociklai")).toBeInTheDocument()
  expect(
    screen.getByText("Kaip tai veikia", { selector: "h2" }),
  ).toBeInTheDocument()
  expect(screen.getByText("Suteikiami draudimai")).toBeInTheDocument()
})

test("lists every motorcycle with its price", () => {
  render(<App />)
  expect(screen.getAllByRole("article")).toHaveLength(3)
  expect(screen.getByText("130 €")).toBeInTheDocument()
  expect(screen.getByText("140 €")).toBeInTheDocument()
  expect(screen.getByText("150 €")).toBeInTheDocument()
})

test("reserving a motorcycle opens the enquiry with that bike", () => {
  render(<App />)
  fireEvent.click(
    screen.getByRole("button", {
      name: "Rezervuoti Honda CBR1000RR Fireblade",
    }),
  )
  const dialog = screen.getByRole("dialog")
  expect(
    within(dialog).getByText("Motociklas: Honda CBR1000RR Fireblade"),
  ).toBeInTheDocument()
})

test("phone validation accepts common formats", () => {
  expect(normalizePhone("+370 643 07225")).toBe("+37064307225")
  expect(validate({ name: "Jonas", phone: "+370 643 07225" })).toEqual({})
  expect(validate({ name: "Jonas", phone: "864307225" })).toEqual({})
  expect(validate({ name: "", phone: "" })).toHaveProperty("name")
  expect(validate({ name: "Jonas", phone: "abc" })).toHaveProperty("phone")
})

test("enquiry form validates required fields", () => {
  render(<App />)
  const [headerButton] = screen.getAllByRole("button", {
    name: "Pateikti užklausą",
  })
  fireEvent.click(headerButton)
  const dialog = screen.getByRole("dialog")
  fireEvent.click(
    within(dialog).getByRole("button", { name: "Pateikti užklausą" }),
  )
  expect(within(dialog).getByText("Vardas yra privalomas.")).toBeInTheDocument()
  expect(
    within(dialog).getByText("Telefono numeris yra privalomas."),
  ).toBeInTheDocument()
})

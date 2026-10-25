import { fireEvent, render, screen, within } from "@testing-library/react"
import App from "./App"
import { normalizePhone, validate } from "./Reusable/EnquiryDialog"
import { calculateQuote, packagePrice } from "./pricing"
import { motorcycles, packages, tracks } from "./data"

const [zx10r, , fireblade] = motorcycles
const [intro, , weekend] = packages
const [nemuno] = tracks
const total = () => screen.getByTestId("booking-total").textContent

test("renders the hero and every section", () => {
  render(<App />)
  expect(
    screen.getByRole("heading", { level: 1, name: /Jūsų nuotykiai/i }),
  ).toBeInTheDocument()
  ;[
    "Nuomojami motociklai",
    "Paketai",
    "Trasos",
    "Apskaičiuokite kainą",
    "Reikalavimai ir saugumas",
    "Suteikiami draudimai",
    "Atsiliepimai",
    "Dažni klausimai",
  ].forEach((name) =>
    expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument(),
  )
})

test("lists every motorcycle with its price", () => {
  render(<App />)
  const fleet = within(
    screen.getByRole("region", { name: "Nuomojami motociklai" }),
  )
  expect(fleet.getAllByRole("article")).toHaveLength(3)
  ;["130 €", "140 €", "150 €"].forEach((price) =>
    expect(fleet.getByText(price)).toBeInTheDocument(),
  )
})

test("pricing applies half-day factor and multi-day discounts", () => {
  expect(packagePrice(intro, zx10r)).toBe(78)
  expect(packagePrice(weekend, zx10r)).toBe(234)

  const quote = calculateQuote({
    bike: fireblade,
    track: nemuno,
    format: "full",
    days: 3,
    extras: { gear: true },
  })
  // 450 rental − 68 (15 %) + 180 track + 75 gear
  expect(quote.total).toBe(637)
  expect(quote.lines.find((line) => line.discount).amount).toBe(-68)
})

test("calculator updates the total as options change", () => {
  render(<App />)
  expect(total()).toBe("190 €") // ZX-10R full day + Nemuno žiedas
  fireEvent.click(screen.getByRole("button", { name: "Daugiau dienų" }))
  expect(total()).toBe("354 €") // 2 days, −10 %
  fireEvent.click(screen.getByRole("checkbox", { name: /Instruktorius/ }))
  expect(total()).toBe("534 €")
})

test("choosing a package, track or bike preselects the calculator", () => {
  render(<App />)
  fireEvent.click(
    screen.getByRole("button", { name: "Pasirinkti paketą Pažintis" }),
  )
  expect(screen.getByRole("radio", { name: "Pusė dienos" })).toBeChecked()
  expect(total()).toBe("138 €")

  fireEvent.click(
    screen.getByRole("button", { name: "Rinktis trasą Biķernieki" }),
  )
  expect(screen.getByRole("combobox")).toHaveValue("bikernieki")

  fireEvent.click(
    screen.getByRole("button", {
      name: "Rezervuoti Honda CBR1000RR Fireblade",
    }),
  )
  expect(
    screen.getByRole("radio", { name: /CBR1000RR Fireblade/ }),
  ).toBeChecked()
})

test("booking from the calculator opens the enquiry with a summary", () => {
  render(<App />)
  const summary = within(
    screen.getByRole("complementary", { name: "Užsakymo suvestinė" }),
  )
  fireEvent.click(summary.getByRole("button", { name: "Rezervuoti" }))
  const dialog = within(screen.getByRole("dialog"))
  expect(
    dialog.getByText(
      "Kawasaki Ninja ZX-10R · Visa diena · Nemuno žiedas · 190 €",
    ),
  ).toBeInTheDocument()
})

test("FAQ lists questions with the first one open", () => {
  render(<App />)
  const faq = within(screen.getByRole("region", { name: "Dažni klausimai" }))
  const items = faq.getAllByRole("group")
  expect(items).toHaveLength(7)
  expect(items[0]).toHaveAttribute("open")
  expect(items[1]).not.toHaveAttribute("open")
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
  const dialog = within(screen.getByRole("dialog"))
  fireEvent.click(dialog.getByRole("button", { name: "Pateikti užklausą" }))
  expect(dialog.getByText("Vardas yra privalomas.")).toBeInTheDocument()
  expect(
    dialog.getByText("Telefono numeris yra privalomas."),
  ).toBeInTheDocument()
})

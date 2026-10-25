export const FORMATS = {
  half: { label: "Pusė dienos", factor: 0.6 },
  full: { label: "Visa diena", factor: 1 },
}

export const EXTRAS = {
  gear: { label: "Ekipiruotės nuoma", pricePerDay: 25 },
  instructor: { label: "Instruktorius", pricePerDay: 90 },
}

export const MAX_DAYS = 5

export const multiDayDiscount = (days) => {
  if (days >= 3) return 0.15
  if (days === 2) return 0.1
  return 0
}

export const formatPrice = (amount) => `${amount.toLocaleString("lt-LT")} €`

// Half-day bookings are always a single day.
export const effectiveDays = ({ format, days }) =>
  format === "half" ? 1 : days

export const calculateQuote = ({ bike, track, format, days, extras = {} }) => {
  const dayCount = effectiveDays({ format, days })
  const dayLabel = dayCount > 1 ? ` × ${dayCount} d.` : ""
  const rental = Math.round(
    bike.pricePerDay * FORMATS[format].factor * dayCount,
  )

  const lines = [
    {
      label: `${bike.model}, ${FORMATS[format].label.toLowerCase()}${dayLabel}`,
      amount: rental,
    },
  ]

  const discountRate = format === "full" ? multiDayDiscount(dayCount) : 0
  if (discountRate > 0) {
    lines.push({
      label: `Nuolaida ${Math.round(discountRate * 100)} %`,
      amount: -Math.round(rental * discountRate),
      discount: true,
    })
  }

  lines.push({
    label: `Trasos mokestis, ${track.name}${dayLabel}`,
    amount: track.feePerDay * dayCount,
  })

  Object.entries(EXTRAS).forEach(([id, extra]) => {
    if (extras[id]) {
      lines.push({
        label: `${extra.label}${dayLabel}`,
        amount: extra.pricePerDay * dayCount,
      })
    }
  })

  const total = lines.reduce((sum, line) => sum + line.amount, 0)
  return { lines, total, days: dayCount }
}

// Rental price only (no track fee or extras), used for "nuo X €" labels.
export const packagePrice = (pkg, bike) => {
  const rental = Math.round(
    bike.pricePerDay * FORMATS[pkg.format].factor * pkg.days,
  )
  const discount =
    pkg.format === "full" ? Math.round(rental * multiDayDiscount(pkg.days)) : 0
  return rental - discount
}

const asset = (file) => `${process.env.PUBLIC_URL}/${file}`

export const motorcycles = [
  {
    id: "zx10r",
    brand: "Kawasaki",
    model: "Ninja ZX-10R",
    imageSrc: asset("motorcycle-kawasaki.webp"),
    topSpeed: "280 km/h",
    suspension: "KYB",
    pricePerDay: 130,
  },
  {
    id: "zx10r-krt",
    brand: "Kawasaki",
    model: "Ninja ZX-10R KRT",
    imageSrc: asset("motorcycle-kawasaki2.webp"),
    topSpeed: "290 km/h",
    suspension: "Showa BFF",
    pricePerDay: 140,
  },
  {
    id: "fireblade",
    brand: "Honda",
    model: "CBR1000RR Fireblade",
    imageSrc: asset("motorcycle-honda.webp"),
    topSpeed: "310 km/h",
    suspension: "Öhlins Series 3",
    pricePerDay: 150,
  },
]

export const steps = [
  {
    title: "Pateikite užklausą",
    text: "Palikite vardą ir telefono numerį – užtruks mažiau nei minutę.",
  },
  {
    title: "Paskambinsime per 10 min.",
    text: "Suderinsime datą, motociklą ir reikalingą draudimą.",
  },
  {
    title: "Į trasą",
    text: "Atsiimkite paruoštą motociklą ir mėgaukitės žiedu.",
  },
]

export const insurances = [
  { icon: "shield", text: "Motociklo KASKO draudimas" },
  { icon: "heart", text: "Vairuotojo sveikatos draudimas" },
  {
    icon: "document",
    text: "Privalomasis vairuotojų civilinės atsakomybės draudimas",
  },
]

const asset = (file) => `${process.env.PUBLIC_URL}/${file}`

export const motorcycles = [
  {
    name: "Kawasaki",
    imageSrc: asset("motorcycle-kawasaki.jpg"),
    specs: [
      ["Variklis", "998 cm³ keturių cilindrų"],
      ["Elektronika", "IMU"],
      ["Pakaba", "KYB teleskopinė pakaba"],
      ["Transmisija", "6 greičių mechaninė pavarų dėžė su šlapia sankaba"],
      ["Pavarų perjungiklis", "Greita pavarų perjungimo sistema"],
      ["Maksimalus greitis", "280 km/h"],
    ],
    pricePerDay: 130,
  },
  {
    name: "Kawasaki",
    imageSrc: asset("motorcycle-kawasaki2.jpg"),
    specs: [
      ["Variklis", "998 cm³ keturių cilindrų"],
      ["Elektronika", "IMU"],
      ["Pakaba", "Showa Balance Free Front Forks"],
      ["Transmisija", "6 greičių mechaninė pavarų dėžė su šlapia sankaba"],
      ["Pavarų perjungiklis", "Greita pavarų perjungimo sistema"],
      ["Maksimalus greitis", "290 km/h"],
    ],
    pricePerDay: 140,
  },
  {
    name: "Honda",
    imageSrc: asset("motorcycle-honda.jpg"),
    specs: [
      ["Variklis", "998 cm³ keturių cilindrų"],
      ["Elektronika", "IMU"],
      ["Pakaba", "Öhlins Series 3 elektroninė pakaba"],
      ["Transmisija", "6 greičių mechaninė pavarų dėžė su šlapia sankaba"],
      ["Pavarų perjungiklis", "Greita pavarų perjungimo sistema"],
      ["Maksimalus greitis", "310 km/h"],
    ],
    pricePerDay: 150,
  },
]

export const insurances = [
  {
    imageSrc: asset("crash.jpg"),
    text: "Motociklo KASKO draudimas",
  },
  {
    imageSrc: asset("life-insurance.jpg"),
    text: "Vairuotojo sveikatos draudimas",
  },
  {
    imageSrc: asset("insurance.jpg"),
    text: "Privalomasis vairuotojų civilinės atsakomybės draudimas",
  },
]

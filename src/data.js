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

export const packages = [
  {
    id: "intro",
    name: "Pažintis",
    format: "half",
    days: 1,
    duration: "Pusė dienos",
    description: "Pirmam kartui trasoje arba greitam adrenalino užtaisui.",
    features: [
      "3 sesijos po 20 min.",
      "Kuras ir padangų šildytuvai",
      "Saugos instruktažas",
      "KASKO draudimas",
    ],
  },
  {
    id: "trackday",
    name: "Track day",
    format: "full",
    days: 1,
    duration: "Visa diena",
    description:
      "Pilna diena trasoje – laiko išbandyti ir patobulinti linijas.",
    features: [
      "Visos dienos sesijos",
      "Kuras ir padangų šildytuvai",
      "Mechaniko pagalba boksuose",
      "KASKO draudimas",
      "Laiko matavimas",
    ],
    featured: true,
  },
  {
    id: "weekend",
    name: "Savaitgalis",
    format: "full",
    days: 2,
    duration: "2 dienos",
    description: "Dvi dienos iš eilės – didžiausia pažanga ir 10 % nuolaida.",
    features: [
      "Viskas iš „Track day“",
      "Nauja padangų pora",
      "Telemetrijos analizė",
      "10 % nuolaida",
    ],
  },
]

export const tracks = [
  {
    id: "nemuno",
    name: "Nemuno žiedas",
    location: "Kačerginė, Kauno r.",
    length: "3,35 km",
    turns: 12,
    feePerDay: 60,
    dates: ["2027-04-24", "2027-05-15", "2027-06-05"],
    path: "M30 90 L60 30 Q70 15 90 25 L120 45 Q135 52 150 40 L165 28 Q180 20 180 40 L175 85 Q172 100 155 100 L45 100 Q25 100 30 90 Z",
  },
  {
    id: "aukstadvaris",
    name: "Aukštadvario trasa",
    location: "Aukštadvaris, Trakų r.",
    length: "2,10 km",
    turns: 10,
    feePerDay: 45,
    dates: ["2027-05-01", "2027-05-29", "2027-06-19"],
    path: "M40 60 Q40 20 80 20 L140 20 Q170 20 170 45 Q170 65 145 65 L120 65 Q105 65 110 80 Q115 100 90 100 L60 100 Q40 100 40 80 Z",
  },
  {
    id: "bikernieki",
    name: "Biķernieki",
    location: "Ryga, Latvija",
    length: "3,60 km",
    turns: 13,
    feePerDay: 70,
    dates: ["2027-05-08", "2027-06-12", "2027-07-10"],
    path: "M25 70 L50 25 Q55 15 68 18 L110 30 Q125 34 135 22 Q145 12 160 20 L178 32 Q188 40 180 52 L150 95 Q143 104 130 102 L40 95 Q20 92 25 70 Z",
  },
]

export const steps = [
  {
    title: "Pateikite užklausą",
    text: "Pasirinkite motociklą, paketą ir trasą – užtruks mažiau nei minutę.",
  },
  {
    title: "Paskambinsime per 10 min.",
    text: "Patvirtinsime datą, ekipiruotės dydžius ir užstatą.",
  },
  {
    title: "Į trasą",
    text: "Instruktažas, šilti padangų šildytuvai ir paruoštas motociklas laukia boksuose.",
  },
]

export const requirements = [
  "A kategorijos vairuotojo pažymėjimas, turimas bent 2 metus",
  "Amžius nuo 21 metų",
  "Patirtis vairuojant sportinį motociklą",
  "500 € užstatas, blokuojamas banko kortelėje",
  "Saugos instruktažas prieš pirmą sesiją (įskaičiuota)",
]

export const gear = [
  "Odinis kombinezonas",
  "Šalmas (ECE 22.06)",
  "Motociklininko batai",
  "Pirštinės",
  "Nugaros apsauga",
]

export const insurances = [
  { icon: "shield", text: "Motociklo KASKO draudimas" },
  { icon: "heart", text: "Vairuotojo sveikatos draudimas" },
  {
    icon: "document",
    text: "Privalomasis vairuotojų civilinės atsakomybės draudimas",
  },
]

export const reviews = [
  {
    name: "Mantas K.",
    rating: 5,
    text: "Pirmas track day gyvenime ir iškart su Fireblade. Instruktorius per pusdienį pataisė mano linijas labiau nei trys sezonai keliuose.",
    bike: "Honda CBR1000RR Fireblade",
    track: "Nemuno žiedas",
  },
  {
    name: "Gintarė P.",
    rating: 5,
    text: "Motociklas idealios būklės, padangos jau sušildytos, kai atvykau. Belieka važiuoti – jokio vargo su transportavimu.",
    bike: "Kawasaki Ninja ZX-10R",
    track: "Aukštadvario trasa",
  },
  {
    name: "Tomas R.",
    rating: 4,
    text: "Puiki organizacija ir greitas atsakymas. Vienintelis minusas – norėtųsi daugiau laisvų datų birželį.",
    bike: "Kawasaki Ninja ZX-10R KRT",
    track: "Biķernieki",
  },
  {
    name: "Lukas V.",
    rating: 5,
    text: "Savaitgalio paketas vertas kiekvieno euro. Telemetrijos analizė antrą dieną numušė beveik 3 sekundes nuo rato.",
    bike: "Kawasaki Ninja ZX-10R KRT",
    track: "Nemuno žiedas",
  },
  {
    name: "Rūta S.",
    rating: 5,
    text: "Dovanojau vyrui gimtadienio proga. Viskas suderinta vienu skambučiu, o emocijų – visam sezonui.",
    bike: "Kawasaki Ninja ZX-10R",
    track: "Nemuno žiedas",
  },
  {
    name: "Paulius D.",
    rating: 5,
    text: "Važiuoju trasose ne pirmus metus, bet su Öhlins pakaba Fireblade tiesiog kitas lygis. Grįšiu.",
    bike: "Honda CBR1000RR Fireblade",
    track: "Biķernieki",
  },
]

export const faqs = [
  {
    question: "Kokių vairuotojo teisių reikia?",
    answer:
      "Reikia A kategorijos vairuotojo pažymėjimo, turimo bent 2 metus. Trasoje greičio ribojimų nėra, todėl prašome realiai įvertinti savo patirtį.",
  },
  {
    question: "Ar galiu važiuoti, jei niekada nebuvau trasoje?",
    answer:
      "Taip. Rekomenduojame „Pažinties“ paketą su instruktoriumi – jis parodys idealias linijas ir stabdymo taškus, o pirmos sesijos vyks ramesniu tempu.",
  },
  {
    question: "Kokio dydžio užstatas ir kada jį atgausiu?",
    answer:
      "500 € užstatas blokuojamas banko kortelėje atvykus ir atblokuojamas tą pačią dieną po motociklo apžiūros.",
  },
  {
    question: "Kas nutinka, jei nukrentu?",
    answer:
      "Motociklo žalą dengia KASKO draudimas su 300 € išskaita. Jūsų sveikatą saugo vairuotojo sveikatos draudimas, o trasoje visada budi medikai.",
  },
  {
    question: "Ar galiu išsinuomoti ekipiruotę?",
    answer:
      "Taip, visą komplektą (kombinezoną, šalmą, batus, pirštines ir nugaros apsaugą) galite išsinuomoti už 25 € per dieną. Turime dydžius nuo XS iki XXL.",
  },
  {
    question: "Ar galiu atšaukti arba perkelti rezervaciją?",
    answer:
      "Atšaukti nemokamai galima likus 7 dienoms. Vėliau grąžinama 50 % sumos. Jei trasos dieną lyja, datą perkeliame nemokamai.",
  },
  {
    question: "Ar galiu filmuoti savo važiavimą?",
    answer:
      "Žinoma. Kiekviename motocikle yra veiksmo kameros laikiklis, o kamerą galite atsivežti savo arba išsinuomoti vietoje.",
  },
]

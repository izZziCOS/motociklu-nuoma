# Žiedo motociklų nuoma

Single-page website for track motorcycle rental in Lithuania, built with
React (Create React App) and MUI.

Live: https://izzzicos.github.io/motociklu-nuoma/

## Getting started

```sh
npm install
npm start          # dev server on http://localhost:3000
```

## Docker

```sh
docker compose up -d --build   # http://localhost:3080
docker compose down
docker build --target test .   # lint + tests only
```

Set `PORT` to change the host port and `REACT_APP_FORM_ENDPOINT` to wire up
the enquiry form (both read from the shell or a `.env` file).

## Scripts

| Command          | Description                               |
| ---------------- | ----------------------------------------- |
| `npm start`      | Run the dev server                        |
| `npm test`       | Run tests in watch mode                   |
| `npm run build`  | Production build into `build/`            |
| `npm run lint`   | Lint `src/`                               |
| `npm run format` | Format `src/` with Prettier               |
| `npm run deploy` | Build and publish `build/` to GitHub Pages |

## Enquiry form

The "Pateikti užklausą" form posts `{ name, phone }` as JSON to
`REACT_APP_FORM_ENDPOINT` (e.g. a [Formspree](https://formspree.io) form URL).
Copy `.env.example` to `.env.local` and set it before building. If it is not
set, submitting the form opens WhatsApp with the details prefilled.

## Editing content

- Motorcycles and insurance cards: [src/data.js](src/data.js)
- Phone number and contact links: [src/config.js](src/config.js)
- Images: [public/](public/) — keep photos around 1000px wide (hero 1920px)

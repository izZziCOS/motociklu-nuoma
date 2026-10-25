FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# `docker build --target test .` runs lint and tests
FROM deps AS test
COPY . .
RUN npm run lint && CI=true npm test -- --watchAll=false

FROM deps AS build
COPY . .
# Served from the container root, not the GitHub Pages subpath in "homepage"
ARG PUBLIC_URL=/
ARG REACT_APP_FORM_ENDPOINT=
ENV PUBLIC_URL=$PUBLIC_URL \
    REACT_APP_FORM_ENDPOINT=$REACT_APP_FORM_ENDPOINT
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

# check=skip=SecretsUsedInArgOrEnv
# ^ POSTHOG_KEY is a PostHog *project token*: public by design (write-only, and shipped
#   in the site's client-side JavaScript), so passing it as a build ARG is fine.

# Use current LTS (Node 24) — Node 20 reached EOL in April 2026
FROM node:24-alpine

WORKDIR /app

# Better layer caching & reproducible installs
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Optional PostHog project key, baked into the static build:
#   docker build --build-arg POSTHOG_KEY=phc_xxx -t boringengineer-site:latest .
# Without it, the site builds with analytics disabled.
ARG POSTHOG_KEY

# Build the static site
RUN npm run build

EXPOSE 3000

# Serve the built site in the container
CMD ["npm", "run", "serve", "--", "--port", "3000", "--host", "0.0.0.0"]
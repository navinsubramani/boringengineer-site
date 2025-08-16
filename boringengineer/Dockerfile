# Use current LTS (Node 20) — Node 18 is EOL
FROM node:20-alpine

WORKDIR /app

# Better layer caching & reproducible installs
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the static site
RUN npm run build

EXPOSE 3000

# Serve the built site in the container
CMD ["npm", "run", "serve", "--", "--port", "3000", "--host", "0.0.0.0"]
# Procedure to build the boringengineer site

1. **Clone the repository**: Start by cloning this repository to your local machine.
2. **Configure Workspace**: Ensure you have a suitable workspace set up for Docusaurus development.
powerShell
   ```bash
   cd boringengineer
   ```
3. **Build Docker Image**: Build the Docker image for the site.
   ```bash
   docker build -t boringengineer-site:latest .
   ```
   To enable PostHog analytics (US Cloud), use the build script, which reads the PostHog project token from a local `.env` file (gitignored and dockerignored, so it is never committed or baked into the image). Without a token, the site builds with analytics disabled.
   ```bash
   cp .env.example .env      # once, then fill in POSTHOG_KEY (and REGISTRY if pushing)
   ./build-image.sh          # build
   ./build-image.sh --push   # build, tag and push to $REGISTRY
   ```
4. **Run Docker Container**: Run the Docker container to start the site.
   ```bash
   docker run --rm -p 3000:3000 boringengineer-site:latest
   ```
5. Access the site: Open your web browser and navigate to `http://localhost:3000` to view the site.

# Procedure to push images to the private registry

1. **Login to Docker Desktop**: Ensure you are logged into Docker Desktop with your credentials.
2. **Allow HTTP connections**: If you are using a private registry, ensure that HTTP connections are allowed from `Settings` > `Docker Engine`
    ```json
    {
    "insecure-registries": ["<registry-address:port>"]
    }
    ```
4. *Transfer the image to the private registry**: Use the following command to transfer the image to your private registry.
   ```bash
   docker tag boringengineer-site:latest <server-ip>:<port>/boringengineer-site:latest
    docker push <server-ip>:<port>/boringengineer-site:latest
    ```

# Proceudre to enable insecure registry in Ubuntu

```bash
# 1) Create the config file
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json >/dev/null <<'EOF'
{
"insecure-registries": ["<registry-address:port>"]
}
EOF

# 2) Restart Docker
sudo systemctl restart docker

# 3) Verify the setting
docker info | grep -A3 "Insecure Registries"
curl http://<registry-address:port>/v2/
```
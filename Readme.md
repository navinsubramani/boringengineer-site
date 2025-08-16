# Introduction

This repository contains the source code for the boringengineer website, which is built using Docusaurus, a modern static website generator. The site serves as a personal platform for me to share his experiences in engineering, technology, and life.

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

# To Do
- [ ] Add my skills section with icons and hyperlinks to relevant pages. This should be a visually appealing section that highlights my expertise.
- [ ] Port all the blogs from the old site to this new Docusaurus site. This will ensure that all my previous writings are accessible in the new format.
- [ ] Add a DIY section to showcase my projects and experiments. This section should include detailed descriptions and images of my work.
- [ ] Find a way to host the images and other static assets on a local CDN server, but outside this site. This will improve loading times and reduce bandwidth usage.
- [ ] Create a Docker image and compose for the site, with the clear automatin and documentation on how to run it. This will make it easier for others to deploy the site locally or on their servers.
- [ ] Create redirects for the failed links from the old site to the new site. This will ensure that visitors can still access the site even if the content is not moved or broken.

# Take Down Old Site
- [ ] Once the new site is fully functional. Take down the old site domain and redirect to the new site using cloudflare. This will ensure that all traffic is directed to the new site and that users are not confused by the old content.
- [ ] Unsubscribe from the old site domain and remove it from the hosting provider. This will free up resources and prevent any confusion about which site is the official one.
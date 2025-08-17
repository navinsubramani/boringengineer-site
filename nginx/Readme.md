# Purpose
nginx is used for serving static files and acting as a reverse proxy for the application. Given the blogs might contain lot of images, videos, and web applications, nginx is configured to handle these efficiently. This way, docusaurus can focus on serving the content while nginx manages the static assets.

## Procedure to host NGINX

1. Add nginx service to the docker-compose file.
   ```yaml
    assets:
        image: nginx:alpine
        container_name: assets-nginx
        ports:
        - "xxxx:80"           # http://<host>:8081
        volumes:
        - /home/somepath/content/:/usr/share/nginx/html:ro
        - /home/somepath/nginx.conf:/etc/nginx/conf.d/default.conf:ro
        restart: unless-stopped
   ```

2. In the folder `/home/somepath/content/`, place all the static files you want to serve. This can include images, videos, and other assets.
3. Provide permission to the content folder so that nginx can read the files.
   ```bash
    # Directories need 755 (or at least +x so they are traversable)
    find /home/somepath/content -type d -exec chmod 755 {} \;

    # Files can be 644 (world-readable)
    find /home/somepath/content -type f -exec chmod 644 {} \;
   ```

4. TEST: Access the nginx server by navigating to `http://<host>:xxxx/<file path>` in your web browser. You should see the static files being served.
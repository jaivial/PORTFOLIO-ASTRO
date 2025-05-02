# Deploying Your Astro Project to Hostinger VPS

This guide details the steps to deploy your static Astro project to a Hostinger VPS with the IP address `178.16.130.178`, serving it under the domain `jaimedigitalstudio.com` from the `/var/www/jaimedigitalstudio.com` directory.

**Assumptions:**

*   You have SSH access to your Hostinger VPS.
*   Your VPS is running a common Linux distribution (like Ubuntu, Debian, CentOS). Commands might need slight adjustments for different distributions.
*   You have `sudo` privileges on the VPS.
*   You manage your DNS records through Hostinger or another provider.

## Step 1: Configure DNS Records

You need to point your domain `jaimedigitalstudio.com` and the `www` subdomain to your VPS IP address.

1.  **Log in to your DNS provider's control panel** (e.g., Hostinger hPanel).
2.  **Find the DNS Zone Editor** for `jaimedigitalstudio.com`.
3.  **Modify/Delete Existing Records:**
    *   Find the `ALIAS` record for `@` (root domain) pointing to `jaimedigitalstudio.com.cdn.hstgr.net`. **Delete** this record or **change** its type to `A`.
    *   Find the `CNAME` record for `www` pointing to `www.jaimedigitalstudio.com.cdn.hstgr.net`. **Delete** this record or **change** its type to `A`.
4.  **Add New A Records:**
    *   Create an `A` record:
        *   **Name/Host:** `@` (or leave blank if your provider requires it for the root domain)
        *   **Type:** `A`
        *   **Points to/Value:** `178.16.130.178`
        *   **TTL:** Choose a suitable value (e.g., 3600 seconds / 1 hour, or lower if you anticipate changes soon).
    *   Create another `A` record:
        *   **Name/Host:** `www`
        *   **Type:** `A`
        *   **Points to/Value:** `178.16.130.178`
        *   **TTL:** Same as above.
5.  **Save Changes.** DNS propagation can take anywhere from a few minutes to 48 hours, but often happens much faster. You can use tools like `dnschecker.org` to monitor the propagation.

**Note:** Keep the existing MX, TXT (SPF, DKIM, DMARC), and CAA records unless you intend to change your email hosting or certificate authority policies.

## Step 2: Prepare Your Local Project

1.  **Ensure your project is up-to-date** and all changes are committed to version control (optional but recommended).
2.  **Build your Astro project:** Open your terminal in the project root (`/Users/usuario/Documents/PROYECTOS/PROYECTOS_PUBLICADOS/PORTFOLIO-ASTRO`) and run:
    ```bash
    npm run build
    ```
    This will generate the static site files in the `dist/` directory.

## Step 3: Prepare Your VPS

Connect to your VPS via SSH:

```bash
ssh your_vps_user@178.16.130.178
```

Replace `your_vps_user` with your actual VPS username.

1.  **Update System Packages:**
    ```bash
    sudo apt update && sudo apt upgrade -y
    # Or for CentOS/RHEL-based systems:
    # sudo yum update -y
    ```
2.  **Install Nginx (Web Server):**
    ```bash
    sudo apt install nginx -y
    # Or for CentOS/RHEL-based systems:
    # sudo yum install nginx -y
    ```
3.  **Start and Enable Nginx:**
    ```bash
    sudo systemctl start nginx
    sudo systemctl enable nginx
    ```
4.  **Create the Website Directory:**
    ```bash
    sudo mkdir -p /var/www/jaimedigitalstudio.com
    ```
5.  **Set Permissions (Optional but Recommended):** Allow your user to write to this directory without `sudo` constantly. Replace `your_vps_user` with your VPS username.
    ```bash
    sudo chown -R your_vps_user:your_vps_user /var/www/jaimedigitalstudio.com
    sudo chmod -R 755 /var/www
    ```

## Step 4: Configure Nginx

1.  **Create an Nginx Server Block Configuration File:**
    ```bash
    sudo nano /etc/nginx/sites-available/jaimedigitalstudio.com
    ```
2.  **Paste the following configuration into the file.** Adjust `server_name` if needed, but `jaimedigitalstudio.com www.jaimedigitalstudio.com` should cover both.

    ```nginx
    server {
        listen 80;
        listen [::]:80;

        server_name jaimedigitalstudio.com www.jaimedigitalstudio.com;

        root /var/www/jaimedigitalstudio.com;
        index index.html index.htm;

        location / {
            try_files $uri $uri/ /index.html; # Handles SPA routing if needed, otherwise just serves files
        }

        # Optional: Add custom error pages
        # error_page 404 /404.html;
        # location = /404.html {
        #     internal;
        # }

        # Optional: Add headers for security, caching etc.
        # add_header X-Frame-Options "SAMEORIGIN";
        # add_header X-Content-Type-Options "nosniff";
        # add_header Referrer-Policy "strict-origin-when-cross-origin";
        # location ~* \.(?:css|js)$ {
        #   expires 1y;
        #   add_header Cache-Control "public";
        # }
        # location ~* \.(?:png|jpg|jpeg|gif|ico|webp|svg)$ {
        #   expires 1M;
        #   add_header Cache-Control "public";
        # }
    }
    ```

3.  **Save and close the file** (Ctrl+X, then Y, then Enter in `nano`).
4.  **Enable the Site by Creating a Symbolic Link:**
    ```bash
    sudo ln -s /etc/nginx/sites-available/jaimedigitalstudio.com /etc/nginx/sites-enabled/
    ```
5.  **Remove the Default Nginx Site (Optional but Recommended):**
    ```bash
    # Check if it exists first
    ls /etc/nginx/sites-enabled/default
    # If it exists, remove it
    sudo rm /etc/nginx/sites-enabled/default
    ```
6.  **Test Nginx Configuration:**
    ```bash
    sudo nginx -t
    ```
    If it shows `syntax is ok` and `test is successful`, proceed. Otherwise, review your configuration file for errors.
7.  **Restart Nginx to Apply Changes:**
    ```bash
    sudo systemctl restart nginx
    ```
8.  **Configure Firewall (if applicable):** If you use `ufw` or another firewall, allow HTTP traffic:
    ```bash
    sudo ufw allow 'Nginx HTTP'
    # Or more specifically:
    # sudo ufw allow 80/tcp
    sudo ufw enable # If not already enabled
    sudo ufw status # To check
    ```

## Step 5: Deploy Your Project Files

From your **local machine's terminal** (in the project root directory), use `rsync` to efficiently transfer the built files to the VPS. `rsync` is generally preferred over `scp` for repeated deployments as it only transfers changed files.

```bash
rsync -avz --delete dist/ your_vps_user@178.16.130.178:/var/www/jaimedigitalstudio.com/
```

*   `-a`: Archive mode (preserves permissions, ownership, etc.)
*   `-v`: Verbose output
*   `-z`: Compress file data during transfer
*   `--delete`: Deletes files on the destination that don't exist in the source (`dist/`) - ensures a clean deployment.
*   `dist/`: The source directory (the trailing slash is important - it means copy the *contents* of `dist`).
*   `your_vps_user@178.16.130.178:/var/www/jaimedigitalstudio.com/`: The destination.

Enter your VPS password when prompted.

## Step 6: Set Up HTTPS with Let's Encrypt (Highly Recommended)

1.  **Install Certbot (Let's Encrypt Client):**
    ```bash
    # On the VPS
    sudo apt install certbot python3-certbot-nginx -y
    # Or for CentOS/RHEL-based systems:
    # sudo yum install certbot python3-certbot-nginx -y
    ```
2.  **Obtain and Install SSL Certificate:**
    ```bash
    sudo certbot --nginx -d jaimedigitalstudio.com -d www.jaimedigitalstudio.com
    ```
    *   Follow the prompts. It will ask for your email address (for renewal notices) and agree to the terms of service.
    *   Choose whether to redirect HTTP traffic to HTTPS (Recommended).
    *   Certbot will automatically update your Nginx configuration (`/etc/nginx/sites-available/jaimedigitalstudio.com`) to use the SSL certificate and handle HTTPS.
3.  **Verify Auto-Renewal:** Certbot should set up automatic renewal. You can test it:
    ```bash
    sudo certbot renew --dry-run
    ```
4.  **Adjust Firewall (if applicable):** Allow HTTPS traffic:
    ```bash
    sudo ufw allow 'Nginx HTTPS'
    # Or more specifically:
    # sudo ufw allow 443/tcp
    sudo ufw status
    ```

## Step 7: Test Your Website

Open your web browser and navigate to `https://jaimedigitalstudio.com` or `https://www.jaimedigitalstudio.com`. Your Astro project should now be live!

## Future Deployments

For subsequent updates:

1.  Make changes to your project locally.
2.  Run `npm run build` locally.
3.  Run the `rsync` command again from your local machine:
    ```bash
    rsync -avz --delete dist/ your_vps_user@178.16.130.178:/var/www/jaimedigitalstudio.com/
    ```

Your site will be updated with the latest build.

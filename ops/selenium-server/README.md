Remote Selenium Chrome for Vercel

Start on a Linux VPS with Docker:

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin curl
sudo systemctl enable --now docker

cd /path/to/repo/ops/selenium-server
sudo docker compose up -d
sudo docker compose ps
./check-status.sh
```

If the server is reachable from Vercel, set:

```txt
SELENIUM_REMOTE_URL=http://YOUR_SERVER_IP:4444
SELENIUM_REMOTE_BROWSER=chrome
```

VNC preview is available at:

```txt
http://YOUR_SERVER_IP:7900/?autoconnect=1&resize=scale
```

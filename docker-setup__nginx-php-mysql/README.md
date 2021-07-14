# Setup and run

```
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./nginx/ssl/private.key -out ./nginx/ssl/public.crt
```

```
docker-compose up --build
```

Nginx + PHP

```
http://localhost:80
```

phpmyadmin

```
http://localhost:8000
```

<br />

# TODO

1. Add hearbeat check for mariadb (depends_on is not enough)

<br/>

# Docker

Remove all containers

```
docker rm $(docker ps -a -q) -f
```

Open container

```
docker exec -it {name} /bin/bash
```

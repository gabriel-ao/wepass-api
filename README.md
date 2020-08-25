# wepass-api

## --- Postgres

#### instalação de banco e sgdb docker para utilização do estudo

docker run --name wepassdb1 -e POSTGRES_USER=gabriel -e POSTGRES_PASSWORD=gabriel -e POSTGRES_DB=wpdb -p 5432:5432 -d postgres

docker pull dpage/pgadmin4

docker run --name pgAdmin --link wepassdb1 -p 5050:80 -e 'PGADMIN_DEFAULT_EMAIL=admin' -e 'PGADMIN_DEFAULT_PASSWORD=admin' -d dpage/pgadmin4

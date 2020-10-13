# wepass-api

mongodb://gabriel:gabriel@localhost:27017/wpdb?authSource=wpdb

## --- Postgres

#### instalação de banco e sgdb docker para utilização do estudo

docker run --name wepassdb1 -e POSTGRES_USER=gabriel -e POSTGRES_PASSWORD=gabriel -e POSTGRES_DB=wpdb -p 5432:5432 -d postgres

## PG ADMIN

docker pull dpage/pgadmin4

docker run --name pgAdmin --link wepassdb1 -p 5050:80 -e 'PGADMIN_DEFAULT_EMAIL=gabriel' -e 'PGADMIN_DEFAULT_PASSWORD=gabriel' -d dpage/pgadmin4

docker run --name pgAdmin -p 80:80 --link wepassdb1 -e "PGADMIN_DEFAULT_EMAIL=gabriel-ao@hotmail.com" -e "PGADMIN_DEFAULT_PASSWORD=gabriel" -d dpage/pgadmin4

## ADMINER

docker ps
docker exec -it postgre /bin/bash

docker run --name wepasssgdb -p 8080:8080 --link postgres:postgres -d adminer

## ---- MONGODB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('pedb').createUser({user: 'gabriel', pwd: 'gabriel', roles: [{role: 'readWrite', db: 'pedb'}]})"

docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('wpdb').createUser({user: 'gabriel', pwd: 'gabriel', roles: [{role: 'readWrite', db: 'wpdb'}]})"

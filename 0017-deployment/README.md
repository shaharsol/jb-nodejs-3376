## docker build
docker build . -t shaharsol/dep3376:1.0

## docker run
docker run --name dep3376 -e DB_HOST=host.docker.internal -e DB_USER=root -e DB_PASSWORD= -e DB_DATABASE=halfon -e DB_PORT=3311 -d shaharsol/dep3376:1.0
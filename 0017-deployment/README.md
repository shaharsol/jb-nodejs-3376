## run dev
DB_HOST=localhost DB_USER=root DB_password= DB_DATABASE=halfon DB_PORT=3311 npm run start:dev

## docker build
docker build . -t shaharsol/dep3376:1.0

## docker run
docker run --name dep3376 -e DB_HOST=host.docker.internal -e DB_USER=root -e DB_PASSWORD= -e DB_DATABASE=halfon -e DB_PORT=3311 -d shaharsol/dep3376:1.0

## building for prod
docker build . -f Dockerfile.prod -t shaharsol/dep3376prod:1.0

## testing prod
docker run --name dep3376prod -e DB_HOST=host.docker.internal -e DB_USER=root -e DB_PASSWORD= -e DB_DATABASE=halfon -e DB_PORT=3311 -d shaharsol/dep3376prod:1.0
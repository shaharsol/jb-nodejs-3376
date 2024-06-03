FROM node:18-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npx tsc
EXPOSE 3001
CMD node /app/dist/io.js
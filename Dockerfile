FROM node:16-alpine

WORKDIR /webapp/

# Layer 1) package[-lock].json
COPY package*.json ./

# Layer 2) node_modules
RUN npm install --omit=dev

# Layer 3) sources
COPY . .

# Layer 4) build main.js
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
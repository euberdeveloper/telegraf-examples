# arm64v8/ can be passed for arm
ARG SCOPE

FROM ${SCOPE}node:lts-alpine
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
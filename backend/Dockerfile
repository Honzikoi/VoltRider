FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Add entrypoint script
COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

RUN npm run build

EXPOSE 3000

# Use entrypoint.sh as the startup command
CMD ["sh", "/usr/src/app/entrypoint.sh"]
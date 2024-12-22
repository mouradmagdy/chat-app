# dockerfile for the backend
FROM node:20

#set working directory
WORKDIR /usr/src/app

#copy pack.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# copy the rest of the code
COPY backend ./backend

WORKDIR /usr/src/app/backend
# Expose port
EXPOSE 5000

#start the backend
CMD ["node","server.js"]
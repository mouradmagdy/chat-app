# Frontend dockerfile
FROM node:20 AS build

# set working directory
WORKDIR /usr/src/app

# copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# copy the rest of the code and build
COPY . .
RUN npm run build

# production stage
FROM nginx:stable
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy custom Nginx configuration for React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
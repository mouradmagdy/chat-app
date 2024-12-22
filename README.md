# Chat Application
<p align="center">
  <img src="https://github.com/mouradmagdy/chat-app/blob/main/assets/pic4.png?raw=true" alt="Screenshot 1" width="45%" />
  <img src="https://github.com/mouradmagdy/chat-app/blob/main/assets/pic5.png?raw=true" alt="Screenshot 2" width="45%" />
  <img src="https://github.com/mouradmagdy/chat-app/blob/main/assets/pic1.png?raw=true" alt="Screenshot 2" width="45%" />
  <img src="https://github.com/mouradmagdy/chat-app/blob/main/assets/pic2.png?raw=true" alt="Screenshot 2" width="45%" />
</p>

A real-time chatting application built with React, Node.js, MongoDB, and WebSockets, deployed with Docker.

## Features
* Real-time messaging using WebSockets
* User authentication
* Responsive and interactive user interface
* Deployment with Docker and Nginx

## Prerequisites
Ensure you have the following installed:
* Docker
* Docker Compose

## Running the Application
1. Clone the repository:
   ```bash
   git clone https://github.com/mouradmagdy/chat-app.git
   cd chat-app
   ```
2. ```bash
   docker-compose up --build
   ```
3. Access the application
   * open your browser and navigate to http://localhost:3000, The Nginx server routes requests to the correct services, so there’s no need to access the backend directly.



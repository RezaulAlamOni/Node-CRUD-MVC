# Simple CRUD Application

This is a simple CRUD application built with Node.js, Express, MongoDB, and Mongoose. The application is Dockerized for easy deployment and development.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker
- Docker Compose

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Clone the Repository

```sh
git clone https://github.com/RezaulAlamOni/Node-CRUD-MVC
cd Node-CRUD-MVC
```

## Project Structure

```sh
├── controller/
│ └── products.controller.js
├── routes/
│ └── products.routes.js
├── models/
│ └── product.model.js
├── index.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
```

## Build and Run the Docker Containers

```sh
# Build the Docker images

docker-compose build

# Start the Docker containers
docker-compose up

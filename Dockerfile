# Use the official Node.js image as a base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Rebuild native modules
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "dev"]

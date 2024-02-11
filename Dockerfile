# Use node lts-alpine as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular app
# RUN npm run build

# Expose port 4200
# EXPOSE 4200

# Command to run the Angular app
CMD ["ng","serve","--host", "0.0.0.0"]

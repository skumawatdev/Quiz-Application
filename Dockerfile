# Use a lightweight Node.js image as base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy all the source code to the working directory
COPY . .

# Expose the port that your app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["node", "main.js"]

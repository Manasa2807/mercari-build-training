FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port 3000
EXPOSE 3000

# Set environment variable to allow Vite to bind to all interfaces
ENV HOST=0.0.0.0

# Start the application
CMD ["npm", "start", "--", "--host"]

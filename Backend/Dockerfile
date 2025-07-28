FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json to workdir
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose app port
EXPOSE 3000

# Run app in development mode
CMD ["npm", "run", "dev"]

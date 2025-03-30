# Use Python 3.9 Alpine as the base image
FROM python:3.9-alpine

# Install SQLite
RUN apk add --no-cache sqlite

# Create a new user and group
RUN addgroup -S mercari && adduser -S trainee -G mercari

# Set the working directory
WORKDIR /app

# Ensure the `db` directory exists and set correct permissions
RUN mkdir -p /app/db && \
    chown -R trainee:mercari /app/db && \
    chmod -R 775 /app/db

# Copy application files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Switch to the non-root user
USER trainee

# Expose port 9000
EXPOSE 9000

# Command to run the application
CMD ["python", "main.py"]

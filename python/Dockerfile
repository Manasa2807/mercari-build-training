# Use Python 3.9 Alpine as the base image
FROM python:3.9-alpine

# Install SQLite
RUN apk add --no-cache sqlite

# Create a new user and group
RUN addgroup -S mercari && adduser -S trainee -G mercari

# Set the working directory
WORKDIR /app

# Ensure the `db` directory exists and set correct permissions
RUN mkdir -p /app/db /app/images && \
    chown -R trainee:mercari /app/db /app/images && \
    chmod -R 775 /app/db /app/images

# Copy application files
COPY . .

RUN chmod 777 /app/db /app/items.json

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Switch to the non-root user
USER trainee

# Expose port 9000
EXPOSE 9000

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000"]

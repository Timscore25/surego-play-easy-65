
#!/bin/bash

# Build the React application
echo "Building the React application..."
npm run build

# Create deployment directory if it doesn't exist
echo "Creating deployment directory..."
mkdir -p deploy

# Copy build files to deployment directory
echo "Copying build files to deployment directory..."
cp -r dist/* deploy/

echo "Build ready for deployment in the 'deploy' directory."
echo "To deploy to your server, use:"
echo "scp -r deploy/* user@104.21.19.163:/var/www/html"

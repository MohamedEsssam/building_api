#!/bin/sh

echo "Waiting for MongoDB to start..."
./wait-for db:27017 

echo "Loading all environment variables"
source exports.sh

echo "Starting the server..."
npm start 
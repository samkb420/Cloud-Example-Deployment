#!/usr/bin/env bash

## Complete the following steps to get Docker running locally

# Step 1:
docker build --tag=dscsample . 
# Step 2: 
# List docker images
docker image ls
# Step 3: 
# Run flask app
docker run -p 8080:8080 dscsample


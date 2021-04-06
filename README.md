# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree.
It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend), a basic Ionic client web application which consumes the RestAPI Backend.
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. 
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), a Node-Express application which runs a simple script to process images.

## Tasks

### Setup Node.js environment
Initialize the Node.js environment with `npm i` and run the development server with `npm run dev`.

### Create image filter endpoint
Create an endpoint in `./src/server.ts` which uses a query parameter to download an image from a public URL, filter the image, and return the result.

### Deploy the system using AWS ElasticBeanstalk
Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

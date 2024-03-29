# Unsplash API

Unsplash is a project made with Express, as a solution to a dev challenge from [Dev Challenges](https://legacy.devchallenges.io/paths/full-stack-developer).


## Description

Unsplash is an app that allows uploading images by URL, search images by name, and deleting images. Built ReactJs using create-react-app in the frontend, using Bootstrap for styling, and ExpressJS for the backend.

## Installation 
You'll need NodeJs to be installed on your machine. Also, you need to clone the [frontend repository](https://github.com/andres326/unsplash-client) to see how the client works. Clone the repository and install the dependencies using:  

```bash
npm install
```

We use MongoDB as storage, so you'll need a mongo db connection, you'll need to create a .env file with the following variables __PORT__ which should contain the port where the backend will run, and __MONGO_URL__ which should contain the URL for MongoDB connection. After that, you can start running: 

```bash
npm run dev
```
## Demo url

You can see the current web working on the [following link](https://unsplash-pc326.web.app/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
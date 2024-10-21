# Tool Learning Log

## Tool: **Node/Express**

## Project: **Self translating immigration website**


10/21/2024

We decided to use Node with Express JS to build our website which acquires the user's IP address and automatically translates the webpage based on their detected region.

### Setting up Node with Express:

I followed [this useful tutorial for getting node and and express js setup on my desktop and in vs code.](https://www.youtube.com/watch?v=P6RZfI8KDYc) From there, me and my partner will upload our version of the files to the cs50, <i>vs code for the web</i> IDE and push our changes and pull the other partner's changes, downloading the altered files and working on them in the standalone vs code app on desktop with express setup which is reliant on node running in the operating system. This seems like the best method for now.

### Tinkering

I hadn't uploaded any of my changes yet, but my partner had already initiated an express project which we wil be using to tinker for further learning logs and when building the freedom project.

```js
{
  "name": "tinker-tool",
  "version": "1.0.0",
  "description": "",
  "main": "tinker.js",
  "scripts": {
    "devStart": "nodemon tinker.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```

The following decleration/setup initiates the main file as tinker.js. I'm pretty sure that it the default process would give the file the name ```index.js```. These changes also applied to the index.html and style.css which were renamed to tinker.html and tinker.css.

```js
const express = require("express")
const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    res.send("Hello World")
})
```

This is the most basic starter code in tinker.js to make the express js web api begin listening to requests made by the server. From there any changes made could be tested by going to that port in your local browser where the request in your code is being made to.




# Fitness Tracker
<hr>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Website that keeps track of workouts in the past, present, and future. User can add more workouts for the present day or for a later date. Amassed results can be viewed as well.

![Image of Webstite](public/assets/images/web.png)

### Table of Contents

*[Usage](#usage)

*[Process](#process)

*[License](#license)

*[Contributing](#contributing)

*[Questions](#questions)


## Usage
 
To use the application, simply click on the deployed link. 
[https://murmuring-oasis-96238.herokuapp.com/](https://murmuring-oasis-96238.herokuapp.com/)

## Process

### Schema

First create a database and a table template that includes characteristics that may be necessary.
*The below code shows how this can be done*

```bash
CREATE DATABASE databasename;
USE databasename;

CREATE TABLE tablename
(
    Key: Value
    ...
);
```
A seed is not necessary but may be nice to include for testing purposes.

### Routes

Two main files were created within the routes directory. The api.js file was made to find and save workouts from the user. The html.js file was made to render the correct HTML files.

1. API Routing

While creating the API routing, two components must be initialized: model and express.Router().
Depending on what each function is intended to do, router will call either a put, post, or get request.
*The code below shows how one can be implemented*

```js
router.get("/api/routename", (req, res) => {
	modelname.find({})
	.then(varName => {res.json(varName); })
});
```

2. HTML Routing

The HTML routing will require two components as well: path, and express.Router().
By implementing router.get("/urlpathname",(req,res)) the application will be able to start building pathways from the URL link to the corresponding HTML file. This can be defined using res.sendFile().
*The code below shows how this can be done for the homepage*

```js
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
```


## License

This Project is licensed under the MIT License

## Built With:
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JS)
* [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
* [SQL](https://developer.mozilla.org/en-US/docs/Glossary/SQL)


## Author(s):
**Brian Lee**
* [GitHub](https://github.com/brianjunhyuplee)
* [LinkedIn](https://www.linkedin.com/in/brian-lee-559208187/)


## Questions

If you have any questions about the repo, open an issue or contact me directly at [brianjunhyuplee@gmail.com](brianjunhyup@gmail.com). You can find more of my work at [brianjunhyuplee](https://github.com/brianjunhyuplee). <img src = "https://avatars3.githubusercontent.com/u/70872311?v=4" width = 20 alt = "github profile picture">
    

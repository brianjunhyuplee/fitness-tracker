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
    

## Code & Usage

### Models

The four main models used for this application were dog.js, dogReview.js, user.js, and userReview.js. By utilizing sequelize, each row of each table was auto incremented with a unique id.

After building the templating for each models, associations were drawn between each of the models.


![model associations](./public/assets/images/readme_imgs/models.png) 

*the code below shows how associations can be drawn*

```bash
  tablename.associate = function (models) {
    tablename.belongsTo(models.tablename2);
    
    tablename.hasMany(models.tablename3, {
      onDelete: "cascade"
    });

  };
```

The .belongsTo() function will used to state that there can be a multitude of rows from one table that apply to one row of the inputted table. The .hasMany() function would draw the opposite association. The table name preceding the function will umbrella over the inputted table meaning a multitude of rows from the inputted table can apply to one row of the preceding table.

The line stating 'onDelete: "cascade"' allows the prgram to delete all instances that apply to the one row being deleted.

#### Password Encryption

*This application utilizes a password encryption so that a user's actual password is not stored within the database. This is done for the user's security and privacy. This was implemented in the user model*

In this specific design, bcrypt was used to create an encoded password. Bycrpt uses two main processes to perform this; salt, and a hashing algorithm.

The salt process adds a random string of characters to the user's inputted password. The full concacted string would then be pushed to a hashing algorithm. The hashing algorithm converts the string into a randomized string of numbers, characters, and special characters. That finalized string will be stored in the database to be decrypted later during password verification.

*the below code shows the implementation of bycrpt in this application*

```bash
  User.prototype.validPassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
```

### Editing User Profiles

One set of routes was dedicated to editing a user's profile. The process began with the edit button on the logged in user's profile page which redirects you to the edit profile page. The edit profile page is prepopulated with the user's database information and when the user submits the edit profile form a put request is sent to an api route which updates our database. 

![edit-profile-pic](./public/assets/images/readme_imgs/edit_profile.png)

![edit-profile](./public/assets/gifs/edit_profile.gif)

### Determining User

For this application, it is essential to be able to determine who the logged in user is. Depending on who is logged in, access to certain features may be limited. For example, A user viewing another user's profile should not be able to edit that user's information. On the flip side, a user should not be able to post a review for their own profile.

The approach for this was to grab the params from the url and find the user id. If that id matched the logged in user id, we set a predefined boolean to true. If the two id's did not match, set the boolean to false. Based on the boolean given, the HTML will render with certain elements set as hidden corresponding to what needs to be displayed.

*This implementation was used for the user profile, dog profile, review pages, and navbar options*

### Posting Reviews

Posting reviews was a little more difficult since we had to add values for who was posting the review and who was receiving the review. When a user posts a new review, a review instance is created and you get redirected back to the user profile you were on. The user profile route queries for all reviews related to this profile so your posted review will show up

![post-review-pic](./public/assets/images/readme_imgs/post_review.png)

![post-review](./public/assets/gifs/dog_review.gif)

### Search

We decided to have dropdown options dynamically populate the search parameters. This was done by querying attributes from registered users when the search page is requested.If the user didn't want to specify a search parameter then the search post route would find all dogs in the database. 

![search-post-request-pic](./public/assets/images/readme_imgs/search_post_request.png)

![search](./public/assets/gifs/search.gif)


## Technologies:

```
- HTML5                    - Nodes.js            
- CSS3                     - Sequelize
- Bootstap 4               - Passport
- Responsive Design(RWD)   - Express
- Javascript               - Connect-Flash
- Jquery                   - Dot-Env
- Mysql                    - Heroku
- Bcrypt                   - Handlebars.js
- JawsDB
```

## License
Licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Contributing
If you'd like to contribute, make a clone of the repository on your local machine and make a pull request with any changes you made.

## Questions
* [kvn.luo@gmail.com](kvn.luo@gmail.com)
* [bryanbarello@gmail.com](bryanbarello@gmail.com)
* [brianjunhyuplee@gmail.com](brianjunhyuplee@gmail.com)

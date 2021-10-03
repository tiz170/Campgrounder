# YelpCamp
Monolithic model-view-controller full-stack web application built with Node.js, Express.js, MonogDB, EJS, and Bootstrap.
Server hosted on Heroku, Database hosted on MongoDB Atlas, served over Microsoft Azure with Google Domains as DNS provider.

## 🎥 Live Demo

To see the app in action, go to:
1. [Azure hosted](http://20.46.242.255:3000/) 
2. [Herokuapp](https://thawing-cove-05644.herokuapp.com)

## 🛠 Technologies
|Graphic Design|Front-End	|Back-End	|Database	|Deployment		|Testing 	|
|------------- | ------- 	| ------ 	| ------ 	| --------		| -------	|
|Figma	   |HTML5	 	|Node.js 	|Mongoose	|Heroku	  		|Jest    	|
|Lucidchart			   |CSS3	 	|ExpressJS	|MongoDB	|MongoDB Atlas	|Lighthouse	|
|.			   |Bootstrap 5	|EJS	  	|.		    |Microsoft Azure	|.       	|
|.			   |Javascript	|.		  	|.		    |Git	      	|.       	|

## ⚖️ Methodology
-	Used a [Model-View-Controller (MVC)](https://martinfowler.com/eaaDev/uiArchs.html#ModelViewController) [Monolithic Architecture](https://www.youtube.com/watch?v=qYhRvH9tJKw) since it's the most simple architecture to gain an introduction to full-stack web development. Building a MVC Monolith allows one to gain a perspective on the range of achitectures, particularly the lower-end of the range. The Monolith Architecture falls short in scalability and separation of front-end and back-end. The MVC Architecture falls short when the application begins to grow in complexity with the addition of services that could stand on thier own. The MVC Architecture is [perhaps best used for simple proof-of-concept projects](https://www.youtube.com/watch?v=rckfN7xFig0), like this one.
-	Developed and maintain the app in [GoormIDE](https://ide.goorm.io/) to gain exposure to a cloud-based IDE.
-	[Bootstrap 5](https://getbootstrap.com/) as the CSS framework to keep the UI simple and quick to build. Since the website takes a performance hit for loading Bootstrap, took full advantage of advanced Bootstrap features such as [custom validation](https://getbootstrap.com/docs/5.0/forms/validation/) for all forms and [animated form input](https://getbootstrap.com/docs/4.0/examples/floating-labels/) for the login and register pages.
-	[Express.js](https://expressjs.com/) as the Node.js application framework since it's a lightweight framework, which is ideal for gaining an understanding of how to build the backend from scratch. Compared to a framework like [Nest.js](https://nestjs.com/) or even [Django](https://www.djangoproject.com/), Express.js doesn't have many features out of the box.
-	[PassportJs](https://github.com/jaredhanson/passport) for the authentication and authorization.
-	NoSQL database for the flexibility compared to a SQL database, [MongoDB](https://www.mongodb.com/) in particular because of its prevalence in the industry.
-	[Embedded Javascript Templates (EJS)](https://ejs.co/) as the front-end templating language for more DRY code compared to plain HTML and for dynamic user-experiences. This is a simple templating language, similar to [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) for Python. Both however fall short on front-end scalability, modularity, and performance compared to a framework like [React](https://reactjs.org/). Working with simple templating languges helps to remind me the benefits of working with a framework like React.
-	[Heroku](https://www.heroku.com/) as the cloud hosting provider to gain experience with PaaS. Since I'm using the free tier, which normally causes the application to sleep after 30 minutes of inactivity, the application is kept awake from 6:00 a.m. to 11:59 p.m. PST with [Kaffeine](https://kaffeine.herokuapp.com/).
-	[Microsoft Azure](https://azure.microsoft.com/) as the virual server host for deplpoyment in production.
-	[Figma](https://www.figma.com/) to study Human Interaction Design and design mock interfaces for app.

## ⚙️ Features

* Authentication:
  
  * User login with username and password

  * Admin sign-up with admin code

* Authorization:

  * One cannot manage posts and view user profile without being authenticated

  * One cannot edit or delete posts and comments created by other users

  * Admin can manage all posts and comments

* Manage campground posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload campground photos

  * Display campground location on Google Maps
  
  * Search existing campgrounds

* Manage user account with basic functionalities:

  * ~~Password reset via email confirmation~~ (disabled)

  * Profile page setup with sign-up

* Flash messages responding to users' interaction with the app

* Responsive web design


## 🚀 Getting Started
### Clone or download this repository

```sh
git clone https://github.com/tiz170/YelpCamp.git
```

### Install dependencies

```sh
npm install
```

or

```sh
yarn install
```

### Start server 
```
node app.js
```

### Comments in code

Some comments in the source code are course notes and therefore might not seem necessary from a developer's point of view.

## 🔨 Built with

### Front-end

* [ejs](http://ejs.co/)
* [Google Maps APIs](https://developers.google.com/maps/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [async](http://caolan.github.io/async/)
* [crypto](https://nodejs.org/api/crypto.html#crypto_crypto)
* [helmet](https://helmetjs.github.io/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [nodemailer](https://nodemailer.com/about/)
* [moment](https://momentjs.com/)
* [cloudinary](https://cloudinary.com/)
* [geocoder](https://github.com/wyattdanger/geocoder#geocoder)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms
* [Microsoft Azure](https://azure.microsoft.com/)
* [Heroku](https://www.heroku.com/)

## 🔒 License

#### [MIT](./LICENSE)

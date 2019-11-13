# Create React Express App

# Ch@

## Description
Ch@ is a chat app created to connect users that want to converse about topics, subjects, and events of similar interest. "Be a big fish in a small". The app gives the user the ability to create his/her personal space where other users can join in


## Functionality Overview
On loading of the app, the user is directed a login page, where they can sign in with their credentials if they are a registered user. If not a registered user, a link is provided to direct user where they can register by providing an email, username and password 

![]()


## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

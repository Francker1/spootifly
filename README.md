# Spootifly React App

## Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install app dependencies

In project root folder, run following command to install all dependencies of project

`
npm i
`

or 

`
npm install
`

The project run in port 3000 of localhost server

<br>

## Start app

To start the app and begin the CRUD of phones, run following command:

`
npm start
`

<br>

## Run lintern

In this project are configured eslint with prettier, using airbnb rules and anothers custom rules, to set lint and show analyze files, you should run this command:

`
npm run lint
`

If you want fix problems that can be resolved automatically, you must run this command:

`
npm run lint:fix
`

<br>

## Run test suite

In this project there are a suites of tests configured in **test** folder. Testing in components, helpers functions and custom hooks. To run tests you must run this command:

`
npm run test
`


<br>

# Use App

With this application you will be able to see the most popular artists of this year or the latest releases, plus you will be able to search between artists, albums and songs (even listen to a preview!).

This application is connected to the **Spotify API**, this means that you must be logged into Spotify to use it, to do this you must go to the home and click on the button "Iniciar sesión Spotify" and you will be redirected to Spotify authentication, once your credentials are included, you will be redirected to "/app" to see a first list of the most listened albums and artists, you can also see your username used from the API information and "logout button". 

In the search section, you will be able to search by artist, album or songs, and you will be shown three lists, one for each result and a list of 20 songs that you can listen to.

To works, you must change url spotify, creating a new project in your account dashboard on Spotify for devs.

# MEAN 4 Working Skeleton

## Description

This is a Full-Stack application using MEAN. MEAN stands for **M**ongoDB, **E**xpress, **A**ngular, and **N**ode.js. This application currently uses Angular 5.

This project will get updated when changes to the dependencies or frameworks is caught.

## What is the MVC Pattern?

[Here](https://www.tomdalling.com/blog/software-design/model-view-controller-explained/) is a great description of what the MVC pattern is.

In a nutshell, there is the **M**odel, the **V**iew and the **C**ontroller. The model holds the data and is independant of all other components in the system. The view displays the data and recieve user input to pass along to the controller. The controller sends the data to the view and deals with the user's input.

Normally, the View is on the client-side, or the user's local machine and the Controller is based on the server-side, or the server's machine. The Model is just passed between the two.

## Installation Guide

### Program Install

1. Download [Node.js](https://nodejs.org/).
1. Download [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community).

### Dependency Install

Start MongoDB from the command line using

```Batchfile
"C:\Program Files\MongoDB\Server\3.4\bin\mongod"
```

Then install the Angular-CLI using

```Batchfile
npm install -g @angular/cli
```

Navigate to the cloned repository in the command line.

Run the following command to install all of the project's dependencies.

```Batchfile
npm install
```

### Development Instructions

This application is separated into two parts, the Server and Client sides. Both the Server and Client-side code are in 
the app's main directory. 

#### The Server

App.js holds all of the Node.js code for the server to run.

The models directory holds the different models for your database data. The files also contains the logic needed for each model. Each Model and it's logic should be separate files.

Controllers holds the different controllers for your API endpoints. The controller holds the logic of how to deal with the user's input. You can have multiple controllers and separate files for the logic.

#### The Client

All of the Client-side development is found in the src directory. This directory contains all of the .ts, .css, and .html files along with any assets like your favicons.

The e2e directory is the space for all testing code. I haven't written any tests for this project, but it's a good practice to include tests for your site.

```src``` contains your view code. ```app``` holds the Angular components for your project. There are two parts of Angular development, services and components, that we will be dealing with. A tutorial on Angular 5 will help with programming these sections.

### Directory Descriptions

* e2e - Angular automated UI testing

* src - Angular code to edit

  * app - Folder for all the css, html, and typescript

  * assets - Directory for all Angular assets

  * environments - Tells Angular if you're in dev or prod

* config - Configuration files for the project

* controllers - External API endpoints

* models - Database models

* public - Angular's build output folder

### Sources

Thanks to SitePoint for developing such a great tutorial on the MEAN Stack. I used this tutorial for the basis of setting up my project.

* [MEAN Stack: Developing an app with Angular 2+ and the Angular CLI](https://www.sitepoint.com/mean-stack-angular-2-angular-cli/)

### Copyright

Copyright 2017, Jonathan Comeau, All rights reserved.

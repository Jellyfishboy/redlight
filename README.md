[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

#Redlight

Redlight is a responsive e-commerce template built using Yeoman, Grunt, Bower, HTML5, CSS3, JavaScript and Handlebar templating. It was purpose built to be used for [Trado](https://github.com/Jellyfishboy/trado), a lightweight, easy to use e-commerce platform designed for sole traders and SME businesses. However, Redlight has been released as an open source template for other developers to utilise in their applications.

[Official site](http://redlight.tomdallimore.com/?utm_source=github&utm_medium=website&utm_campaign=redlight)

[Demo site](http://redlightdemo.tomdallimore.com/?utm_source=github&utm_medium=website&utm_campaign=redlight-demo)

[Release notes](http://release.tomdallimore.com/projects/redlight)

This template is also used with [Trado](http://www.trado.io/?utm_source=redlight-github&utm_medium=website&utm_campaign=trado), a new, lightweight, 
open source e-commerce platform.

##Getting started

For development purposes, this repository requires the use of [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) in order to run the application.

Grunt is a JavaScript based task runner, for tasks such as unit testing, compilation, uglifying, livereload, serving web pages and many many more. If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

Bower is a package manager tool (much like [NuGet](http://www.nuget.org/) or [Bundler](http://bundler.io/)) which can manage your third party asset library for you. You can find information on using and installing Bower over at their [github](https://github.com/bower/bower) page.

Furthermore, you will need **npm** for both of these tools to function. You can find a quick and easy installation guide over at the [npm github](https://github.com/npm/npm).

##Resolving dependencies

First off, you will need to install the Grunt package dependencies listed in `package.json`:

    npm install

Then you will need to install the Bower asset dependencies, listed in `bower.json`:

    bower install

##Build process

Now we have all our required dependencies, we can start to use the Grunt task runner. To start viewing the application on the Grunt web server, run the following command:

    grunt server

If you would like to create a distribution package of the application, ready for use in your application, run the following command:

    grunt build

This will run through compiling, uglifying, copying the HTML, JavaScript, CSS and Bower dependencies into a folder called `dist` in the root of the application.

##Screenshots

###Desktop
![Search](https://s3-eu-west-1.amazonaws.com/tomdallimore/redlight-promo/screenshots/redlight-desktop-1.jpg "Search")  
![Cart](https://s3-eu-west-1.amazonaws.com/tomdallimore/redlight-promo/screenshots/redlight-desktop-2.jpg "Cart")  
![Product](https://s3-eu-west-1.amazonaws.com/tomdallimore/redlight-promo/screenshots/redlight-desktop-3.jpg "Product")  

###Mobile
![Category](https://s3-eu-west-1.amazonaws.com/tomdallimore/redlight-promo/screenshots/redlight-mobile-1.jpg "Category")
![Cart](https://s3-eu-west-1.amazonaws.com/tomdallimore/redlight-promo/screenshots/redlight-mobile-2.jpg "Cart")
![Product](https://s3-eu-west-1.amazonaws.com/tomdallimore/redlight-promo/screenshots/redlight-mobile-3.jpg "Product")

##How to contribute

* Fork the project
* Create your feature or bug fix
* Commit (do not change version or history)
* Send a pull request against the *master* branch

##Credits
[Icomoon](http://icomoon.io/) - Iconography     

##Copyright
Copyright (c) 2014 [Tom Dallimore](http://tomdallimore.com/?utm_source=redlight-github&utm_medium=website&utm_campaign=tomdallimore) ([@tom_dallimore](http://twitter.com/tom_dallimore))  
Licenced under the MIT licence.




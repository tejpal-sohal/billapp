## Bill Application 

## Example

[Application link](http://skybill.s3-website-eu-west-1.amazonaws.com/)

## Installation
Download the file and run the following inside the directory

```
npm install
npm start
```

## Production build run 

```
gulp prod
```

## About the Application

I used Angular to build the application. The customer bill itself sits behind a login page which I think would mirror a live bill as you would not want anyone to view. 

I went with the angular file structure where all controllers and directives are broken down into components and easy to maintain. The application uses angular routing and runs like a Single Page Application. I used modular scss to break down the stylesheets. For a Production ready build I built a pipe-line using gulp which will minify and compress all dev code and create a directory which can be deployed to a server.


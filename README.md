# LAB - 01 server-deployment-practice

## Author: Mike Pace, Sara Russert

tests report (actions)<https://github.com/catdude2000/server-deployment-practice/actions>
front-end (render deploy)<https://server-deployment-practice-prod-oxae.onrender.com/>

## Setup

### .env requirements

PORT - 3000

### Running the app

npm start

Endpoint: //hello, /goodbye
Returns Object
{"error":404,"route":"/","message":"no data on this route"}

Endpoint: /hello
Returns Object
hello! Sat Jul 01 2023 23:38:05 GMT+0000 (Coordinated Universal Time)

Endpoint: /goodbye
Returns Object
goodbye

Tests
npm test

UML
(Created with Figma)
![UML](assets/UMLLab1.png)

401N lab 1 server repo

Node
Javascript runtime

tool to make applications more dynamic faster
you can make servers!
async i/o
javascript sans browser
Professional development patterns and habits

modular code!
reusable blocks of code for plug and play
modules are important for code readability, reuse, scalability
we will also be adding in testing to our projects in a more formal way
What is a server

a host: somewhere information could be stored

a middleman!

Your laptop is also a server (physically) just like those

Software can also be a server

Functions are also servers

Anything that can accept a request and serve back an answer is a server

In an app, you have clients and servers at every logical point in code

So ... no, Node.js is not a server, it's a tool you can use to make a server

<https://www.npmjs.com/package/supertest>

<https://jestjs.io/docs/expect>





<https://github.com/catdude2000/server-deployment-practice/pull/1>

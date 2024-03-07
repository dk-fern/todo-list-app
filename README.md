# To-Do List Web Application
### Work In Progress ###
In this project you will gain a greater understanding of API by practicing using api keys and endpoints within a fully functioning and visually appealing to-do list application.

**This will grow your skills in:**
- Using CRUD operations
- Understanding and applying API endpoints and authentication using keys
- Docker containers 
- Docker compose

Are you ready? [Let's get into it]([0_Intro.md](https://github.com/dk-fern/todo-list-app/blob/main/Project%20Guide/0_Intro.md)).


____________________________________________________________________

## Resources 

**CRUD operations:**
  
Web application that allows users to perform [CRUD operations](https://www.codecademy.com/article/what-is-crud) in a to-do list format.

**Full Stack App Tutorial:**
This project is based on this guide ["Python + JavaScript - Full Stack App Tutorial":](https://www.youtube.com/watch?v=PppslXOR7TA&t=287s)

**Changed theme**: The original guide is a web application to create and edit a contact list, mine is a to-do list. This required adjusting certain parameters to the database (e.g. I had to allow fields to be empty by changing the datatypes).

**Better UI**: I added additional CSS to make the web app look nicer.

**Security**: I added the use of API keys for a layer of security. This isn't necessary because this application isn't going anywhere, but it is designed to prove a [point of security](https://www.fortinet.com/resources/cyberglossary/api-key)

**Docker Containers / Docker Compose**
I turned each component in the frontend and backend into docker containers, and then used Docker Compose to launch and speak to each other. This will demonstrate my understanding and implimentation of Docker Compose. I will have persistant data by using [volumes](https://docs.docker.com/storage/volumes/) so that if I stop the containers, the data that was put into them will remain.
  - [Docker containers](https://www.docker.com/resources/what-container/)
  - [Docker compose](https://docs.docker.com/compose/)

**React**
The frontend was created using React-- a javascript library used to create web applications.
- [React info](https://www.w3schools.com/whatis/whatis_react.asp)
- [React website](https://react.dev/)

**Flask** 
The backend was created using Flask, a web application framework for Python.
- [Flask info](https://pythonbasics.org/what-is-flask-python/)

**sqlite**
The backend in our web application uses a [sqlite database](https://www.sqlite.org/).


# To-Do List Web Application
### Work In Progress ###
Whether you're looking to test your web development and security engineering skills or desiring a project you can add to your resume, this is the project for you. In this project you will build fully functioning and visually appealing to-do list application with built-in security. 

**This will grow your skills in:**
- full-stack development with Python and JavaScript *"using Flask and React"*
- CRUD operations
- using API keys
- understanding API endpoints
- backend Flask *I would remove this for redundancy*
- frontend React *Remove for redundancy*
- docker containers 
- *docker compose*

> [!NOTE]
> Overall I would say that the project part of this isn't learning full stack development, but it's using the full stack app that uses CRUD operations that I've created to demonstrate: 
> API endpoints and authentication using keys
> Docker containers
> Docker compose
>
> The idea will be that: 
> The api endpoints and security measures are highlighted in the project as a learning opportunity to how these things work
> Someone can use a "test.py" file that I will create in the future as an easier way to see these things.
> Someone can get hands on through creating their own docker images and docker compose file (this would be a how-to guide), then run them 

Are you ready? [Let's get into it](projectguide.py).


____________________________________________________________________

## Resources 

**CRUD operations:**
  
Web application that allows users to perform CRUD operations in a to-do list format
  - [https://www.codecademy.com/article/what-is-crud](https://www.codecademy.com/article/what-is-crud)

**Full Stack App Tutorial:**

This project is based on this guide "Python + JavaScript - Full Stack App Tutorial": https://www.youtube.com/watch?v=PppslXOR7TA&t=287s

*What I added/am going to add to it:*
- **Changed theme**: The original guide is a web application to create and edit a contact list, mine is a to-do list. This required adjusting certain parameters to the database (e.g. I had to allow fields to be empty, changed the datatypes of things)
- **Better UI**: I added additional CSS to make the web app look nicer
- **Security**: --*to-do*-- I will be adding the use of API keys for a layer of security. This isn't necessary because this application isn't going anywhere, but it is designed to prove a point of security [https://www.fortinet.com/resources/cyberglossary/api-key](https://www.fortinet.com/resources/cyberglossary/api-key)

**Docker Containers / Docker Compose**
I want to turn each component (front/backend) into docker containers then use Docker compose to spin them both up for them to speak to each other. This will demonstrate my use/learning of dockercompose. I will also want to have persistant data by using [**volumes**](https://docs.docker.com/storage/volumes/) so that if I stop the containers, the data that was put into them will remain.
  - [Docker containers](https://www.docker.com/resources/what-container/)
  - [Docker compose](https://docs.docker.com/compose/)

### Frontend: 
**React**
The frontend was created using React-- a javascript library used to create web applications
- [React info](https://www.w3schools.com/whatis/whatis_react.asp)
- [React website](https://react.dev/)

 
>Note for writer: The frontend's job is to talk to be the thing the user interacts with in their web browser. When a user clicks a button in the frontend interface, it makes an [api call](https://www.cloudflare.com/learning/security/api/what-is-api-call/#:~:text=Application%20programming%20interfaces%20(APIs)%20are,provide%20a%20service%20or%20information.) to the backend.

### Backend:
**Flask** 
The backend was created using Flask, a web application framework for Python.
- [Flask info](https://pythonbasics.org/what-is-flask-python/)

**sqlite**
The backend in our web application uses a [sqlite database](https://www.sqlite.org/)

>Note for writer: The backend's job is to take the api calls from the frontend and manage the data. It also is responsible for handling the requests and either returning the info requested by the frontend, or returning some sort of error. The backend is also responsible for security and authentication/authorization. Another role is to provide access for integration (this will be seen in the simple python script that will soon be added where, as long as a user has an API key, they have access to the database).



>#### What I want to add:
>I want to turn each component (front/backend) into docker containers then use Docker compose to spin them both up for them to speak to each other. This will demonstrate my >use/learning of dockercompose. I will also want to have persistant data by using [**volumes**](https://docs.docker.com/storage/volumes/) so that if I stop the containers, the >data that was put into them will remain.
>  - [Docker containers](https://www.docker.com/resources/what-container/)
>  - [Docker compose](https://docs.docker.com/compose/)
 
>I also want to create a *["project guide"](projectguide.py)* to explain how API endpoints work. This will involve writing a simple python script that can reach out to the Flask >backend. The guide will also show how to use Docker Compose.

>I want the project folder to live in the root directory (the same one as frontend/backend directories)


import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

# Get the current working directory
current_directory = os.getcwd()

# Construct the absolute path to the database file
database_path = os.path.join(current_directory, "database.db")

# Set the database URI in the app configuration
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{database_path}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


# SQLAlchemy library is used as an ORM to map objects to the SQL database

# Ititialize the SQLAlchemy class in the object: "db"
db = SQLAlchemy(app)

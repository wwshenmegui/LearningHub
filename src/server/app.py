from flask import Flask, request, session
from src.server.controllers.User import User

app = Flask(__name__)


@app.route('/login',methods=['POST'])
def login():
    email=request.form['email']
    password=request.form['password']
    if User.login_valid(email,password):
        User.login(email)
    else:
        session['email']=None
    user=User.get_by_email(email)
    return {"userId":user._id}


@app.route('/register',methods=['POST'])
def register():
    email=request.form['email']
    username=request.form['username']
    password=request.form['password']
    User.register(email,username,password)
    user=User.get_by_email(email)
    return {"userId":user._id}


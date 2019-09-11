from src.server.database import Database
import uuid
from flask import session
from src.server.controllers.ShowCase import ShowCase


class User(object):
    def __init__(self, email, username, password, _id,country,interest):
        self.email = email
        self.username = username
        self.password = password
        self.country="" if country is None else country
        self.interest=[] if interest is None else interest
        self._id = uuid.uuid4().hex if _id is None else _id

    @classmethod
    def get_by_email(cls, email):
        data = Database.find_one("users",{"email": email})
        if data is not None:
            return cls(**data)

    @classmethod
    def get_by_id(cls, _id):
        data = Database.find_one("users",{"_id": _id})
        if data is not None:
            return cls(**data)

    @staticmethod
    def login_valid(email, password):
        user = User.get_by_email(email)
        if user is not None:
            return user.password==password
        return False

    @staticmethod
    def login(email):
        session['email'] = email

    @staticmethod
    def logout():
        session['email'] = None

    @classmethod
    def register(cls,email,username,password):
        user=User.get_by_email(email)
        if user is not None:
            new_user=cls(email,username,password)
            new_user.save_mongo()
            session['email']=email
            return True
        else:
            return False

    @staticmethod
    def edit_user(_id,username,country,interest):
        user=User.get_by_id(_id)
        if user is not None:
            new_values={"$set":{"username":username,"country":country,"interest":interest}}
            Database.DATABASE.update_one(collection="users",query={"user_id":_id},new_values=new_values)
            return True
        else:
            return False

    def create_showcase(self,title,url,description,categories):
        showcase = ShowCase(
            title=title,
            user_id=self._id,
            url=url,
            description=description,
            categories=categories
        )
        showcase.save_to_mongo()

    def get_showcase_by_user(self):
        return ShowCase.get_by_userId(self._id)

    def create_learnpath(self):
        pass

    def get_learnpath_by_user(self):
        pass

    def get_learnpath_by_id(self):
        pass

    def delete_learnpath(self):
        pass

    def update_learnpath(self):
        pass

    def json(self):
        return {
            'email':self.email,
            'username':self.username,
            'password':self.password,
            '_id':self._id
        }

    def save_to_mongo(self):
        Database.insert("users", self.json())



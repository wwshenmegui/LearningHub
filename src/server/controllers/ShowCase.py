import uuid
from src.server.database import Database


class ShowCase(object):
    def __init__(self,user_id,title,url,description,categories,_id=None):
        self.user_id=user_id
        self.title=title
        self.url=url
        self.description=description
        self.categories=categories
        self._id = uuid.uuid4().hex if _id is None else _id


    @classmethod
    def get_by_userId(cls,userId):
        showcases=Database.DATABASE.find(collection="showcases",query={"userId":userId})
        return [cls(**showcase) for showcase in showcases]

    @classmethod
    def get_by_id(cls,_id):
        showcase=Database.DATABASE.find_one("showcases",{"_id":_id})
        return cls(**showcase)

    @staticmethod
    def delete_showcase(_id):
        showcase=ShowCase.get_by_userId(_id)
        if showcase is not None:
            Database.DATABASE.delete_one(collection="showcases",query={"_id":_id})
            return True
        else:
            return False

    @staticmethod
    def edit_showcase(_id,title,url,description,categories):
        showcase = ShowCase.get_by_userId(_id)
        if showcase is not None:
            new_values={"$set":{"title":title,"url":url,"description":description,"categories":categories}}
            Database.DATABASE.update_one(collection="showcases",query={"_id":_id},new_values=new_values)
            return True
        else:
            return False

    def json(self):
        return {
            'user_id':self.user_id,
            'title':self.title,
            'url':self.url,
            'description':self.description,
            'categories':self.categories,
            '_id':self._id
        }

    def save_to_mongo(self):
        Database.insert("showcases", self.json())
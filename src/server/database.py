import pymongo


class Database(object):
    URI = "mongodb://127.0.0.1:27017"
    DATABASE=None

    @staticmethod
    def initialize():
        client = pymongo.MongoClient(Database.URI)
        Database.DATABASE = client['learninghub']

    @staticmethod
    def insert(collection,data):
        Database.DATABASE[collection].insert(data)

    @staticmethod
    def find(collection,query):
        return Database.DATABASE[collection].find(query)

    @staticmethod
    def find_one(collection,query):
        return Database.DATABASE[collection].find_one(query)

    @staticmethod
    def delete_one(collection,query):
        return Database.DATABASE[collection].delete_one(query)

    @staticmethod
    def update_one(collection,query,new_values):
        return Database.DATABASE[collection].update_one(query,new_values)
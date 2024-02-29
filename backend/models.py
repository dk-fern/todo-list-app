from config import db

# Create an item class object that inherits properties of the db object
class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(80), unique=False, nullable=False)
    due_date = db.Column(db.String(80), unique=False, nullable=True)
    description = db.Column(db.String(120), unique=False, nullable=False, default=None)

    def to_json(self):
        return {
            "id": self.id,
            "itemName": self.item_name,
            "dueDate": self.due_date,
            "description": self.description,
        }

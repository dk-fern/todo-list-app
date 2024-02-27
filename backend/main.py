from flask import request, jsonify
from config import app, db
from models import Item
from functools import wraps

############################################################################
# Each route will define API endpoints that the frontend can query.
# Endpoints needed follow the "CRUD" methodology:
# Create: Create a new contact and write to the database
# Read: Read contacts from the database
# Update: Update one or more properties of a contact
# Destroy: Delete a user from the database
############################################################################
# Contacts and the database:
# The Contact class in models.py uses properties of the sqlalchemy library.
# Because of this, each function below uses functions from sqlalchemy 
# like "query", "get", "add", "commit", etc.
############################################################################


API_KEY = "12345"

# Decorator function to authenticate API key
def require_api_key(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get("Authorization")

        if auth_header and auth_header.startswith("Bearer "):
            # Extract the API key from the Authorization header
            api_key = auth_header.split("Bearer ")[1]

            if api_key == API_KEY:
                return func(*args, **kwargs)
        
        # If API key is missing or incorrect, return 401 Unauthorized
        return jsonify({"error": "Unauthorized"}), 401
    
    return decorated_function

# Read contacts from the database. Returns the contact in json data
@app.route("/items", methods=["GET"])
@require_api_key
def get_items():
    items = Item.query.all()
    json_items = list(map(lambda x: x.to_json(), items))
    return jsonify({"items": json_items})

# Create a new contact in the database. Turns each property into json data which is eventually turned into a full contact in the new_contact variable
@app.route("/create_item", methods=["POST"])
@require_api_key
def create_item():
    item_name = request.json.get("itemName")

    if not item_name:
        return jsonify({"message": "You must include an item name!"}), 400

    # Optional fields
    due_date = request.json.get("dueDate", None)
    description = request.json.get("description", None)

    new_item = Item(item_name=item_name, due_date=due_date, description=description)
    try:
        db.session.add(new_item)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Item created!"}), 201

# Update one or more properties of a contact. If any property is unchanged, the already stored data will remain and only new data will be changed.
# <int:user_id> takes the user_id as it's own route
@app.route("/update_item/<int:item_id>", methods=["PATCH"])
@require_api_key
def update_item(item_id):
    item = Item.query.get(item_id)

    if not item:
        return jsonify({"message": "Item not found"}), 404
    
    # Define what should be updated. If any of these is updated, it will update. If any of these fields isnt updated, it will remain the same
    data = request.json
    item.item_name = data.get("itemName", item.item_name)
    item.due_date = data.get("dueDate", item.due_date)
    item.description = data.get("description", item.description)

    db.session.commit()

    return jsonify({"Message": "Item updated"}), 201

# Deletes a contact from the database
# <int:user_id> takes the user_id as it's own route
@app.route("/delete_item/<int:item_id>", methods=["DELETE"])
@require_api_key
def delete_item(item_id):
    item = Item.query.get(item_id)

    if not item:
        return jsonify({"message": "Item not found"}), 404

    db.session.delete(item)
    db.session.commit()

    return jsonify({"Message": "Item deleted!"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
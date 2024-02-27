import {useState} from "react"

const apiKey = "12345"

const ItemForm = ({ existingItem = {}, updateCallback}) => {
    const [itemName, setItemName] = useState(existingItem.itemName || "")
    const [dueDate, setDueDate] = useState(existingItem.dueDate || "")
    const [description, setDescription] = useState(existingItem.description || "")

    const updating = Object.entries(existingItem).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            itemName,
            dueDate,
            description
        }
        const url = "http://127.0.0.1:5000/" + (updating ? `update_item/${existingItem.id}` : "create_item")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="itemName">Item Name:</label>
                <input 
                    type="text" 
                    id="itemName" 
                    value={itemName} 
                    onChange={(e) => setItemName(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="dueDate">Due Date:</label>
                <input 
                    type="text" 
                    id="dueDate" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea 
                    type="text" 
                    id="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="large-textarea"
                    />
            </div>
            <button className="modal-button" type="submit">{updating? "Update" : "Create"}</button>

        </form>
    );
};

export default ItemForm
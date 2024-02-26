import React from "react";

const ItemList = ({ items, updateItem, updateCallback }) => {
  const onDelete = async (id) => {
    try {
        const options = {
            method: "DELETE",
        }
        const response = await fetch(`http://127.0.0.1:5000/delete_item/${id}`, options)
        if (response.status === 200) {
            updateCallback()
        } else {
            console.error("Failed to delete")
        }
    } catch (error) {
        alert(error)
    }
  }
  
  return (
    <div>
      <h2>To-Do List</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.dueDate}</td>
              {/* Render the description inside a <div> */}
              <td>
                <div className="description">{item.description}</div>
              </td>
              <td>
                <button className="update-button" onClick={() => updateItem(item)}>Update</button>
                <button className="delete-button" onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
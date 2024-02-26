import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./App.css";
import ItemForm from "./ItemForm";
 

function App() {
  //Get all users and put them into our "state"
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState({})

  //As soon as this renders, call the fetchContacts function
  useEffect(() => {
    fetchItems()
  }, []);

  //Function to get contacts from our created endpoint
  const fetchItems = async () => {
    //First wait for response from url
    const response = await fetch("http://127.0.0.1:5000/items");
    //Next load that returned response in json data
    const data = await response.json();
    setItems(data.items);
    //console.log(data.items);
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentItem({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const openEditModal = (item) => {
    if (isModalOpen) return
    setCurrentItem(item)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchItems()
  }

  return (
    <div className="App-container">
      <div className="App">
        <div className="item-container">
          <div className="center-content">
            <ItemList items={items} updateItem={openEditModal} updateCallback={onUpdate}/>
            <button className="create-button" onClick={openCreateModal}>Create New Item</button>
          </div>
        </div>
        { isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>×</span>
          <ItemForm existingItem={currentItem} updateCallback={onUpdate}/>
        </div>
        </div>
        }
      </div>
    </div>
  );

}

export default App

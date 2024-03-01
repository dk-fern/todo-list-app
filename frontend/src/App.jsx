import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./App.css";
import ItemForm from "./ItemForm";


function App() {
  //Get all items and put them into our "state"
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState({})

  //As soon as this renders, call the fetchItems function
  useEffect(() => {
    fetchItems()
  }, []);

  //Function to get items from our backend endpoint
  const fetchItems = async () => {
    //NOTE: apikeys should be imported as environmental variables for greater security. 
    //      Because this is just a demonstration of their use, I hard-coded them
    const apiKey = "12345"
    const url = "http://127.0.0.1:5000/items";
    const options = {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    };
    //First wait for response from url
    const response = await fetch(url, options);
    //Next load that returned response in json data
    const data = await response.json();
    setItems(data.items);
    console.log(data.items);
  }

  //The following 4 functions all set the conditions on if the modal (the popup create-item or edit-item window) is open.
  //By default the modal is closed (false), but if the button is clicked, it will be set to "true" and open the modal window.
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

  //Return the html that is loaded into the browser. See App.css for styling
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

//Export app to be used in main.jsx
export default App

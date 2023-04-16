import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemList from './components/ItemList'
import AddNewItemModal from './Modal/AddNewItemModal'

const App = () => {
  const [items, setItems] = useState([])
  const [newItemModalOpen, setNewItemModal] = useState(false)

  useEffect(() => {
    axios.get(`https://backend-item-management-system.vercel.app/api/items`)
      .then(res => {
        console.log(res.data)
        setItems(res.data)
        // const persons = res.data;
        // this.setState({ persons });
      })
  }, [])
  return (
    <div className='App'>
      <h1>Item Management System</h1>
      <button className='add-new-item-btn' onClick={()=>{setNewItemModal(true)}}>Add New Item</button>
      <ItemList items={items} />
      {newItemModalOpen ? <AddNewItemModal setNewItemModal={setNewItemModal} items={items} /> : null}
    </div>
  )
}

export default App
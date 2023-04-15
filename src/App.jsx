import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemList from './components/ItemList'

const App = () => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:3456/api/items`)
      .then(res => {
        console.log(res.data)
        setItems(res.data)
        // const persons = res.data;
        // this.setState({ persons });
      })
  },[])
  return (
    <div className='App'>
      <h1>Item Management System</h1>
      <ItemList items={items}/>
    </div>
  )
}

export default App
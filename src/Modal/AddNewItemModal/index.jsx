import React from 'react'
import './addNewItemStyles.css'
import '../ShowItemModal/modalStyles.css'
import { RxCrossCircled } from 'react-icons/rx'
import axios from 'axios'


const AddNewItemModal = ({ setNewItemModal, setItems, items }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            id: items.length===0?1:items[items.length-1].id+1,
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value
        }
        await axios.post(`${import.meta.env.VITE_API_URL}/api/items/add`,requestData)
            .then(res => {
                console.log(res.data)
                setItems((oldData) => [...oldData, requestData])
            }).catch(error => {
                alert(error.message)
            })
        setNewItemModal(false)
    }
    return (
        <div className='modal-container'>
            <div className='modal-innerContainer'>
                <form onSubmit={handleSubmit}>
                    <div className='cross-icon'><h2>Add New Item</h2><i onClick={() => { setNewItemModal(false) }}><RxCrossCircled /></i></div>
                    <label className='addNew-each-field'>
                        <h3>Name:</h3>
                        <input type="text" placeholder='Enter Item Name' name="name" id="name" required />
                    </label>
                    <label className='addNew-each-field'>
                        <h3>Description:</h3>
                        <textarea type="text" placeholder='Enter Item Description' name="description" id="description" required />
                    </label>
                    <label className='addNew-each-field'>
                        <h3>Price:</h3>
                        <input type="number" placeholder='Enter Item Price' name="price" id="price" min={0} max={999999999} required />
                    </label>
                    <button className='addNew-submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewItemModal
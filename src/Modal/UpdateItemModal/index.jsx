import React from 'react'
import '../AddNewItemModal/addNewItemStyles.css'
import '../ShowItemModal/modalStyles.css'
import './UpdateItemStyles.css'
import { RxCrossCircled } from 'react-icons/rx'
import axios from 'axios'


const UpdateItemModal = ({ setOpenUpdateModal, clickedItem, items, setItems }) => {
    const handleUpdate = async (e) => {
        e.preventDefault();
        const id = items[clickedItem].id;
        const newItemList = items.filter((element) => {
            return element.id !== id;
        })
        const requestData = {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value
        }
        await axios.put(`${import.meta.env.VITE_API_URL}/api/items/update/${id}`,requestData)
            .then(res => {
                console.log(res.data)
                setItems([...newItemList, requestData])

            }).catch(error => {
                alert(error.message)
            })
        setOpenUpdateModal(false)
    }
    return (
        <div className='modal-container'>
            <div className='modal-innerContainer'>
                <form onSubmit={handleUpdate}>
                    <div className='cross-icon'><h2>Update Item</h2><i onClick={() => { setOpenUpdateModal(false) }}><RxCrossCircled /></i></div>
                    <label className='addNew-each-field'>
                        <h3>Name:</h3>
                        <input type="text" placeholder='Enter Item Name' name="name" id="name" defaultValue={items[clickedItem].name} required />
                    </label>
                    <label className='addNew-each-field'>
                        <h3>Description:</h3>
                        <textarea type="text" placeholder='Enter Item Description' name="description" id="description" defaultValue={items[clickedItem].description} required />
                    </label>
                    <label className='addNew-each-field'>
                        <h3>Price:</h3>
                        <input type="number" placeholder='Enter Item Price' name="price" id="price" min={0} max={999999999} defaultValue={items[clickedItem].price} required />
                    </label>
                    <button className='addNew-submit-btn' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateItemModal
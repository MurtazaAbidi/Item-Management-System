import React from 'react'
import './addNewItemStyles.css'
import '../ShowItemModal/modalStyles.css'
import { RxCrossCircled } from 'react-icons/rx'


const AddNewItemModal = ({ setNewItemModal, items }) => {
    const handleSubmit = (e) => {
        console.log('hello')
    }
    return (
        <div className='modal-container'>
            <div className='modal-innerContainer'>
                <form onSubmit={handleSubmit}>

                    <div className='cross-icon'><h2>Add New Item</h2><i onClick={() => { setNewItemModal(false) }}><RxCrossCircled /></i></div>
                    <label className='addNew-each-field'>
                        <h3>Name:</h3>
                        <input type="text" placeholder='Enter Name' name="name" id="name" required/>
                    </label>
                    <label className='addNew-each-field'>
                        <h3>Description:</h3>
                        <textarea type="text" placeholder='Enter Description' name="desc" id="desc" required/>
                    </label>
                    <label className='addNew-each-field'>
                        <h3>Price:</h3>
                        <input type="number" placeholder='Enter Price' name="price" id="price" min={0} required/>
                    </label>
                    <button className='addNew-submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewItemModal
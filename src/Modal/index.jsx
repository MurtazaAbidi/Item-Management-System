import React from 'react'
import './modalStyles.css'
import {RxCrossCircled} from 'react-icons/rx'


const Modal = ({ setOpenModal, clickedItem, items }) => {
    return (
        <div className='modal-container'>
            <div className='modal-innerContainer'>

                <div className='cross-icon'><h2>Item Details</h2><i onClick={()=>{setOpenModal(false)}}><RxCrossCircled/></i></div>
                <div className='modal-each-field'>
                    <h3>Name:</h3>
                    <p>{items[clickedItem].name}</p>
                </div>
                <div className='modal-each-field'>
                    <h3>Description:</h3>
                    <p>{items[clickedItem].desc}</p>
                </div>
                <div className='modal-each-field'>
                    <h3>Price:</h3>
                    <p>Rs.{items[clickedItem].price}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
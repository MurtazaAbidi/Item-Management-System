import React, { useState } from 'react'
import './ItemListStyles.css'
import ShowItemModal from '../../Modal/ShowItemModal'
import axios from 'axios'
import UpdateItemModal from '../../Modal/UpdateItemModal'

const ItemList = ({ items, setItems }) => {
    const [clickedItem, setClickedItem] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [openUpdateModal, setOpenUpdateModal] = useState(false)


    const handleUpdate = async (index) => {
        setClickedItem(index);
        setOpenUpdateModal(true);
    }

    const handleDelete = async (id) => {
        console.log(id)
        const newItemList = items.filter((element) => {
            return element.id !== id;
        })
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/items/delete/${id}`)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                alert(error.message)
            })
        setItems(newItemList)
    }

    return (
        <>
            {openModal ? <ShowItemModal setOpenModal={setOpenModal} clickedItem={clickedItem} items={items} /> : null}
            {openUpdateModal ? <UpdateItemModal setOpenUpdateModal={setOpenUpdateModal} clickedItem={clickedItem} items={items} setItems={setItems}/> : null}
            <div className='itemList-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((element, index) => {
                            return <tr key={index} onClick={() => { setClickedItem(index) }}>
                                <td onClick={() => { setOpenModal(true) }}>{element.id}</td>
                                <td onClick={() => { setOpenModal(true) }}>{element.name}</td>
                                <td onClick={() => { setOpenModal(true) }}>{element.description}</td>
                                <td onClick={() => { setOpenModal(true) }}>Rs. {element.price}</td>
                                <td style={{ cursor: 'default' }}><button onClick={() => { handleUpdate(index) }}>Update</button><button onClick={() => { handleDelete(element.id) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ItemList
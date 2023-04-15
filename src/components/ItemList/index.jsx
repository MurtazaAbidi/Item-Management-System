import React from 'react'
import './ItemListStyles.css'

const ItemList = ({ items }) => {
    return (
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
                        return <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.desc}</td>
                            <td>Rs. {element.price}</td>
                            <td><button>Update</button><button>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default ItemList
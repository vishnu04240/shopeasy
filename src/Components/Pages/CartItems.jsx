import React, { useState } from 'react'
import '../../assets/styles/CartItems.css'
// ✅ 1. Import your json file
import jsonData from '../../jsondata/products.json'

const CartItems = () => {

    // ✅ 2. Use cartitems array directly from json
    let [data, setData] = useState(jsonData.cartitems)

    // ✅ 3. Delete just filters from state (no backend needed)
    let deleteproduct = (id) => {
        let updated = data.filter(item => item.id !== id)
        setData(updated)
    }

    return (
        <>
            <div className="cartitems">
                <div className="head">
                    <h1>Cart Items</h1>
                </div>
                <div className="container">
                    <table border={1} cellPadding='100px'>
                        <thead>
                            <tr>
                                <th>sno</th>
                                <th>TITLE</th>
                                <th>CATEGORY</th>
                                <th>PRICE</th>
                                <th>IMAGE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((elem, index) => {
                                let { id, title, price, category, image } = elem
                                return (
                                    <tr key={id}>
                                        <td>{index + 1}</td>
                                        <td><p>{title}</p></td>
                                        <td>{category}</td>
                                        <td>{Math.floor(price * 80)}rs</td>
                                        <td><img src={image} alt="" width="80px" /></td>
                                        <td><button onClick={() => deleteproduct(id)}>DELETE</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CartItems
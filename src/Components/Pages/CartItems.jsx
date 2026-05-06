import React, { useEffect, useState } from 'react'
import '../../assets/styles/CartItems.css'
import axios from 'axios'


const CartItems = () => {

    let [data, setData] = useState([])

    let fetchapis = async () => {
        let apidata = await fetch('http://localhost:4000/cartitems')
        let res = await apidata.json()
        setData(res)
        console.log(res);

    }
    useEffect(() => { fetchapis() }, [])

    let deleteproduct = async (id) => {
        await axios.delete(`http://localhost:4000/cartitems/${id}`)
        alert('item deleted')
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

                            {data.map((elem, index) => {
                                let { id, title, price, description, category, image, rating } = elem
                                return (
                                    <tr>
                                        <td>{id}</td>
                                        <td><p>{title}</p></td>
                                        <td>{category}</td>
                                        <td>{Math.floor(price * 80)}rs</td>
                                        <td><img src={image} alt="" /></td>
                                        <td><button onClick={() => deleteproduct(id)}>DELETE</button></td>

                                    </tr>
                                )
                            })}
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CartItems

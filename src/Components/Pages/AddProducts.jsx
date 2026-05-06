import React, { useState } from 'react'
import '../../assets/styles/AddProducts.css'

const AddProducts = () => {

    let [formdata, setFormdata] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: "",
            count: ""
        }
    })

    let handleInput = (e) => {
        let key = e.target.name
        let val = e.target.value

        if (key === 'rate' || key === 'count') {
            setFormdata({
                ...formdata, rating: {
                    ...formdata.rating,
                    [key]: val
                }
            })
        } else {
            setFormdata({ ...formdata, [key]: val })
        }
    }

    let handlesubmit = (e) => {
        e.preventDefault()

        // ✅ Save to localStorage instead of localhost
        let existingProducts = JSON.parse(localStorage.getItem('products')) || []

        let newProduct = {
            ...formdata,
            id: Date.now().toString() // ✅ generate unique id
        }

        existingProducts.push(newProduct)
        localStorage.setItem('products', JSON.stringify(existingProducts))

        alert('Product Added!')
        window.location.reload()
    }

    return (
        <>
            <div className="addproducts">
                <div className="head">
                    <h1>AddProducts</h1>
                </div>
                <div className="form-box">
                    <form action="" onSubmit={handlesubmit}>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td><label>TITLE</label></td>
                                    <td><input type="text" placeholder='Title'
                                        name='title' value={formdata.title} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <td><label>PRICE</label></td>
                                    <td><input type="text" placeholder='Price'
                                        name='price' value={formdata.price} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <td><label>DESCRIPTION</label></td>
                                    <td><textarea rows={3} cols={40} placeholder='Desc'
                                        name='description' value={formdata.description} onChange={handleInput}></textarea></td>
                                </tr>
                                <tr>
                                    <td><label>CATEGORY</label></td>
                                    <td>
                                        <select name="category" onChange={handleInput}>
                                            <option value="">select</option>
                                            <option value="men's clothing">men's clothing</option>
                                            <option value="jewelery">jewelery</option>
                                            <option value="electronics">electronics</option>
                                            <option value="women's clothing">women's clothing</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>IMAGE</label></td>
                                    <td><input type="text" placeholder='Image URL'
                                        name='image' value={formdata.image} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <td><label>RATING</label></td>
                                    <td><input type="text" placeholder='Rating'
                                        name='rate' value={formdata.rating.rate} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <td><label>COUNT</label></td>
                                    <td><input type="text" placeholder='Count'
                                        name='count' value={formdata.rating.count} onChange={handleInput} /></td>
                                </tr>
                            </thead>
                        </table>
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProducts
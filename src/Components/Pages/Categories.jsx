import React, { useState } from 'react'
import jsonData from '../../jsondata/products.json' // ✅ import json

const Categories = () => {

  // ✅ load products directly from json
  let [products, setProducts] = useState(jsonData.products)
  let [proname, setProname] = useState('')
  let [category, setCategory] = useState([])

  // ✅ filter by category from local state
  let handleclick = (e) => {
    let clickedCategory = e.target.innerText
    setProname(clickedCategory)
    let filtereddata = products.filter((elem) => {
      return elem.category === clickedCategory // ✅ fixed bug (was using old proname)
    })
    setCategory(filtereddata)
  }

  // ✅ delete from local state
  let deleteproduct = (id) => {
    let bool = window.confirm('Do you want to delete this item?')
    if (bool) {
      let updated = products.filter((elem) => elem.id !== id)
      setProducts(updated)
      let updatedCategory = category.filter((elem) => elem.id !== id)
      setCategory(updatedCategory)
      alert('Product Item is Deleted')
    } else {
      alert('Product Item is Not Deleted')
    }
  }

  // ✅ add to cart using localStorage
  let addtocart = (id) => {
    let bool = window.confirm('Do you want to add?')
    if (bool) {
      let cartdata = products.find((elem) => elem.id === id)
      
      // get existing cart from localStorage
      let existingCart = JSON.parse(localStorage.getItem('cart')) || []
      existingCart.push(cartdata)
      localStorage.setItem('cart', JSON.stringify(existingCart))
      
      alert('Item added to cart!')
    } else {
      alert('Item not added')
    }
  }

  return (
    <div>
      <div className="categorybox">
        <h3>CATEGORIES</h3>
        <ul>
          <li onClick={handleclick}>men's clothing</li>
          <li onClick={handleclick}>jewelery</li>
          <li onClick={handleclick}>electronics</li>
          <li onClick={handleclick}>women's clothing</li>
        </ul>
      </div>

      <h4 className='porname'>{proname.toUpperCase()}</h4>

      <div className="category-result">
        {category.map((ele, index) => {
          let { id, title, price, category, image } = ele
          return (
            <div className="card" key={index}>
              <div className="img"><img src={image} alt="" /></div>
              <div className="tp">
                <div className="title"><p>{title}</p></div>
                <div className="price"><p>{Math.floor(price * 80)}rs</p></div>
              </div>
              <div className="btn">
                <button onClick={() => addtocart(id)}>ADD</button>
                <button className='del' onClick={() => deleteproduct(id)}>DELETE</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
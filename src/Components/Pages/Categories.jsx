import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = () => {

  let [products, setProducts] = useState([])
  let [proname, setProname] = useState('')
  let [category, setCatogory] = useState([])


  let fetchapi = async () => {
    let resp = await fetch('http://localhost:4000/products')
    let apidata = await resp.json()
    setProducts(apidata)
  }
  useEffect(() => {
    fetchapi()
  }, [])

  let handleclick = (e) => {
    setProname(e.target.innerText)
    let filtereddata = products.filter((elem) => {
      return elem.category === proname
    })
    console.log(filtereddata);
    setCatogory(filtereddata)

  }

  let deleteproduct = async(id)=>{
    let bool = window.confirm('DO you want to delete this item')
    if(bool){
      await axios.delete(`http://localhost:4000/products/${id}`)
      alert('Product Item is Deleted')
    }else{
      alert('Product Item is Not Deleted')
    }

  }

  let addtocart = (id)=>{
    let cartdata = products.filter((elem)=>{
      return elem.id === id
    })
    console.log(...cartdata);
    

    let bool = window.confirm('do u want to add')
    if (bool){
      fetch('http://localhost:4000/cartitems',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(...cartdata)
      })
      alert("item added")
    }else{
      alert('item not added')
    }
  }




  return (
    <div>

      <div className="categorybox">
        <h3> CATEGORIES</h3>
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
          let { id,title, price, description, category, image, rating } = ele
          return (
            <div className="card" key={index}>
              <div className="img"><img src={image} alt="" /></div>
              <div className="tp">
                <div className="title"><p>{title}</p></div>
                <div className="price"><p>{price*80}rs</p></div>
              </div>
              <div className="desc"></div>
              <div className="btn">
                <button onClick={()=>addtocart(id)}>ADD</button>
                <button className='del' onClick={()=>deleteproduct(id)}>DELETE</button>
              </div>
            </div>
          )
        })}
        
      </div>

    </div>
  )
}

export default Categories

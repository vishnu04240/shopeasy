import React, { useState } from 'react'
import '../../assets/styles/AddProducts.css'

const AddProducts = () => {

    let [formdata,setFormdata]=useState({
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
        rating: {
             rate:"",
             count:""
        }
        
    })

    let handleInput=(e)=>{
       let key =e.target.name
       let val =e.target.value

       if(key === 'rate' || key === 'count'){
        setFormdata({...formdata,rating:{
            ...formdata.rating,
            [key]:val
        }})
        }
        else{
            setFormdata({...formdata,[key]:val})
        }
        // let newProduct= {
            // ...formdata,
            // [key]:val
        // }
        // console.log(newProduct);
        // 
// 
        // setFormdata(newProduct)
    }

    let handlesubmit =(e) =>{
        e.preventDefault()
        fetch(`http://localhost:4000/products`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formdata)
        })
        alert('prod adds')
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
                                    <td><label htmlFor="">TITLE</label></td>
                                    <td><input type="text" placeholder='Title' /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">PRICE</label></td>
                                    <td><input type="text" placeholder='Price'
                                    name='price' value={formdata.price} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">DESCRIPTION</label></td>
                                    <td><textarea rows={3} cols={40} placeholder='Desc'
                                    name='description' value={formdata.description} onChange={handleInput}></textarea></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">CATEGORY</label></td>
                                    <td><select name="category" id="" onChange={handleInput}>
                                        <option value="">select</option>
                                        <option value="men's clothing">men's clothing</option>
                                        <option value="jewelery">jewelery</option>
                                        <option value="electronics">electronics</option>
                                        <option value="women's clothing">women's clothing</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">IMAGE</label></td>
                                    <td><input type="text" placeholder='Image URL' 
                                    name='image' value={formdata.image} onChange={handleInput}/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">RATING</label></td>
                                    <td><input type="text" placeholder='Rating' 
                                    name='rate' value={formdata.rating.rate} onChange={handleInput}/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">COUNT</label></td>
                                    <td><input type="text" placeholder='Count' 
                                    name='count' value={formdata.rating.count} onChange={handleInput}/></td>
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

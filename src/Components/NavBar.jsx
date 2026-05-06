import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="heading">
                    <h1>ShopEasy</h1>
                </div>
                <div className="options">
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='addproducts'>Add Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cartitems'>Cart Items</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar

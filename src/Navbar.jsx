import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Login from './Login'
import Seller from './Seller'
import Register from './Sign'
import Product from './Product'
import Landing from './Landing'

function Navbar() {
    return (
        <>
            <nav className="min-h-16 bg-indigo-400 flex justify-between	 items-center p-4">
                <div className="text-3xl text-slate-50"><Link to="/">ZomatoMall</Link></div>
                <ul className="flex justify-between	 items-center gap-5	">
                    <li className="text-2xl text-slate-50"><Link to="/product">Products</Link></li>
                    <li className="text-2xl text-slate-50"><Link to="/seller">Add Seller</Link></li>
                    <button className="text-2xl text-slate-50"><Link to="/login">Login</Link></button>
                    <button className="text-2xl text-slate-50"><Link to="/signup">Sign UP</Link></button>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/product' element={<Product />} />
                <Route path='/seller' element={<Seller />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
            </Routes>
        </>

    )
}

export default Navbar
import React from 'react'
import BG from './assets/bg.jpg'
import './App.css'
import Product from './Product'
import { Routes, Route, Link } from 'react-router-dom'
const Landing = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 space-y-4 max-w-md mx-auto">
                    <img
                        src={BG}
                        alt="E-Commerce"
                        className="w-40 h-40 object-cover rounded-full"
                    />
                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Welcome to E-Commerce Website
                    </h2>
                    <button className="px-6 py-3 bg-orange-400 text-white rounded-full hover:bg-slate-50 hover:border border-orange-400 hover:text-orange-400 transition duration-300">
                        <Link to="/product">Explore More</Link>
                    </button>
                </div>
            </div>
            <Routes>
                <Route path='/product' element={<Product />}></Route>
            </Routes>

        </>

    )
}

export default Landing
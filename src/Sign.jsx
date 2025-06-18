import React from 'react'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
const Sign = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-color">
                <div className="p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6 text-orange-400">Create Account</h2>
                    <form action="#" className="space-y-4">
                        <label className='block'>
                            <span class="block text-lg font-medium text-gray-700">Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address"
                                className="w-full px-4 py-2 border rounded-md text-lg	"
                            />
                        </label>
                        <label className='block'>
                            <span class="block text-lg font-medium text-gray-700">Username</span>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter Your Username"
                                className="w-full px-4 py-2 border rounded-md text-lg	"
                            />
                        </label>
                        <label className='block'>
                            <span class="block text-lg font-medium text-gray-700">Password</span>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-2 border rounded-md text-lg"
                            />
                        </label>
                        <button
                            type="submit"
                            className="w-full border border-orange-400 text-orange-400 font-semibold color p-3 rounded-md "
                        >
                            Sign Up
                        </button>
                        <h1 className='text-center text-gray-700 cursor-pointer	'>Already have an account?<Link to='/login' className='text-orange-400'> Login</Link></h1>
                    </form>
                </div>
            </div>

            <Routes>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </>
    )
}

export default Sign
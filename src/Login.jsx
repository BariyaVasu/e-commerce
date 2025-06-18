import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './Sign'

function Login() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-color">
                <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6 text-orange-400">Welcome Back</h2>
                    <form action="#" className="space-y-4">
                        <label className='block'>
                            <span class="block text-lg font-medium text-gray-600">Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enetr Your Email Address"
                                className="w-full px-4 py-2 border rounded-md text-lg"
                            />
                        </label>
                        <label className='block'>
                            <span class="block text-lg font-medium text-gray-600">Password</span>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                className="w-full px-4 py-2 border rounded-md text-lg"
                            />
                        </label>
                        <div className='flex justify-between'>
                            <h1 className='text-gray-600'><input type="checkbox" name="me" className='' />Remember Me</h1>
                            <h2 className='text-gray-600'>Forgot password?</h2>
                        </div>
                        <button
                            type="submit"
                            className="w-full border bg-orange-400 text-slate-100 hover:bg-slate-50 hover:text-orange-400 hover:border border-orange-400 font-semibold color p-3 rounded-md transition duration-300"
                        >
                            Login
                        </button>
                        <h1 className='text-center  text-gray-700 cursor-pointer'>Don't have an account?<Link to="/sign" className='text-orange-400'> Register</Link></h1>
                    </form>
                </div>
            </div>


            <Routes>
                <Route path="/sign" element={<Register />} />
            </Routes>

        </>
    )
}

export default Login
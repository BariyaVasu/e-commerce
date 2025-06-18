import React from 'react'
import './index.css'

const ForgotPass = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-color">
            <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-orange-400">Forgot Password</h2>
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
                    <button
                        type="submit"
                        className="w-full border border-orange-400 text-orange-400 font-semibold color p-3 rounded-md "
                    >
                        Forogt Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPass
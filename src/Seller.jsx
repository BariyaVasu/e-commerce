import React from 'react'
import './index.css'
const Seller = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-color">
            <div className="p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Add New Seller</h2>
                <form action="#" className="space-y-4">
                    <label className='block'>
                        <span class="block text-lg font-medium text-gray-700">Seller Name</span>
                        <input
                            type="text"
                            name="seller-name"
                            placeholder="Enter Seller Name"
                            className="w-full px-4 py-2 border rounded-md text-lg	"
                        />
                    </label>
                    <label className='block'>
                        <span class="block text-lg font-medium text-gray-700">Seller Address</span>

                        <input
                            type="email"
                            name="seller-email"
                            placeholder="Enter Email Adress"
                            className="w-full px-4 py-2 border rounded-md text-lg"
                        />
                    </label>

                    <label className='block'>
                        <span class="block text-lg font-medium text-gray-700">Shop Name</span>
                        <input
                            type="text"
                            name="seller-shop"
                            placeholder="Enter Shop Name"
                            className="w-full px-4 py-2 border rounded-md text-lg	"
                        />
                    </label>

                    <div className='flex justify-center items-center gap-3'>
                        <label className='block'>
                            <span class="block text-lg font-medium text-gray-700">Phone Number</span>
                            <input
                                type="text"
                                name="seller-name"
                                placeholder="7859423105"
                                className="w-full px-4 py-2 border rounded-md text-lg"
                            />
                        </label>
                        <label className='block'>
                            <span class="block text-lg font-medium text-gray-700">Shop Address</span>

                            <input
                                type="email"
                                name="seller-email"
                                placeholder="City, Street, Pincode"
                                className="w-full px-4 py-2 border rounded-md text-lg"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-700 text-slate-50 font-semibold color p-3 rounded-md ">
                        Add Seller
                    </button>
                </form>
            </div>
        </div>


    )
}

export default Seller

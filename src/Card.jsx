import React from 'react'
import './index.css'

// const data = [

//     {hotelName : "demo",foo : "demo",hotelName : "demo",}

// ];


const Card = ({ imageUrl, hotelName, dishName, foodPrice, buttonText }) => {
    return (

        <>
            <div className="flex align-center justify-center flex-col m-3 p-2 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
                <div className='w-[100%] h-[100%]'>
                    <img className="w-full h-auto object-cover rounded-2xl" src={imageUrl} alt="Dish Image" />

                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{hotelName}</h2>
                    <p className="text-gray-600 text-sm mt-1">Dish: {dishName}</p>
                    <p className="text-lg font-bold text-green-600 mt-2">₹{foodPrice}</p>
                    <button className="mt-4 w-full bg-blue-600 hover:bg-slate-100 hover:text-blue-600 hover:border border-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
                        {buttonText}
                    </button>
                </div>
            </div>
        </>


    )
}

export default Card
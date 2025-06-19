import React from 'react'
import Card from './Card';
// import './App.css'


const Product = () => {
    return (
        <div className='flex justify-center'>
            {Array.from({ length: 4 }).map((el, ind) => {
                return <Card imageUrl={`https://picsum.photos/400/${Math.floor(Math.random() * 5) + 295}`} dishName={"pizza"} hotelName={"Nathu Hotel"}
                    buttonText={"Order Now"} key={ind} foodPrice={Math.floor(Math.random() * 100) + Math.floor(Math.random() * 300)} />
            })}
        </div>
    )
}

export default Product
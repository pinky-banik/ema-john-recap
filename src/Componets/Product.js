import React from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs';

const Product = ({product,handleAddToCart}) => {
    const {id,catagory,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity} =product;
;    return (
        <div className='shadow-md rounded-lg hover:shadow-xl'>
            <img className='p-2' src={img} alt="img" />
            <div className='p-2'>
            <p className='text-md'>{name.slice(0,20)}</p>
            <p className='text-sm mb-10'>Price : ${price}</p>
            <small>Manufacurer: {seller}</small><br />
            <small>Rating : {ratings} star</small>
            </div>
            
            <button
            onClick={()=>{handleAddToCart(product)}}
            className=' bg-orange-200 rounded-b hover:bg-orange-300 mt-2 flex justify-center items-center p-2 w-full mb-0'>Add to cart  <BsFillCartPlusFill className='mx-1'/></button>
        </div>
    );
};

export default Product;
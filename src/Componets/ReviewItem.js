import React from 'react';
import {RiDeleteBin2Fill} from 'react-icons/ri';

const ReviewItem = ({item,handleDelete}) => {

    const {img,price,name,quantity,id} = item;

    return (
        <div className='flex p-2 shadow-lg rounded m-5 items-center '>
            <div className='w-3/12'>
                <img className='w-20 m-1' src={img} alt="" />
            </div>
            <div className='p-2 w-8/12'>
                <h1 title={name}>{name.length>20 ? name.slice(0,20)+'...' : name}</h1>
                <p>Price : ${price}</p>
                <p>Quantity : {quantity}</p>
            </div>
            <div className='right-0 w-1/12'>
                <button onClick={()=>{handleDelete(item)}}>
                <RiDeleteBin2Fill className='text-red-800 text-xl' />
                </button>
                
            </div>
        </div>
    );
};

export default ReviewItem;
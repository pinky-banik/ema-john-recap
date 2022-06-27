import React from 'react';

const Cart = ({cart}) => {
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total+ product.price * product.quantity;
        shipping = shipping+ product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = (total+shipping+parseFloat(tax)).toFixed(2);

    return (
        <div className='w-1/4 cart fixed right-0 shadow-md p-5 mx-2 my-5 rounded bg-orange-200 leading-10'>
                <h1 className='text-lg font-bold my-2'>Order Summary</h1>
                <p className='text-md'>Selected Items: {quantity}</p>
                <p>Total price : ${total}</p>
                <p>Total Shipping : ${shipping} </p>
                <p>Tax : {tax}</p>
                <p className='font-bold '>Grand Total : ${grandTotal} </p>
            </div>
    );
};

export default Cart;
import React from 'react';
import UseCart from '../Hooks/useCart';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import Cart from './Cart';
import ReviewItem from './ReviewItem';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";


const Orders = () => {
    
    const [cart,setCart] = UseCart();
    const navigate = useNavigate();
    const handleDelete = item =>{
        const rest = cart.filter(pd => pd.id !== item.id);
        setCart(rest);
        removeFromDb(item.id);
    }
    const handleProceed =() =>{
        deleteShoppingCart();
        navigate("/inventory");
    }
    return (
        <div>
            {
                cart.length !==0 ?
                <div className='flex p-10 m-10'>
            
            <div className='w-2/3'>
                {
                    cart.map((item)=> 
                    <ReviewItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}/>
                    )
                } 
            </div>
            <div className='w-1/3 cart shadow-md p-5 mx-2 m-5 rounded bg-orange-200 leading-10 h-80'>
                <Cart cart={cart}>
                    <button 
                    onClick={handleProceed}
                    className='bg-red-500 w-full rounded'>Proceed Checkout</button>
                </Cart>
            </div>
        </div>:
        <div className='flex-row m-auto text-center my-32 h-screen'>
            <h1 className='text-6xl font-bold text-red-600 my-10'>No product added to cart</h1>
            <Link to="/shop" className='bg-red-500 my-28 p-5 rounded'> Add any product</Link>
        </div>
            }
        </div>
    );
};

export default Orders;
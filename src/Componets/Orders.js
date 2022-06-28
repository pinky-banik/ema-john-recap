import React from 'react';
import UseCart from '../Hooks/useCart';
import { removeFromDb } from '../utilities/fakedb';
import Cart from './Cart';
import ReviewItem from './ReviewItem';


const Orders = () => {
    
    const [cart,setCart] = UseCart();
    const handleDelete = item =>{
        const rest = cart.filter(pd => pd.id !== item.id);
        setCart(rest);
        removeFromDb(item.id);
    }

    return (
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
            <div className='w-1/3 cart shadow-md p-5 mx-2 m-5 rounded bg-orange-200 leading-10 h-96'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Orders;
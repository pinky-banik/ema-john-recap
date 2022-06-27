import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import Cart from './Cart';
import Product from './Product';

const Shop = () => {
    const[products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart =getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    },[products])

    const handleAddToCart=(product)=>{
        let newCart =[];
        const exists = cart.find(singleProduct => product.id === product.id);
        if(!exists){
            product.quantity =1;
            newCart=[...cart,product];
        }
        else{
            const rest = cart.filter(singleProduct=> singleProduct.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart =[...rest,exists];
        }
        
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='flex justify-between px-3 product-container '>
            <div className='w-3/4 grid lg:grid-cols-3 sm:grid-cols-2 gap-5 p-5 lg:w-3/4 '>
                {
                    products.map((product)=>
                    <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div>
                <Cart
                cart={cart}
                />
            </div>
        </div>
    );
};

export default Shop;
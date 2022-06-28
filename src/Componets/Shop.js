import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseCart from '../Hooks/useCart';
import UseProducts from '../Hooks/UseProducts';
import { addToDb} from '../utilities/fakedb';
import Cart from './Cart';
import Product from './Product';
import {BiSearchAlt} from 'react-icons/bi';


const Shop = () => {
    const[products,setProducts] = UseProducts();
    const [cart,setCart] = UseCart();
    const [searchText,setSearchText] = useState('');
    const [searchResult,setSearchResult] = useState([]);
    const navigate = useNavigate();
    const handleOrders=()=>{
        navigate("/orders");
    }
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>{
            const match = products.filter(product=>product.name.toLowerCase().includes(searchText));
        setSearchResult(match);
        })
    },[searchText]);


    console.log(searchText);


    const handleSearch = event =>{
        setSearchText(event.target.value);
        
    }
    
    const handleAddToCart=(product)=>{
        let newCart =[];
        const exists = cart.find(singleProduct => singleProduct.id === product.id);
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
        <div>
            <div className='flex border-4 rounded m-5 items-center justify-between'>
            <input onBlur={handleSearch} className='w-full p-3  hover:outline-none selection:ouline-none flex mx-auto' type="text" name="" placeholder='search any product' id="" />
            <BiSearchAlt className='m-5'/>
            </div>




            <div className='flex justify-between px-3 product-container '>
            
            {
                searchText ? 
                <div className='w-3/4 grid lg:grid-cols-3 sm:grid-cols-2 gap-5 p-5 lg:w-3/4 '>
                    
                {
                    searchResult.map((product)=>
                    
                    <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    
                    >
                    </Product>)
                }
            </div>:
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
            }

            <div className='w-1/4 cart fixed right-0 shadow-md p-5 mx-2 my-5 rounded bg-orange-200 leading-10'>
                <Cart
                cart={cart}
                >
                    <button onClick={handleOrders}
                     className='bg-red-500 w-full rounded'
                     >Review Orders</button>
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;
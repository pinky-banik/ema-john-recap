import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseCart from '../Hooks/useCart';
import UseProducts from '../Hooks/UseProducts';
import { addToDb} from '../utilities/fakedb';
import Cart from './Cart';
import Product from './Product';

const Shop = () => {
    const[products,setProducts] = UseProducts();
    const [cart,setCart] = UseCart();
    const navigate = useNavigate();
    
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
            <div className='w-1/4 cart fixed right-0 shadow-md p-5 mx-2 my-5 rounded bg-orange-200 leading-10'>
                <Cart
                cart={cart}
                />
            </div>
        </div>
    );
};

export default Shop;
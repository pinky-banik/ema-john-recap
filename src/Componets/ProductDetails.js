import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const {productId} = useParams();
    const[product,setProduct]= useState({});

    useEffect((id)=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
        console.log(product);
    },[]);
    
    return (
        <div>
            this is product details
        </div>
    );
};

export default ProductDetails;
import React from 'react';
import gif from "../images/giphy.gif";

const Inventory = () => {
    return (
        <div className='flex items-center h-screen bg-black justify-center'>
            <img src={gif} alt="" />
        </div>
    );
};

export default Inventory;
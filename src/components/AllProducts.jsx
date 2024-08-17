import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res =>res.json())
        .then(data => setProducts(data))
    } ,[])
     return (
        <div>
            All Products
        </div>
    );
};

export default AllProducts;
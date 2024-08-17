import React, { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';

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
            <h2>All Products</h2>
            <div>
                {
                    products.map(product =><ProductsCard
                    key={product._id}
                    product={product}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
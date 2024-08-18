import React, { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [asc, setAsc] =useState(true)
    console.log(products);
    useEffect(()=>{
        fetch(`http://localhost:3000/products?sort=${asc?'asc':'dsc'}`)
        .then(res =>res.json())
        .then(data => setProducts(data))
    } ,[asc])
     return (
        <div>
            <h2>All Products</h2>
            <button 
            className='btn btn-primary'
            onClick={() =>setAsc(!asc)}
            >
                {asc?'Price:Low to High': 'Price: High to Low'}
                </button>
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
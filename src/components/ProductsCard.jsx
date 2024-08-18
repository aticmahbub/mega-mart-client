import React from 'react';

const ProductsCard = ({product}) => {


    // 
    const {Category,Description, Price, ProductCreationDateTime,ProductImage, ProductName, Ratings} =product
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={ProductImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{ProductName}</h2>
    <p>{Description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{Price}</button>
    </div>
  </div>
</div>
    );
};

export default ProductsCard;

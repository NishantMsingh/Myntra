
import React from 'react';
import ProductCard from "./ProductCard";
import { products } from "../Assets/Address JSon/ProductsJSONWomes";



const Men = () => {
  return (
    <>
       <h2 className='container mt-5 mb-5 text-dark'>Womens Collections</h2>
       <div className='container d-flex align-items-center justify-content-evenly flex-wrap mt-5 mb-5'>
   
   {products.map((value) => (
     <ProductCard key={value.productCode} product={value} />
   ))}
 </div>
    </>
  );
};

export default Men;
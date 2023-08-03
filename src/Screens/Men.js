<<<<<<< HEAD
import React from 'react';
import ProductCard from "./ProductCard";
import { products } from "../Assets/Address JSon/ProductsJSONMens";



const Men = () => {
  return (
    <div className='container d-flex align-items-center justify-content-evenly flex-wrap mt-5 mb-5'>
      {products.map((value) => (
        <ProductCard key={value.productCode} product={value} />
      ))}
    </div>
  );
};

export default Men;
=======
import React from 'react';
import ProductCard from "./ProductCard";
import { products } from "../Assets/Address JSon/ProductsJSONMens";



const Men = () => {
  return (
    <div className='container d-flex align-items-center justify-content-evenly flex-wrap mt-5 mb-5'>
      {products.map((value) => (
        <ProductCard key={value.productCode} product={value} />
      ))}
    </div>
  );
};

export default Men;
>>>>>>> 196c434fd0ef497977ed85c89032fe7cfc4a07f1

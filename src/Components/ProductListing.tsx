import React from 'react';
import { Product } from './Products';
import  "../Styles/ProductListingStyles.css"

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="main_container">
      <h2>Product Listing</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={product.image} alt="Prodcut Image" width={150} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

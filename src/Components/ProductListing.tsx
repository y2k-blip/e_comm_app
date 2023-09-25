import React from 'react';
import { Product } from './Products';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={product.image} alt="Prodcut Image" width={150} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

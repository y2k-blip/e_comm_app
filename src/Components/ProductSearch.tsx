import React from "react";
import "../Styles/ProductSearchStyles.css";

interface ProductSearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  searchTerm,
  setSearchTerm,
  maxPrice,
  setMaxPrice,
  category,
  setCategory,
}) => {
  return (
    <div className="filter-parent-container">
      <div className="filter-search">
        <span>Search within products</span>
        <input
          type="text"
          placeholder="Enter keywords"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="filter-secondary-container">
        <div className="filter-max-price">
          <span>Enter maximum price:</span>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div className="filter-dropdown">
          <span>Filter by Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;

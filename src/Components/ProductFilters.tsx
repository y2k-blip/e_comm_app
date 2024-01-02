import React from "react";

interface ProductFiltersProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ setSearchTerm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default ProductFilters;

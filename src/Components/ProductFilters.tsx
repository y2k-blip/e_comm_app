import React from "react";

interface ProductFiltersProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  setSearchTerm,
  setMinPrice,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        onChange={(e) => setMinPrice(parseInt(e.target.value))}
      />
    </div>
  );
};

export default ProductFilters;

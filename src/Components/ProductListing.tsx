import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

interface Products {
  title: string;
  id: number;
  image: string;
}

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)))
      .catch((err: any) => setError(err));
    console.log(setProducts);
  }, []);

  return (
    <>
      {products.length > 0
        ? products.map((products: Products) => (
            <>
              <div>{products.title}</div>
              <img src={products.image} alt="" />
            </>
          ))
        : "Loading"}
    </>
  );
};

export default ProductListing;

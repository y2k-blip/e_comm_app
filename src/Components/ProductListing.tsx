import React, { useEffect, useState } from "react";
import "../Styles/ProductListingStyles.css";
interface Products {
  title: string;
  id: number;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err: any) => setError(err));
    console.log(setProducts);
  }, []);

  return (
    <>
      <div className="products-main-container">
        {products.length > 0
          ? products.map((products: Products) => (
              <div className="secondary-container">
                <div className="title">{products.title}</div>
                <div className="img-cntr">
                  <img className="img" src={products.image} alt="" />
                </div>
                <div className="price">Price: ${products.price}</div>
                <button className="cta-add-to-cart">Add To Cart</button>
              </div>
            ))
          : <span className="loader"></span>}
      </div>
    </>
  );
};

export default ProductListing;

import { useEffect, useState } from "react";
import "../Styles/ProductListingStyles.css";
interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category;
}
export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  return (
    <>
      <div className="products-main-container">
        {products.length > 0 ? (
          products.map((products: Products) => (
            <div className="secondary-container">
              <div className="title">{products.title}</div>
              <div className="img-cntr">
                <img className="pro-img" src={products.image} alt="" />
              </div>
              <div className="price">Price: ${products.price}</div>
              <button className="cta-add-to-cart">Add To Cart</button>
            </div>
          ))
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </>
  );
};

export default ProductListing;

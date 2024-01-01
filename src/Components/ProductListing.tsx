import { useEffect, useState } from "react";
import ProductSearch from "./ProductSearch";
import "../Styles/ProductListingStyles.css";

interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

const ProductListing = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const priceMatch =
      (minPrice === 0 || product.price >= minPrice) &&
      (maxPrice === 0 || product.price <= maxPrice);
    const categoryMatch =
      category === "" || product.category.toLowerCase() === category.toLowerCase();

    return titleMatch && priceMatch && categoryMatch;
  });

  return (
    <>
      <div className="products-main-container">
        <ProductSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          category={category}
          setCategory={setCategory}
        />
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Products) => (
            <div key={product.id} className="secondary-container">
              <div className="title">{product.title}</div>
              <div className="img-cntr">
                <img className="pro-img" src={product.image} alt="" />
              </div>
              <div className="price">Price: ${product.price}</div>
              <div className="category">Category: {product.category}</div>
              <button className="cta-add-to-cart">Add To Cart</button>
            </div>
          ))
        ) : (
          <span className="loader">No products found</span>
        )}
      </div>
    </>
  );
};

export default ProductListing;

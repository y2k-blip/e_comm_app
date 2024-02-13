import { useState, useEffect } from "react";
import "../Styles/CategoryStyles.css";

type CategoryImages = {
  [key: string]: string;
};

function Categories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data.slice(0, 5));
    } catch (error) {
      alert("Error fetching categories");
    }
  };

  const categoryImages: CategoryImages = {
    smartphones: "./Assets/smartphone.jpg",
    fragrances: "./Assets/fragrance.jpg",
    laptops: "./Assets/laptop.jpg",
    groceries: "./Assets/groceries.jpg",
    skincare: "./Assets/skincare.jpg",
  };

  return (
    <div className="categories-container">
      <h2>Shop by Categories</h2>
      <div className="se-cntr">
        {categories.map((category, index) => (
          <div key={index} className="secondary-categories-container">
            <img
              className="categories-img"
              src={categoryImages[category.toLowerCase()]}
              alt={category}
            />
            <h4>{category}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

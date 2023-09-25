export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "Description for Product 1",
    image: "./Assets/carouselShoes.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "Description for Product 2",
    image: "./Assets/carouselWatches.jpeg"
  },
];

export default products;

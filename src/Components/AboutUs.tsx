import "../Styles/AboutUsStyles.css";
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h1>About Us with me</h1>
      <p>
        Welcome to our e-commerce store! We are a passionate team dedicated to providing high-quality products and excellent customer service.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to make online shopping easy, enjoyable, and accessible for everyone. We aim to offer a wide range of products, from electronics to fashion, at competitive prices.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Customer Satisfaction</li>
        <li>Quality Products</li>
        <li>Transparency</li>
        <li>Community Engagement</li>
      </ul>
    </div>
  );
};

export default AboutUs;

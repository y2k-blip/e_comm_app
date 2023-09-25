import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListingPage from "./Pages/ProductListingPage";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route
          path="/productlistingpage"
          element={<ProductListingPage />}
        ></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import ProductListing from "../Components/ProductListing";
import products from "../Components/Products";

export default function ProductListingPage() {
  return (
    <>
      <ProductListing products={products}></ProductListing>;
    </>
  );
}

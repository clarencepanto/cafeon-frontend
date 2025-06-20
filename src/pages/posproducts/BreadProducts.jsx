import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

function BreadProducts() {
  const [breadProducts, getBreadProducts] = useState([]);

  const getBreadProduct = async () => {
    const response = await axios.get(
      "http://localhost:4000/products?category=bread"
    );

    getBreadProducts(response.data);
  };

  useEffect(() => {
    getBreadProduct();
  }, []);

  return (
    <article className="grid grid-cols-2 gap-4">
      {breadProducts &&
        breadProducts.map((data) => {
          return (
            <ProductCard
              key={data.id}
              productName={data.name}
              productPrice={data.price}
              productQty={data.quantity}
              productImg={data.image_url}
              productIng={data.ingredients}
            />
          );
        })}
    </article>
  );
}

export default BreadProducts;

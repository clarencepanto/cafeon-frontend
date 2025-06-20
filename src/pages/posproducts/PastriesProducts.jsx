import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

function PastriesProducts() {
  const [pastriesProducts, getPastriesProducts] = useState([]);

  const getPastriesData = async () => {
    const response = await axios.get(
      "http://localhost:4000/products?category=pastries"
    );

    getPastriesProducts(response.data);
  };

  useEffect(() => {
    getPastriesData();
  }, []);

  return (
    <article className="grid grid-cols-2 gap-4">
      {pastriesProducts &&
        pastriesProducts.map((data) => {
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

export default PastriesProducts;

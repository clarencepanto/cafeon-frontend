import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

function TeaProducts() {
  const [teaProducts, getTeaProducts] = useState([]);

  const getTeaData = async () => {
    const response = await axios.get(
      "http://localhost:4000/products?category=tea"
    );

    getTeaProducts(response.data);
  };

  useEffect(() => {
    getTeaData();
  }, []);

  return (
    <article className="grid grid-cols-2 gap-4">
      {teaProducts &&
        teaProducts.map((data) => {
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

export default TeaProducts;

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

function CoffeeProducts() {
  const [coffeeProducts, getCoffeeProducts] = useState([]);

  const getCoffeeData = async () => {
    const response = await axios.get(
      "http://localhost:4000/products?category=coffee"
    );

    getCoffeeProducts(response.data);
  };

  useEffect(() => {
    getCoffeeData();
  }, []);

  return (
    <article className="grid grid-cols-2 gap-4">
      {coffeeProducts &&
        coffeeProducts.map((data) => {
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

export default CoffeeProducts;

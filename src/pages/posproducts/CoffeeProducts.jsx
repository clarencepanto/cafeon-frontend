import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useOutletContext } from "react-router-dom";

function CoffeeProducts() {
  const { searchTerm } = useOutletContext();
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

  const filteredCoffee =
    coffeeProducts?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) || [];

  return (
    <div>
      {filteredCoffee.length > 0 ? (
        <article className="grid grid-cols-2 gap-4">
          {filteredCoffee &&
            filteredCoffee.map((data) => {
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
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products available.
        </p>
      )}
    </div>
  );
}

export default CoffeeProducts;

import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // adjust if hosted elsewhere

function CoffeeProducts() {
  const { searchTerm } = useOutletContext();
  const [coffeeProducts, setCoffeeProducts] = useState([]);

  const getCoffeeData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/products?category=coffee"
      );
      setCoffeeProducts(response.data);
    } catch (err) {
      console.error("❌ Failed to fetch coffee products:", err);
    }
  };

  useEffect(() => {
    getCoffeeData();

    const handleUpdate = (updated) => {
      if (updated.category === "coffee") {
        setCoffeeProducts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
        console.log("🔁 Product updated:", updated);
      }
    };

    const handleCreate = (newProduct) => {
      if (newProduct.category === "coffee") {
        setCoffeeProducts((prev) => [...prev, newProduct]);
        console.log("➕ Product added:", newProduct);
      }
    };

    const handleDelete = ({ id }) => {
      setCoffeeProducts((prev) => prev.filter((p) => p.id !== id));
      console.log("🗑 Product deleted:", id);
    };

    socket.on("productUpdated", handleUpdate);
    socket.on("productCreated", handleCreate);
    socket.on("productDeleted", handleDelete);

    return () => {
      socket.off("productUpdated", handleUpdate);
      socket.off("productCreated", handleCreate);
      socket.off("productDeleted", handleDelete);
    };
  }, []);

  const filteredCoffee =
    coffeeProducts?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) || [];

  return (
    <div className="p-3 md:p-4 lg:p-6 lg:pl-1 xl:p-8">
      {filteredCoffee.length > 0 ? (
        <article className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10 xl:gap-8">
          {filteredCoffee.map((data) => (
            <ProductCard
              key={data.id}
              productId={data.id}
              productName={data.name}
              productPrice={data.price}
              productQty={data.quantity}
              productImg={data.image_url}
              productIng={data.ingredients}
            />
          ))}
        </article>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-sm md:text-base lg:text-lg">
          No products available.
        </p>
      )}
    </div>
  );
}

export default CoffeeProducts;

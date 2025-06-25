import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useOutletContext } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function PastriesProducts() {
  const { searchTerm } = useOutletContext();
  const [pastriesProducts, setPastriesProducts] = useState([]);

  const getPastriesData = async () => {
    const response = await axios.get(
      "http://localhost:4000/products?category=pastries"
    );
    setPastriesProducts(response.data);
  };

  useEffect(() => {
    getPastriesData();

    socket.on("productUpdated", (updated) => {
      if (updated.category === "pastries") {
        setPastriesProducts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
      }
    });

    socket.on("productCreated", (newProduct) => {
      if (newProduct.category === "pastries") {
        setPastriesProducts((prev) => [...prev, newProduct]);
      }
    });

    socket.on("productDeleted", ({ id }) => {
      setPastriesProducts((prev) => prev.filter((p) => p.id !== id));
    });

    return () => {
      socket.off("productUpdated");
      socket.off("productCreated");
      socket.off("productDeleted");
    };
  }, []);

  const filteredPastries =
    pastriesProducts?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) || [];

  return (
    <div className="p-3 md:p-4 lg:p-6 lg:pl-1 xl:p-8">
      {filteredPastries.length > 0 ? (
        <article className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 xl:gap-8">
          {filteredPastries.map((data) => (
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

export default PastriesProducts;

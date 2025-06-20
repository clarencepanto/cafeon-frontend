import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useOutletContext } from "react-router-dom";

function PastriesProducts() {
  const { searchTerm } = useOutletContext();
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

  const filteredPastries =
    pastriesProducts?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) || [];

  return (
    <div>
      {filteredPastries.length > 0 ? (
        <article className="grid grid-cols-2 gap-4">
          {filteredPastries &&
            filteredPastries.map((data) => {
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

export default PastriesProducts;

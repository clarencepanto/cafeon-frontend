import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

function BreadProducts() {
  const { searchTerm } = useOutletContext();
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

  const filteredBread =
    breadProducts?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) || [];

  return (
    <div>
      {filteredBread.length > 0 ? (
        <article className="grid grid-cols-2 gap-4">
          {filteredBread &&
            filteredBread.map((data) => {
              return (
                <ProductCard
                  key={data.id}
                  productId={data.id}
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

export default BreadProducts;

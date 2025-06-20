import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useOutletContext } from "react-router-dom";

function TeaProducts() {
  const { searchTerm } = useOutletContext();
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

  const filteredTea =
    teaProducts?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) || [];

  return (
    <div>
      {filteredTea.length > 0 ? (
        <article className="grid grid-cols-2 gap-4">
          {filteredTea &&
            filteredTea.map((data) => {
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

export default TeaProducts;

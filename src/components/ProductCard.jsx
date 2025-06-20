import shoppingcartIcon from "../assets/icons/shopping-cart-one.png";
import { useCart } from "../context/CartContext";

function ProductCard({
  productName,
  productPrice,
  productQty,
  productImg,
  productIng,
  productId,
}) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: productId,
      name: productName,
      price: Number(productPrice),
    });
  };

  return (
    <section className="md:w-[200px] md:max-h-[430px] md:bg-white md:p-2 md:rounded-md">
      <article className="flex justify-center">
        <img
          src={productImg}
          alt={productName}
          className="md:w-[160px] md:h-[180px] md:rounded-lg"
        />
      </article>
      <article className="md:mt-[5px]">
        <div className="md:flex md:justify-between md:pl-2 md:pr-4 md:pt-2.5 ">
          <h1 className=" md:font-bold md:text-[15px] md:tracking-wide">
            {productName}
          </h1>
          <h3 className=" md:text-[15px] md:text-[#FA9564]">${productPrice}</h3>
        </div>
        <p className="md:text-[13px] md:pl-2 md:pr-2 md:pt-2.5 md:text-gray-400 overflow-y-scroll md:max-h-[30px]">
          {JSON.parse(productIng).join(", ")}
        </p>
        <div className="md:flex md:justify-between md:pl-2 md:pr-2.5 md:pt-3">
          <div className="md:flex md:justify-center md:items-center">
            <h3 className="md:text-[12px]">Avail: {productQty}</h3>
          </div>
          <div
            className="md:w-[40px] md:h-[35px] md:flex md:justify-center md:items-center md:bg-[#FA9564] md:rounded-lg"
            onClick={handleAdd}
          >
            <img
              src={shoppingcartIcon}
              alt="shopping cart icon"
              className="cursor-pointer"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProductCard;

import receiptIcon from "../assets/icons/receipt.png";
import OrderCard from "./OrderCard";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotal } =
    useCart();

  const subtotal = getTotal();
  const gst = subtotal * 0.05;
  const pst = subtotal * 0.07;
  const taxtotal = gst + pst;
  const total = subtotal + gst + pst;

  const cartData = [
    {
      id: "abc123",
      name: "Cappuccino",
      price: 4.5,
      quantity: 2,
    },
    {
      id: "def456",
      name: "Iced Latte",
      price: 5.0,
      quantity: 1,
    },
    {
      id: "ghi789",
      name: "Espresso",
      price: 3.25,
      quantity: 3,
    },
  ];

  return (
    <section className="md:bg-white md:w-[310px] md:h-screen ">
      <article className="md:flex md:justify-between md:mr-2 md:ml-2 md:mb-3">
        <h1 className="md:text-[22px] md:font-bold">Current Order</h1>
        <div className="md:flex md:justify-center md:items-center">
          <img src={receiptIcon} alt="recepitIcon" />
          <p className="md:pl-2 md:text-[18px]">#0001</p>
        </div>
      </article>

      <div className="md:h-[550px] overflow-x-hidden oveflow-y-scroll">
        {cartData.map((data) => {
          return (
            <OrderCard
              key={data.id}
              productname={data.name}
              productprice={data.price}
              productqty={data.quantity}
              onIncrease={() => increaseQuantity(data.id)}
              onDecrease={() => decreaseQuantity(data.id)}
              onRemove={() => removeFromCart(TabItem.id)}
            />
          );
        })}
      </div>

      <div className="md:w-full md:h-[1px] md:bg-gray-400 md:mt-3"></div>
      <article className="md:p-2">
        <div className="md:flex md:justify-between md:mb-2">
          <h2>Subtotal</h2>
          <p className="md:mr-2">${subtotal.toFixed(2)}</p>
        </div>
        <div className="md:flex md:justify-between md:mb-2">
          <h2>Gst & Pst</h2>
          <p className="md:mr-2">${taxtotal.toFixed(2)}</p>
        </div>
      </article>
      <div className="border-2 border-dashed border-[#FA9564] md:mb-3"></div>
      <article className="md:p-2">
        <div className="md:flex md:justify-between md:mb-2">
          <h2 className="md:font-bold md:text-[24px]">Total</h2>
          <p className="md:font-bold md:text-[24px]">${total.toFixed(2)}</p>
        </div>
        <div className="md:w-[290px] md:bg-[#FA9564] md:text-center md:pt-4 md:pb-4 md:text-white md:rounded-lg cursor-pointer md:mt-10">
          <button>Checkout</button>
        </div>
      </article>
    </section>
  );
}

export default Cart;

import receiptIcon from "../assets/icons/receipt.png";
import OrderCard from "./OrderCard";
import { useCart } from "../context/CartContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function Cart() {
  const [receiptId, setReceiptId] = useState(0);
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotal,
    clearCart,
  } = useCart();

  const subtotal = getTotal();
  const gst = subtotal * 0.05;
  const pst = subtotal * 0.07;
  const taxtotal = gst + pst;
  const total = subtotal + gst + pst;

  useEffect(() => {
    const fetchLatestReceipt = async () => {
      try {
        const res = await axios.get("http://localhost:4000/sales/latest");
        setReceiptId(res.data.sale_id);
      } catch (err) {
        console.error("❌ Could not fetch receipt ID:", err);
      }
    };

    fetchLatestReceipt();
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/sales", {
        customer_id: null,
        // or set to a value if using loyalty profiles
        items: cart.map((item) => ({
          product_id: item.id,
          price: item.price,
          quantity: item.quantity,
        })),
      });

      setReceiptId((prev) => prev + 1);

      console.log("✅ Sale recorded:", response.data);
      toast.success("Order completed!");
      clearCart();

      // Optional: clearCart(); // if re-enabled
    } catch (err) {
      console.error("❌ Checkout error:", err);
      toast.error("Failed to complete checkout.");
    }
  };

  return (
    <section className="md:bg-white md:w-[245px] md:h-screen ">
      <article className="md:flex md:justify-between md:mr-2 md:ml-2 md:mb-3">
        <h1 className="md:text-[16px] md:font-bold">Current Order</h1>
        <div className="md:flex md:justify-center md:items-center">
          <div className="md:w-5">
            <img src={receiptIcon} alt="recepitIcon" />
          </div>

          <p className="md:pl-2 md:text-[14px]">
            #{receiptId ? String(receiptId).padStart(4, "0") : "0000"}
          </p>
        </div>
      </article>

      <div className="md:h-[550px] overflow-x-hidden oveflow-y-scroll">
        {cart.map((data) => {
          return (
            <OrderCard
              key={data.id}
              productname={data.name}
              productprice={data.price}
              productqty={data.quantity}
              onIncrease={() => increaseQuantity(data.id)}
              onDecrease={() => decreaseQuantity(data.id)}
              onRemove={() => removeFromCart(data.id)}
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
        <div
          onClick={handleCheckout}
          className="md:w-[230px] md:bg-[#FA9564] md:text-center md:pt-4 md:pb-4 md:text-white md:rounded-lg cursor-pointer md:mt-10"
        >
          <button>Checkout</button>
        </div>
      </article>
    </section>
  );
}

export default Cart;

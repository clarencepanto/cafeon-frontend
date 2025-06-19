import shoppingcartIcon from "../assets/icons/shopping-cart-one.png";

function ProductCard() {
  return (
    <section className="md:w-[280px] md:h-[367px] md:bg-white md:p-2 md:rounded-md">
      <article className="flex justify-center">
        <img
          src="https://images.pexels.com/photos/1059040/pexels-photo-1059040.jpeg?_gl=1*1rbbgzk*_ga*NTYwNDI2MDMyLjE3NDc1MTYwOTA.*_ga_8JE65Q40S6*czE3NTAyNTkzOTUkbzckZzEkdDE3NTAyNTk0MDUkajUwJGwwJGgw"
          alt="sandwich"
          className="md:w-[247px] md:h-[180px] md:rounded-lg"
        />
      </article>
      <article className="md:mt-[5px]">
        <div className="md:flex md:justify-between md:pl-2 md:pr-4 md:pt-2.5 ">
          <h1 className="md:font-bold md:text-[20px] md:tracking-wide">
            Grill Sandwich
          </h1>
          <h3 className="md:font-bold md:text-[20px] md:text-[#FA9564]">$30</h3>
        </div>
        <p className="md:text-[16px] md:pl-2 md:pr-2 md:pt-2.5 md:text-gray-400">
          Beetroot, Potato, Bell Pepper, Sandwich Masala
        </p>
        <div className="md:flex md:justify-between md:pl-2 md:pr-2.5 md:pt-3">
          <div className="md:flex md:justify-center md:items-center">
            <h3 className="md:font-bold">Avail: 20</h3>
          </div>
          <div className="md:w-[51px] md:h-[45px] md:flex md:justify-center md:items-center md:bg-[#FA9564] md:rounded-lg">
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

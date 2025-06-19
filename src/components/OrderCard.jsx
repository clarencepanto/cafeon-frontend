import deleteIcon from "../assets/icons/delete-one.png";

function OrderCard() {
  return (
    <section className="md:bg-white md:w-[310px] md:h-[150px] md:p-3 md:border-1 md:border-gray-300">
      <article className="md:flex md:justify-between">
        <div>
          <h2 className="md:text-[17px] md:max-w-[165px] md:font-bold">
            Grilled Sandwich
          </h2>
          <p className="md:text-[14px]">$8.75</p>
        </div>
        <div className="md:flex md:mt-1">
          <div className="md:flex md:pr-3">
            <div className="md:w-[15px] md:h-[15px] md:flex md:justify-center md:items-center md:border-1 md:border-gray-400 md:mt-1 cursor-pointer">
              <button className="md:cursor-pointer">-</button>
            </div>
            <p className="md:w-[25px] md:h-[25px] md:flex md:justify-center ">
              5
            </p>
            <div className="md:w-[15px] md:h-[15px] md:flex md:justify-center md:items-center md:border-1 md:border-gray-400 md:mt-1 cursor-pointer">
              <button className="md:cursor-pointer">+</button>
            </div>
          </div>
          <div className=" md:mr-1 md:w-[35px] md:h-[28px]  md:flex md:justify-center md:items-center rounded-md cursor-pointer md:hover:bg-[#FA9564]">
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>
      </article>
      <article className="md:mt-6 md:border-1 md:border-gray-400 md:rounded-md">
        <input
          type="text"
          placeholder="insert note here..."
          className="md:w-full md:pl-2 md:rounded-md  md:focus:outline-[#FA9564]"
        />
      </article>
    </section>
  );
}

export default OrderCard;

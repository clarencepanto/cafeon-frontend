import deleteIcon from "../assets/icons/delete-one.png";

function OrderCard({
  productname,
  productprice,
  productqty,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <section className="md:bg-white md:w-[260px] md:h-[145px] md:p-3 md:border-1 md:border-gray-300">
      <article className="md:flex md:justify-between">
        <div>
          <h2 className="md:text-[17px] md:max-w-[165px] md:font-bold">
            {productname}
          </h2>
          <p className="md:text-[14px]">${productprice}</p>
        </div>
        <div className="md:flex md:mt-1">
          <div className="md:flex md:pr-3">
            <div className="md:w-[15px] md:h-[15px] md:flex md:justify-center md:items-center md:border-1 md:border-gray-400 md:mt-1 cursor-pointer">
              <button className="md:cursor-pointer" onClick={onDecrease}>
                -
              </button>
            </div>
            <p className="md:w-[25px] md:h-[25px] md:flex md:justify-center ">
              {productqty}
            </p>
            <div className="md:w-[15px] md:h-[15px] md:flex md:justify-center md:items-center md:border-1 md:border-gray-400 md:mt-1 cursor-pointer">
              <button className="md:cursor-pointer" onClick={onIncrease}>
                +
              </button>
            </div>
          </div>
          <div className=" md:mr-1 md:w-[35px] md:h-[28px]  md:flex md:justify-center md:items-center rounded-md cursor-pointer md:hover:bg-[#FA9564]">
            <img src={deleteIcon} alt="deleteIcon" onClick={onRemove} />
          </div>
        </div>
      </article>
      <article className="md:mt-6 md:border-1 md:border-gray-400 md:rounded-md md:w-[220px]">
        <input
          type="text"
          placeholder="insert note here..."
          className="md:w-[220px] md:pl-2 md:rounded-md  md:focus:outline-[#FA9564]"
        />
      </article>
    </section>
  );
}

export default OrderCard;

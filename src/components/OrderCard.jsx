import deleteIcon from "../assets/icons/delete-one.png";

function OrderCard({
  productname,
  productprice,
  productqty,
  onIncrease,
  onDecrease,
  onRemove,
  customerName,
}) {
  return (
    <section className="md:bg-white md:w-[260px] md:h-[145px] md:p-3 md:border-1 md:border-gray-300 lg:w-[302px] lg:h-[160px] xl:w-[320px] xl:h-[175px] lg:p-4 xl:p-5">
      <article className="md:flex md:justify-between">
        <div>
          <h2 className="md:text-[17px] md:max-w-[165px] md:font-bold lg:text-[18px] xl:text-[20px]">
            {customerName || productname}
          </h2>
          <p className="md:text-[14px] lg:text-[15px] xl:text-[16px]">
            ${productprice}
          </p>
        </div>
        <div className="md:flex md:mt-1">
          <div className="md:flex md:pr-3">
            <div className="md:w-[15px] md:h-[15px] md:flex md:justify-center md:items-center md:border-1 md:border-gray-400 md:mt-1 cursor-pointer lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]">
              <button className="md:cursor-pointer" onClick={onDecrease}>
                -
              </button>
            </div>
            <p className="md:w-[25px] md:h-[25px] md:flex md:justify-center md:items-center lg:text-[15px] xl:text-[16px]">
              {productqty}
            </p>
            <div className="md:w-[15px] md:h-[15px] md:flex md:justify-center md:items-center md:border-1 md:border-gray-400 md:mt-1 cursor-pointer lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]">
              <button className="md:cursor-pointer" onClick={onIncrease}>
                +
              </button>
            </div>
          </div>
          <div className="md:mr-1 md:w-[35px] md:h-[28px] md:flex md:justify-center md:items-center rounded-md cursor-pointer md:hover:bg-[#FA9564] lg:w-[38px] lg:h-[30px] xl:w-[40px] xl:h-[32px]">
            <img src={deleteIcon} alt="deleteIcon" onClick={onRemove} />
          </div>
        </div>
      </article>

      <article className="md:mt-6 md:border-1 md:border-gray-400 md:rounded-md md:w-[220px] lg:w-[240px] xl:w-[260px]">
        <input
          type="text"
          placeholder="insert note here..."
          className="md:w-[220px] md:pl-2 md:rounded-md md:focus:outline-[#FA9564] lg:w-[240px] xl:w-[260px] lg:pl-3 xl:pl-4"
        />
      </article>
    </section>
  );
}

export default OrderCard;

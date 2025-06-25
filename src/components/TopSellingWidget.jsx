import { v4 as uuidv4 } from "uuid";

function TopSellingWidget({ topProductsData }) {
  return (
    <section
      className="w-[220px] h-[610px] rounded-3xl bg-white p-3 shadow-md
          lg:w-[300px] lg:h-[610px] xl:w-[300px] xl:h-[680px]
         lg:p-5 xl:p-6"
    >
      <h1 className="font-bold text-center text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] pb-2">
        Top Selling Products
      </h1>

      <article className="flex justify-between">
        <h2 className="text-gray-400 text-[15px] md:text-[16px]">
          Product Name
        </h2>
        <h2 className="text-gray-400 text-[15px] md:text-[16px]">Qty Sold</h2>
      </article>

      <article className="flex justify-between">
        <div>
          {topProductsData &&
            topProductsData.map((data) => (
              <h3
                key={uuidv4()}
                className="text-[14px] md:text-[15px] lg:text-[16px] mt-2 mb-2"
              >
                {data.name}
              </h3>
            ))}
        </div>
        <div>
          {topProductsData &&
            topProductsData.map((data) => (
              <p
                key={uuidv4()}
                className="text-[14px] md:text-[15px] lg:text-[16px] mt-2 mb-2"
              >
                {data.total_sold}
              </p>
            ))}
        </div>
      </article>
    </section>
  );
}

export default TopSellingWidget;

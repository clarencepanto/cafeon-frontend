import { v4 as uuidv4 } from "uuid";

function TopSellingWidget({ topProductsData }) {
  return (
    <section className="w-[220px] shadow-md  h-[610px] rounded-3xl bg-white p-3">
      <h1 className="font-bold text-center text-[17px] pb-2">
        Top Selling Products
      </h1>
      <article className="flex justify-between">
        <h2 className="text-gray-400 text-[15px]">Product Name</h2>
        <h2 className="text-gray-400 text-[15px]">Qty Sold </h2>
      </article>
      <article className="flex justify-between">
        <div>
          {topProductsData &&
            topProductsData.map((data) => {
              return (
                <h3 key={uuidv4()} className="text-[14px] mt-2 mb-2">
                  {data.name}
                </h3>
              );
            })}
        </div>
        <div>
          {topProductsData &&
            topProductsData.map((data) => {
              return (
                <p key={uuidv4()} className="text-[14px] mt-2 mb-2">
                  {data.total_sold}
                </p>
              );
            })}
        </div>
      </article>
    </section>
  );
}

export default TopSellingWidget;

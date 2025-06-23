import DashboardWidgets from "../components/DashboardWidgets";
import SalesPerformanceChart from "../pages/revenueinsights/SalesPerformanceChart";
import TopSellingWidget from "../components/TopSellingWidget";
import RevenueWidgetDropDown from "../components/RevenueWidgetDropDown";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [atvData, setAtvData] = useState("");
  const [bestProductData, setBestProductData] = useState("");

  const [topProductsData, setTopProductsData] = useState([]);
  const [lineGraphData, setLineGraphData] = useState("");

  // -----------------------------------------------------------

  const [atvInsightData, setAtvInsightData] = useState("");

  const [bestProductInsightData, setBestProductInsightData] = useState("");

  // 💡 Format the raw data into Mon–Fri structure
  const formatWeeklySales = (data) => {
    const daysFull = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Create a map of full day → short
    const dayMap = Object.fromEntries(
      daysFull.map((d, i) => [d, daysShort[i]])
    );

    const salesMap = Object.fromEntries(
      data.map((item) => [dayMap[item.day], item.total_sales])
    );

    return daysShort.map((shortDay) => ({
      day: shortDay,
      sales: salesMap[shortDay] || 0,
    }));
  };

  const fetchData = async () => {
    const atvResponseData = await axios.get(
      "http://localhost:4000/dashboard/average"
    );

    const bestProductResponseData = await axios.get(
      "http://localhost:4000/dashboard/best-product"
    );

    const topProductsResponseData = await axios.get(
      "http://localhost:4000/dashboard/top-products"
    );

    const lineGraphResponseData = await axios.get(
      "http://localhost:4000/dashboard/sales-week"
    );

    setAtvData(atvResponseData.data);
    setBestProductData(bestProductResponseData.data);

    setTopProductsData(topProductsResponseData.data);

    const formatted = formatWeeklySales(lineGraphResponseData.data);
    setLineGraphData(formatted);
  };

  const fetchInsightData = async () => {
    const atvInsightResponseData = await axios.get(
      "http://localhost:4000/insights/atv-change"
    );

    const bestProductInsightResponseData = await axios.get(
      "http://localhost:4000/insights/best-product"
    );

    setAtvInsightData(atvInsightResponseData.data);
    setBestProductInsightData(bestProductInsightResponseData.data);
  };

  useEffect(() => {
    fetchData();
    fetchInsightData();
  }, []);

  return (
    <section className="p-2 w-screen">
      <article className="flex justify-evenly">
        <DashboardWidgets
          widgetTitle="Today's Average Transaction Value"
          value={`$${atvData.average_transaction}`}
          insightData={`${atvInsightData.insight}`}
        />
        <DashboardWidgets
          widgetTitle="Today's Best Product"
          value={bestProductData.name}
          insightData={bestProductInsightData.message}
        />
        <RevenueWidgetDropDown />
      </article>
      <article className="pl-2 pr-2 pt-4 h-[500px] flex justify-between">
        <SalesPerformanceChart lineGraphData={lineGraphData} />
        <TopSellingWidget topProductsData={topProductsData} />
      </article>
    </section>
  );
}

export default Dashboard;

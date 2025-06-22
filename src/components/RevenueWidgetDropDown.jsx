import { useEffect, useState } from "react";
import axios from "axios";

function RevenueWidgetDropDown() {
  const [revenueData, setRevenueData] = useState(0);
  const [range, setRange] = useState("day");
  const [insightRevenueData, setInsightRevenueData] = useState("");
  const [open, setOpen] = useState(false);

  const fetchInsight = async () => {
    const res = await axios.get(
      `http://localhost:4000/insights/revenue-change?range=${range}`
    );

    setInsightRevenueData(res.data);
  };

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/dashboard/revenue?range=${range}`
        );
        setRevenueData(res.data);
      } catch (err) {
        console.error("Error fetching revenue:", err);
      }
    };
    fetchInsight();
    fetchRevenue();
  }, [range]);
  return (
    <div className="w-[215px] h-[210px] max-h-[210px] rounded-3xl bg-white p-3 shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[18px] pb-3">Revenue Count</h2>
      </div>
      <p className="text-[22px]">${revenueData.total_revenue}</p>
      <div className="pt-2">
        <p className="text-[13px]">{insightRevenueData.insight}</p>
      </div>
      <article className="flex justify-end mt-5 relative z-10">
        <div className="relative w-full">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="border px-2 py-1 w-full text-sm rounded bg-white text-left"
          >
            {range === "day"
              ? "Today"
              : range === "week"
              ? "This Week"
              : range === "month"
              ? "This Month"
              : "This Year"}
          </button>

          {open && (
            <div className="absolute right-0 mt-1 w-full bg-white border rounded shadow-md z-50">
              {[
                { value: "day", label: "Today" },
                { value: "week", label: "This Week" },
                { value: "month", label: "This Month" },
                { value: "year", label: "This Year" },
              ].map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setRange(option.value);
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default RevenueWidgetDropDown;

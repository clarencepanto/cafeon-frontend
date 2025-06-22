function DashboardWidgets({ widgetTitle, value, insightData }) {
  return (
    <section className="w-[215px] h-[210px] max-h-[210px]  rounded-3xl bg-white p-3 shadow-md">
      <h3 className="font-bold text-[18px] pb-3">{widgetTitle}</h3>
      <p className="text-[22px] ">{value}</p>
      <div className="pt-2">
        <p className="text-[13px]">{insightData}</p>
      </div>
    </section>
  );
}

export default DashboardWidgets;

function DashboardWidgets({ widgetTitle, value, insightData }) {
  return (
    <section
      className="w-[215px] h-[210px] max-h-[210px] rounded-3xl bg-white p-3 shadow-md
      lg:w-[260px] lg:h-[230px] xl:w-[280px] xl:h-[240px] 
       lg:p-5 xl:p-6"
    >
      <h3 className="font-bold text-[18px]  lg:text-[20px] xl:text-[22px] pb-3">
        {widgetTitle}
      </h3>
      <p className="text-[22px] lg:text-[26px] xl:text-[28px]">{value}</p>
      <div className="pt-2">
        <p className="text-[13px]  lg:text-[15px] xl:text-[16px]">
          {insightData}
        </p>
      </div>
    </section>
  );
}

export default DashboardWidgets;

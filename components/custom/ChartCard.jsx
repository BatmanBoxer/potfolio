function ChartCard({name,Png}) {
  return (
    <div className="flex items-center p-2 bg-[#121212] rounded-lg shadow-sm gap-2 max-w-fit max-h-10">
      <Png/>
      <div className="flex flex-col text-white">
        <span className="text-sm font-semibold">{name}</span>
      </div>
    </div>
  );
}

export default ChartCard;

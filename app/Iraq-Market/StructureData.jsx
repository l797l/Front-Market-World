export const PriceHeader = ({ priceNow, priceOld, namePrice, type }) => {
  const isUp = priceNow > priceOld;
  const isDown = priceNow < priceOld;
  
  let statusColor = "text-white"; 
  if (isUp) statusColor = "text-[#00C805]";
  if (isDown) statusColor = "text-[#FF3B30]";

  return (
    <div className="flex flex-col items-start justify-center gap-1 mr-12 group transition-all duration-300">
      <span className="text-[12px] font-medium text-[#888888] uppercase tracking-wider">
        {namePrice}
      </span>

      <div className={`flex items-center gap-1 leading-none ${statusColor}`}>
        <span className="text-[24px] font-bold tracking-tighter">
          {priceNow.toLocaleString()}
        </span>
        
        <span className="text-[14px]">
          {isUp && "▲"}
          {isDown && "▼"}
        </span>
      </div>

      <span className="text-[11px] font-semibold px-1.5 py-0.5 bg-[#1A1A1A] text-[#A0A0A0] rounded uppercase">
        {type}
      </span>
    </div>
  );
};
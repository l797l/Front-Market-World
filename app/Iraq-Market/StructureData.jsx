/* eslint-disable @next/next/no-img-element */
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

export const CardPriceSellAndBuy = ({
  priceBuyNow,
  priceBuyOld,
  priceSellNow,
  priceSellOld,
  name,
  img,
}) => {
  const getStatus = (now, old) => {
    if (now > old) return { color: "text-[#00C805]", icon: "▲" };
    if (now < old) return { color: "text-[#FF3B30]", icon: "▼" };
    return { color: "text-white", icon: "—" };
  };

  const buyStatus = getStatus(priceBuyNow, priceBuyOld);
  const sellStatus = getStatus(priceSellNow, priceSellOld);

  return (
    <div className="flex flex-row w-full justify-between items-center bg-[#111111] p-3 rounded-lg border border-[#1A1A1A] hover:bg-[#161616] transition-colors mb-2 cursor-pointer">
      <div className="flex items-center gap-3 flex-1">
        <img src={img} alt={name} className="w-6 h-6 object-contain" />
        <p className="text-[15px] font-bold text-white tracking-tight">
          {name}
        </p>
      </div>

      <div className="flex flex-col items-center flex-1">
        <span className="text-[10px] text-[#666666] uppercase">BUY</span>
        <p className={`text-[16px] font-mono font-semibold ${buyStatus.color}`}>
          {priceBuyNow.toLocaleString()}
          <span className="text-[10px] ml-1">{buyStatus.icon}</span>
        </p>
      </div>

      <div className="flex flex-col items-center flex-1">
        <span className="text-[10px] text-[#666666] uppercase">SELL</span>
        <p
          className={`text-[16px] font-mono font-semibold ${sellStatus.color}`}
        >
          {priceSellNow.toLocaleString()}
          <span className="text-[10px] ml-1">{sellStatus.icon}</span>
        </p>
      </div>
    </div>
  );
};

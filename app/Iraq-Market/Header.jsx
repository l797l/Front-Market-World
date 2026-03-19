"use client";
import { useEffect, useState } from "react";
import { dataDinar, dataGold , dataSilver} from "./data-api";
import { PriceHeader } from "./StructureData";

export default function Header() {
  const [priceDinar, setpriceDinar] = useState(null);
  const [priceGold21, setpriceGold21] = useState(null);
  const [priceGold18, setpriceGold18] = useState(null);
  const [priceGold24, setpriceGold24] = useState(null);
  const [priceSilver, setpriceSilver] = useState(null);


  useEffect(() => {
    const giveData = async () => {
      const priceDinarr = await dataDinar();
      const priceGold = await dataGold();
      const priceGold21 = priceGold.price.filter((item) => item.karat == 21);
      const priceGold18 = priceGold.price.filter((item) => item.karat == 18);
      const priceGold24 = priceGold.price.filter((item) => item.karat == 24);
      const priceSilverr = await dataSilver();

      setpriceDinar(priceDinarr);
      setpriceGold21(priceGold21);
      setpriceGold18(priceGold18);
      setpriceGold24(priceGold24);
      setpriceSilver(priceSilverr);
    };
    giveData();
  }, []);
  if (!priceDinar && !priceGold18 && !priceGold21 && !priceGold24 && !priceSilver) {
    return <div>Loading...</div>;
  }
  return (
    <div>
        <div className=" h-10 w-full bg-[#0F0F0F] p-4 flex flex-row justify-start items-center pl-25 pr-25 fixed top-0 left-0 z-50">
            <h1>NAHRAIN MARKET</h1>
        
        </div>
      <div className="mt-10 h-20 w-full bg-[#0F0F0F] p-4  flex-row justify-start items-center pl-25 pr-25 hidden sm:flex">
        <PriceHeader
          priceNow={priceDinar.price[0].buyPrice}
          priceOld={priceDinar.price[1].buyPrice}
          namePrice={"USD/IQD"}
          type={"Market"}
        />
        
        <PriceHeader className="hidden lg:block"
          priceNow={priceGold18[0].buyPricePerGram}
          priceOld={priceGold18[1].buyPricePerGram}
          namePrice={"Gold Karat 18"}
          type={"Stock"}
        />

        <PriceHeader
          priceNow={priceGold21[0].buyPricePerGram}
          priceOld={priceGold21[1].buyPricePerGram}
          namePrice={"Gold Karat 21"}
          type={"Stock"}
        />

        <PriceHeader
          priceNow={priceGold24[0].buyPricePerGram}
          priceOld={priceGold24[1].buyPricePerGram}
          namePrice={"Gold Karat 24"}
          type={"Stock"}
        />
      
           <PriceHeader
          priceNow={priceSilver.price[0].buyPriceGram}
          priceOld={priceSilver.price[1].buyPriceGram}
          namePrice={"Silver"}
          type={"Stock"}
        />
      </div>
    </div>
  );
}

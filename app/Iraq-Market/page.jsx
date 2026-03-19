"use client";
import { useEffect, useState } from "react";
import { dataDinar, dataGold, dataSilver, dataForex } from "./data-api";
import { CardPriceSellAndBuy, TitleMenuePrice } from "./StructureData";

export default function IraqMarket() {
  const [priceDinar, setpriceDinar] = useState(null);
  const [priceGold21, setpriceGold21] = useState(null);
  const [priceGold18, setpriceGold18] = useState(null);
  const [priceGold24, setpriceGold24] = useState(null);
  const [priceSilver, setpriceSilver] = useState(null);
  const [priceEur, setpriceEur] = useState(null);

  useEffect(() => {
    const giveData = async () => {
      const priceDinarr = await dataDinar();
      const priceGold = await dataGold();
      const priceGold21 = priceGold.price.filter((item) => item.karat == 21);
      const priceGold18 = priceGold.price.filter((item) => item.karat == 18);
      const priceGold24 = priceGold.price.filter((item) => item.karat == 24);
      const priceSilverr = await dataSilver() ;
      
      const priceForex = await dataForex();

      setpriceDinar(priceDinarr);
      setpriceGold21(priceGold21);
      setpriceGold18(priceGold18);
      setpriceGold24(priceGold24);
      setpriceSilver(priceSilverr);
      setpriceEur(Number(priceForex.data.amount).toFixed(4));
    };
    
    giveData();
   
  }, []);

  if (!priceDinar) {
    return <p>Lodaing.........</p>;
  }
  return (
    <div className=" pl-5 pr-5 lg:pl-25 lg:pr-25 mt-10  flex lg:flex-row flex-col gap-5">
      <div className="flex flex-col lg:w-[45%] gap-5 justify-center items-center">
        <div className="w-full  max-w-200 ">
          <TitleMenuePrice
            img={"/img-flag/IQ-Flag.svg"}
            title={"Gold prices at Stock in Dinar"}
          />
          <div className="bg-[#0F0F0F]">
            <CardPriceSellAndBuy
              priceBuyNow={priceGold18[0].buyPricePerGram}
              priceBuyOld={priceGold18[1].buyPricePerGram}
              priceSellNow={priceGold18[0].sellPricePerGram}
              priceSellOld={priceGold18[1].buyPricePerGram}
              name={"18 Krart"}
              img={"/img-flag/18k-Icon.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={priceGold21[0].buyPricePerGram}
              priceBuyOld={priceGold21[1].buyPricePerGram}
              priceSellNow={priceGold21[0].sellPricePerGram}
              priceSellOld={priceGold21[1].buyPricePerGram}
              name={"21 Krart"}
              img={"/img-flag/21k-Icon.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={priceGold24[0].buyPricePerGram}
              priceBuyOld={priceGold24[1].buyPricePerGram}
              priceSellNow={priceGold24[0].sellPricePerGram}
              priceSellOld={priceGold24[1].buyPricePerGram}
              name={"24 Krart"}
              img={"/img-flag/24k-Icon.svg"}
            />
            
             <CardPriceSellAndBuy
              priceBuyNow={Number((priceGold24[0].buyPricePerGram*4.25).toFixed(0))}
              priceBuyOld={(priceGold24[1].buyPricePerGram*4.25).toFixed(0)}
              priceSellNow={Number((priceGold24[0].sellPricePerGram*4.25).toFixed(0))}
              priceSellOld={(priceGold24[1].sellPricePerGram*4.25).toFixed(0)}
              name={"Mithqal"}
              img={"/img-flag/Gold-Ounca.svg"}
            />
             <CardPriceSellAndBuy
              priceBuyNow={Number((priceGold24[0].buyPricePerGram*31.1).toFixed(0))}
              priceBuyOld={(priceGold24[1].buyPricePerGram*31.1).toFixed(0)}
              priceSellNow={Number((priceGold24[0].sellPricePerGram*31.1).toFixed(0))}
              priceSellOld={(priceGold24[1].sellPricePerGram*31.1).toFixed(0)}
              name={"Ounca"}
              img={"/img-flag/Gold-Ounca.svg"}
            />
             <CardPriceSellAndBuy
              priceBuyNow={Number((priceGold24[0].buyPricePerGram*1000).toFixed(0))}
              priceBuyOld={(priceGold24[1].buyPricePerGram*1000).toFixed(0)}
              priceSellNow={Number((priceGold24[0].sellPricePerGram*1000).toFixed(0))}
              priceSellOld={(priceGold24[1].sellPricePerGram*1000).toFixed(0)}
              name={"Kilogram"}
              img={"/img-flag/Gold-Kg.svg"}
            />
          </div>
        </div>
        <div className="w-full max-w-200 ">
          <TitleMenuePrice
            img={"/img-flag/IQ-Flag.svg"}
            title={"Silver prices at Stock in Dinar"}
          />

          <div className="bg-[#0F0F0F]">
            <CardPriceSellAndBuy
          
              priceBuyNow={Number(priceSilver.price[0].buyPriceGram.toFixed(0))}
              priceBuyOld={Number(priceSilver.price[1].buyPriceGram.toFixed(0))}
              priceSellNow={Number(priceSilver.price[0].sellPriceGram.toFixed(0))}
              priceSellOld={Number(priceSilver.price[1].sellPriceGram.toFixed(0))}
              name={"999 karat"}
              img={"/img-flag/999k-Icon.svg"}
            />
             <CardPriceSellAndBuy
              priceBuyNow={Number((priceSilver.price[0].buyPriceGram*4.25).toFixed(0))}
              priceBuyOld={(priceSilver.price[1].buyPriceGram*4.25).toFixed(0)}
              priceSellNow={Number((priceSilver.price[0].sellPriceGram*4.25).toFixed(0))}
              priceSellOld={(priceSilver.price[1].sellPriceGram*4.25).toFixed(0)}
              name={"Mithqal"}
              img={"/img-flag/999k-Icon.svg"}
            />
             <CardPriceSellAndBuy
              priceBuyNow={Number((priceSilver.price[0].buyPriceGram*31.1).toFixed(0))}
              priceBuyOld={(priceSilver.price[1].buyPriceGram*31.1).toFixed(0)}
              priceSellNow={Number((priceSilver.price[0].sellPriceGram*31.1).toFixed(0))}
              priceSellOld={(priceSilver.price[1].sellPriceGram*31.1).toFixed(0)}
              name={"Ounca"}
              img={"/img-flag/Silver-Ounca.svg"}
            />
             <CardPriceSellAndBuy
              priceBuyNow={Number((priceSilver.price[0].buyPriceGram*1000).toFixed(0))}
              priceBuyOld={(priceSilver.price[1].buyPriceGram*1000).toFixed(0)}
              priceSellNow={Number((priceSilver.price[0].sellPriceGram*1000).toFixed(0))}
              priceSellOld={(priceSilver.price[1].sellPriceGram*1000).toFixed(0)}
              name={"Kilogram"}
              img={"/img-flag/Silver-Kg.svg"}
            />
          </div>
          
        </div>
      </div>

      <div className="flex lg:w-[45%] justify-center items-center">
        <div className="w-full max-w-200 ">
          <TitleMenuePrice
            img={"/img-flag/IQ-Flag.svg"}
            title={"Dinar exchange rate at Balck Market"}
          />

          <div className="bg-[#0F0F0F]">
            <CardPriceSellAndBuy
              priceBuyNow={priceDinar.price[0].buyPrice}
              priceBuyOld={priceDinar.price[1].buyPrice}
              priceSellNow={priceDinar.price[0].sellPrice}
              priceSellOld={priceDinar.price[1].sellPrice}
              name={"USD/IQD"}
              img={"/img-flag/US-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(
                (priceEur - 1) * priceDinar.price[0].buyPrice +
                priceDinar.price[0].buyPrice
              ).toFixed(2)}
              priceBuyOld={(
                (priceEur - 1) * priceDinar.price[1].buyPrice +
                priceDinar.price[1].buyPrice
              ).toFixed(2)}
              priceSellNow={(
                (priceEur - 1) * priceDinar.price[0].sellPrice +
                priceDinar.price[0].sellPrice
              ).toFixed(2)}
              priceSellOld={(
                (priceEur - 1) * priceDinar.price[1].sellPrice +
                priceDinar.price[1].sellPrice
              ).toFixed(2)}
              name={"EUR/IQD"}
              img={"/img-flag/EUR-Flag.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { dataDinar, dataGold, dataSilver } from "./data-api";
import { CardPriceSellAndBuy } from "./StructureData";

export default function IraqMarket() {
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

  const socket = new WebSocket('wss://ws.twelvedata.com/v1/quotes/price?apikey=94e55ae5e5934d25b04b1499d60db4ab');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.symbol === "EUR/USD") {
    console.log("السعر اللحظي:", data.price);
  }
};

  if (!priceDinar) {
    return <p>Lodaing.........</p>;
  }
  return (
    <div className="w-120 bg-[#0F0F0F]">
      <CardPriceSellAndBuy
        priceBuyNow={priceDinar.price[0].buyPrice}
        priceBuyOld={priceDinar.price[1].buyPrice}
        priceSellNow={priceDinar.price[0].sellPrice}
        priceSellOld={priceDinar.price[1].sellPrice}
        name={"USD/IQD"}
        img={"/img-flag/US-Flag.svg"}
      />
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
        priceBuyNow={priceSilver.price[0].buyPriceGram}
        priceBuyOld={priceSilver.price[1].buyPriceGram}
        priceSellNow={priceSilver.price[0].sellPriceGram}
        priceSellOld={priceSilver.price[1].sellPriceGram}
        name={"999 karat"}
        img={"/img-flag/999k-Icon.svg"}
      />
    </div>
  );
}

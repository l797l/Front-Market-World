"use client";
import { useEffect,useState } from 'react';
import { dataDinar } from './data-api';
 

export default function IraqMarket() {
const [priceDinar, setpriceDinar] = useState(null);
  const [priceGold21, setpriceGold21] = useState(null);
  const [priceGold18, setpriceGold18] = useState(null);
  const [priceGold24, setpriceGold24] = useState(null);

  useEffect(() => {
    const giveData = async () => {
      const priceDinar = await dataDinar();
      const priceGold = await dataGold();
      const priceGold21 = priceGold.price.filter((item) => item.karat == 21);
      const priceGold18 = priceGold.price.filter((item) => item.karat == 18);
      const priceGold24 = priceGold.price.filter((item) => item.karat == 24);

      setpriceDinar(priceDinar);
      setpriceGold21(priceGold21);
      setpriceGold18(priceGold18);
      setpriceGold24(priceGold24);
    };
    giveData();
  }, []);


  return (
    <div>

      
    </div>
  );

}
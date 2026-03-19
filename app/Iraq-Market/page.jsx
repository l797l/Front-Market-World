"use client";
import { useEffect, useState } from "react";
import {
  dataDinar,
  dataGold,
  dataSilver,
  dataEur,
  dataIrr,
  dataAed,
  dataTRY,
} from "./data-api";
import { CardPriceSellAndBuy, TitleMenuePrice } from "./StructureData";

export default function IraqMarket() {
  const [priceDinar, setpriceDinar] = useState(null);
  const priceDinarBankBuy = 1320;
  const priceDinarBankSell = 1300;
  const [priceGold21, setpriceGold21] = useState(null);
  const [priceGold18, setpriceGold18] = useState(null);
  const [priceGold24, setpriceGold24] = useState(null);
  const [priceSilver, setpriceSilver] = useState(null);
  const [priceEur, setpriceEur] = useState(null);
  const [priceIrr, setpriceIrr] = useState(null);
  const [priceIrt, setpriceIrt] = useState(null);
  const [priceAed, setpriceAed] = useState(null);
  const [priceTRY, setpriceTRY] = useState(null);

  useEffect(() => {
    const giveData = async () => {
      const priceDinarr = await dataDinar();
      const priceGold = await dataGold();
      const priceGold21 = priceGold.price.filter((item) => item.karat == 21);
      const priceGold18 = priceGold.price.filter((item) => item.karat == 18);
      const priceGold24 = priceGold.price.filter((item) => item.karat == 24);
      const priceSilverr = await dataSilver();
      const priceEurr = await dataEur();
      const priceIrrr = await dataIrr();
      const priceAedd = await dataAed();
      const DTRY = await dataTRY();

      setpriceDinar(priceDinarr);
      setpriceGold21(priceGold21);
      setpriceGold18(priceGold18);
      setpriceGold24(priceGold24);
      setpriceSilver(priceSilverr);
      setpriceEur(Number(priceEurr.data.amount).toFixed(4));
      setpriceIrr(priceIrrr.data.amount * 1000000);
      setpriceIrt(priceIrrr.data.amount * 10 * 1000000);
      setpriceAed(priceAedd.data.amount);
      setpriceTRY(DTRY.data.amount);
    };

    giveData();
  }, []);

  if (!priceDinar) {
    console.log(priceAed);

    return <p>Lodaing.........</p>;
  }
  return (
    <div className=" pl-5 pr-5 lg:pl-25 lg:pr-25 mt-10  flex lg:flex-row flex-col gap-20 ">
      <div className="flex flex-col lg:w-[45%] gap-5 order-2 lg:order-1">
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
              priceBuyNow={Number(
                (priceGold24[0].buyPricePerGram * 4.25).toFixed(0),
              )}
              priceBuyOld={(priceGold24[1].buyPricePerGram * 4.25).toFixed(0)}
              priceSellNow={Number(
                (priceGold24[0].sellPricePerGram * 4.25).toFixed(0),
              )}
              priceSellOld={(priceGold24[1].sellPricePerGram * 4.25).toFixed(0)}
              name={"Mithqal"}
              img={"/img-flag/Gold-Ounca.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={Number(
                (priceGold24[0].buyPricePerGram * 31.1).toFixed(0),
              )}
              priceBuyOld={(priceGold24[1].buyPricePerGram * 31.1).toFixed(0)}
              priceSellNow={Number(
                (priceGold24[0].sellPricePerGram * 31.1).toFixed(0),
              )}
              priceSellOld={(priceGold24[1].sellPricePerGram * 31.1).toFixed(0)}
              name={"Ounca"}
              img={"/img-flag/Gold-Ounca.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={Number(
                (priceGold24[0].buyPricePerGram * 1000).toFixed(0),
              )}
              priceBuyOld={(priceGold24[1].buyPricePerGram * 1000).toFixed(0)}
              priceSellNow={Number(
                (priceGold24[0].sellPricePerGram * 1000).toFixed(0),
              )}
              priceSellOld={(priceGold24[1].sellPricePerGram * 1000).toFixed(0)}
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
              priceSellNow={Number(
                priceSilver.price[0].sellPriceGram.toFixed(0),
              )}
              priceSellOld={Number(
                priceSilver.price[1].sellPriceGram.toFixed(0),
              )}
              name={"999 karat"}
              img={"/img-flag/999k-Icon.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={Number(
                (priceSilver.price[0].buyPriceGram * 4.25).toFixed(0),
              )}
              priceBuyOld={(priceSilver.price[1].buyPriceGram * 4.25).toFixed(
                0,
              )}
              priceSellNow={Number(
                (priceSilver.price[0].sellPriceGram * 4.25).toFixed(0),
              )}
              priceSellOld={(priceSilver.price[1].sellPriceGram * 4.25).toFixed(
                0,
              )}
              name={"Mithqal"}
              img={"/img-flag/999k-Icon.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={Number(
                (priceSilver.price[0].buyPriceGram * 31.1).toFixed(0),
              )}
              priceBuyOld={(priceSilver.price[1].buyPriceGram * 31.1).toFixed(
                0,
              )}
              priceSellNow={Number(
                (priceSilver.price[0].sellPriceGram * 31.1).toFixed(0),
              )}
              priceSellOld={(priceSilver.price[1].sellPriceGram * 31.1).toFixed(
                0,
              )}
              name={"Ounca"}
              img={"/img-flag/Silver-Ounca.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={Number(
                (priceSilver.price[0].buyPriceGram * 1000).toFixed(0),
              )}
              priceBuyOld={(priceSilver.price[1].buyPriceGram * 1000).toFixed(
                0,
              )}
              priceSellNow={Number(
                (priceSilver.price[0].sellPriceGram * 1000).toFixed(0),
              )}
              priceSellOld={(priceSilver.price[1].sellPriceGram * 1000).toFixed(
                0,
              )}
              name={"Kilogram"}
              img={"/img-flag/Silver-Kg.svg"}
            />
          </div>
        </div>
      </div>

      <div className="flex lg:w-[45%] justify-center  order-1 flex-col gap-5">
         <div className="w-full max-w-200 ">
          <TitleMenuePrice
            img={"/img-flag/IQ-Flag.svg"}
            title={"Dinar exchange rate at Bank"}
          />

          <div className="bg-[#0F0F0F]">
            <CardPriceSellAndBuy
              priceBuyNow={priceDinarBankBuy}
              priceBuyOld={priceDinarBankBuy}
              priceSellNow={priceDinarBankSell}
              priceSellOld={priceDinarBankSell}
              name={"US Dollar (USD)"}
              img={"/img-flag/US-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(
                (priceEur - 1) * priceDinarBankBuy +
                priceDinarBankBuy
              ).toFixed(2)}
              priceBuyOld={(
                (priceEur - 1) * priceDinarBankBuy +
                priceDinarBankBuy
              ).toFixed(2)}
              priceSellNow={(
                (priceEur - 1) * priceDinarBankSell +
                priceDinarBankSell
              ).toFixed(2)}
              priceSellOld={(
                (priceEur - 1) * priceDinarBankSell +
                priceDinarBankSell
              ).toFixed(2)}
              name={"Euro (EUR)"}
              img={"/img-flag/EUR-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinarBankBuy * priceIrr).toFixed(0)}
              priceBuyOld={(priceDinarBankBuy * priceIrr).toFixed(0)}
              priceSellNow={(priceDinarBankSell * priceIrr).toFixed(
                0,
              )}
              priceSellOld={(priceDinarBankSell * priceIrr).toFixed(
                0,
              )}
              name={`1M Iran rial (IRR)`}
              img={"/img-flag/IR-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinarBankBuy * priceIrt).toFixed(0)}
              priceBuyOld={(priceDinarBankBuy * priceIrt).toFixed(0)}
              priceSellNow={(priceDinarBankSell * priceIrt).toFixed(
                0,
              )}
              priceSellOld={(priceDinarBankSell * priceIrt).toFixed(
                0,
              )}
              name={`1M Iran toman (IRT) `}
              img={"/img-flag/IR-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinarBankBuy * priceAed).toFixed(2)}
              priceBuyOld={(priceDinarBankBuy * priceAed).toFixed(2)}
              priceSellNow={(priceDinarBankSell * priceAed).toFixed(
                2,
              )}
              priceSellOld={(priceDinarBankSell * priceAed).toFixed(
                2,
              )}
              name={`UAE dirham (AED) `}
              img={"/img-flag/UAE-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinarBankBuy * priceTRY).toFixed(2)}
              priceBuyOld={(priceDinarBankBuy * priceTRY).toFixed(2)}
              priceSellNow={(priceDinarBankSell * priceTRY).toFixed(
                2,
              )}
              priceSellOld={(priceDinarBankSell * priceTRY).toFixed(
                2,
              )}
              name={`Turkey lira (TRY) `}
              img={"/img-flag/TR-Flag.svg"}
            />
          </div>
          </div>
        <div className="w-full max-w-200 ">
          <TitleMenuePrice
            img={"/img-flag/IQ-Flag.svg"}
            title={"Dinar exchange rate at Black Market"}
          />

          <div className="bg-[#0F0F0F]">
            <CardPriceSellAndBuy
              priceBuyNow={priceDinar.price[0].buyPrice}
              priceBuyOld={priceDinar.price[1].buyPrice}
              priceSellNow={priceDinar.price[0].sellPrice}
              priceSellOld={priceDinar.price[1].sellPrice}
              name={"US Dollar (USD)"}
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
              name={"Euro (EUR)"}
              img={"/img-flag/EUR-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinar.price[0].buyPrice * priceIrr).toFixed(0)}
              priceBuyOld={(priceDinar.price[1].buyPrice * priceIrr).toFixed(0)}
              priceSellNow={(priceDinar.price[0].sellPrice * priceIrr).toFixed(
                0,
              )}
              priceSellOld={(priceDinar.price[1].sellPrice * priceIrr).toFixed(
                0,
              )}
              name={`1M Iran rial (IRR)`}
              img={"/img-flag/IR-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinar.price[0].buyPrice * priceIrt).toFixed(0)}
              priceBuyOld={(priceDinar.price[1].buyPrice * priceIrt).toFixed(0)}
              priceSellNow={(priceDinar.price[0].sellPrice * priceIrt).toFixed(
                0,
              )}
              priceSellOld={(priceDinar.price[1].sellPrice * priceIrt).toFixed(
                0,
              )}
              name={`1M Iran toman (IRT) `}
              img={"/img-flag/IR-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinar.price[0].buyPrice * priceAed).toFixed(2)}
              priceBuyOld={(priceDinar.price[1].buyPrice * priceAed).toFixed(2)}
              priceSellNow={(priceDinar.price[0].sellPrice * priceAed).toFixed(
                2,
              )}
              priceSellOld={(priceDinar.price[1].sellPrice * priceAed).toFixed(
                2,
              )}
              name={`UAE dirham (AED) `}
              img={"/img-flag/UAE-Flag.svg"}
            />
            <CardPriceSellAndBuy
              priceBuyNow={(priceDinar.price[0].buyPrice * priceTRY).toFixed(2)}
              priceBuyOld={(priceDinar.price[1].buyPrice * priceTRY).toFixed(2)}
              priceSellNow={(priceDinar.price[0].sellPrice * priceTRY).toFixed(
                2,
              )}
              priceSellOld={(priceDinar.price[1].sellPrice * priceTRY).toFixed(
                2,
              )}
              name={`Turkey lira (TRY) `}
              img={"/img-flag/TR-Flag.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

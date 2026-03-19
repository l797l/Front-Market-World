import {api,apiWorld} from "../api/axios";

let dinarjson = null;
let goldjson = null;
let silverjson = null;
let usdjson = null;


export const dataDinar = async () => {
  if (dinarjson) {
    return dinarjson;
  }
  try {
    const response = await api.get("PriceDinarIQ");
    dinarjson = response.data;
    return dinarjson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const dataGold = async () => {
  if (goldjson) {
    return goldjson;
  }
  try {
    const response = await api.get("PriceGoldIQ");
    goldjson = response.data;
    return goldjson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const dataSilver = async () => {
  if (silverjson) {
    return silverjson;
  }
  try {
    const response = await api.get("PriceSilverIQ");
    silverjson = response.data;
    return silverjson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};



  export  const dataForex = async () => {

    if (usdjson) {
        return usdjson;
    }
        try {
                const response = await apiWorld.get('EUR-USD/spot');
                    usdjson = response.data;
                    return usdjson;
            }    catch (error) {
                console.error('Error fetching data:', error);
            }
        };

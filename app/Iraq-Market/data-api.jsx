import { api, apiWorld } from "../api/axios";

let dinarjson = null;
let goldjson = null;
let silverjson = null;
let eurjson = null;
let irrjson = null;
let aedjson = null;
let TRY = null;

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

export const dataEur = async () => {
  if (eurjson) {
    return eurjson;
  }
  try {
    const response = await apiWorld.get("EUR-USD/spot");
    eurjson = response.data;
    return eurjson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const dataIrr = async () => {
  if (irrjson) {
    return irrjson;
  }
  try {
    const response = await apiWorld.get("IRR-USD/spot");
    irrjson = response.data;
    return irrjson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const dataAed = async () => {
  if (aedjson) {
    return aedjson;
  }
  try {
    const response = await apiWorld.get("AED-USD/spot");
    aedjson = response.data;

    return aedjson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const dataTRY = async () => {
  if (TRY) {
    return TRY;
  }
  try {
    const response = await apiWorld.get("TRY-USD/spot");
    TRY = response.data;

    return TRY;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

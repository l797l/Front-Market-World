import api from '../api/axios';


let dinarjson = null;
let goldjson = null;


export  const dataDinar = async () => {

    if (dinarjson) {
        return dinarjson;
    }
        try {
                const response = await api.get('PriceDinarIQ');
                    dinarjson = response.data;
                    return dinarjson;
            }    catch (error) {
                console.error('Error fetching data:', error);
            }
        };

export  const dataGold = async () => {

    if (goldjson) {
        return goldjson;
    }
        try {
                const response = await api.get('PriceGoldIQ');
                    goldjson = response.data;
                    return goldjson;
            }    catch (error) {
                console.error('Error fetching data:', error);
            }
        };



import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchdata = async (country) => {

    let urlChange = url;
    if (country) {
        urlChange = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(urlChange);
        // const required_data = {
        //     // confirmed: data.confirmed,
        //     // recovered: data.recovered,
        //     // deaths: data.deaths,
        //     // lastUpdate: data.lastUpdate
        //     confirmed,
        //     recovered,
        //     deaths,
        //     lastUpdate
        // };

        //console.log(response);
        return { confirmed, recovered, deaths, lastUpdate }

    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        //console.log(data);
        const result = data.map((pointer) => ({
            confirmed: pointer.confirmed.total,
            deaths: pointer.deaths.total,
            date: pointer.reportDate
        }));

        return result;

    } catch (error) {

    }
}


export const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((pointer) => pointer.name)
        //return result;

    } catch (error) {

    }
}
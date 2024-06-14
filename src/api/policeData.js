import axios from 'axios';

const API_URL = 'https://data.police.uk/api/crimes-street/all-crime';

export const fetchCrimes = async (date) => {
    try {
        console.log(`Fetching crimes for date: ${date}`);
        const response = await axios.get(API_URL, {
            params: {
                date,
                poly: '51.46405,-2.62311:51.4625,-2.5624:51.4342,-2.5514:51.4145,-2.6167' // Polygon covering Bristol
            }
        });
        console.log("API response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching crime data:", error);
        return [];
    }
};
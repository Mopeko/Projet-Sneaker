const axios = require('axios');
const fs = require('fs');

const fetchData = async (page) => {
    const url = `http://54.37.12.181:1337/api/sneakers?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=100`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error during the get request', error);
        return null;
    }
};

const totalPages = 500;
const allData = [];

const reapeatFetch = async () => {
    for (let page = 1; page <= totalPages; page++) {
        const data = await fetchData(page);
        if (data) {
            allData.push(data);
        }
    }

    const jsonData = JSON.stringify(allData, null, 2);
    fs.writeFileSync('all_data.json', jsonData);
    console.log('All data saved to all_data.json');
};

reapeatFetch();
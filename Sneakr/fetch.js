const axios = require("axios");
const fs = require("fs");

const fetchData = async (page) => {
  const url = `http://54.37.12.181:1337/api/sneakers?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=30`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
const totalPages = 2;
const fetchAllData = async () => {
  let allData = [];

  for (let page = 1; page <= totalPages; page++) {
    let data = await fetchData(page);
    console.log(data)

    if (data) {
      allData = allData.concat(data.data);
      console.log(page);
    }
  }

  const jsonData = JSON.stringify(allData, null, 2);
  fs.writeFileSync("all_data.json", jsonData);
  console.log("All data saved to all_data.json");
};

fetchAllData();
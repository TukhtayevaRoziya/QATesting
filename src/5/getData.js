const axios = require("axios");
const mapArrToString = require("../2/mapArrToString");

const getData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userIds = response.data.map((user) => user.id);
    return userIds
  } catch (error) {
    // console.log("some error!");
  }
};

module.exports = getData;

const { tradeData } = require("../Normalizer/NormalizeData");
const { fetchData } = require("../Adaptors/BrokerData")
const { genrateToken } = require("./TokenGenerate");

function syncTrade(userId){
    const getToken = genrateToken(userId);
    const rawData = fetchData(userId);
    const normalized =  tradeData(rawData);
    return {getToken , trades: normalized}
}

module.exports = {
    syncTrade
}
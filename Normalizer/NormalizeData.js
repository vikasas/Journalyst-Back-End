function tradeData(data){
    return data.map(m => ({
        id: m.id,
        symbol: m.stock,
        quantity: m.quantity,
        price: m.rate,
        timestamp: new Date(m.time).toISOString()
    }))
}

module.exports = {
    tradeData
}
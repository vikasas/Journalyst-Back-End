const dummyData = {
    user1 : [
        { id: 'T1', stock: 'TCS', quantity: 5, rate: 3400, time: '2025-08-08 09:05:00' },
        { id: 'T2', stock: 'INFY', quantity: 10, rate: 1350, time: '2025-08-08 09:00:00' },
    ],
    user2 :[
        {id: 'T3' , stock : 'Relaiance' , quantity : 15 , rate : 2500, time: '2025-08-08 09:10:00'}
    ]
}

function fetchData(userId){
    console.log(dummyData['user1']);
    return dummyData[userId] || [];
}

module.exports = {
    fetchData
}
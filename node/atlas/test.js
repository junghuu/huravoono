var axios = require('axios');
var data = JSON.stringify({
    "collection": "test",
    "database": "testdb",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 0,
	"id":0,
        "name": 1,
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-owzve/endpoint/data/beta',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'rEDBTn7rMBCqJUFIzO6F384fITGxlwsxfMmqA4IzFuz5RWSRK0LM1EgxMAf2lBPt'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

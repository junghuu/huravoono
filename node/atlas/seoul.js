var axios = require('axios');
var data = JSON.stringify({
    "collection": "seoul",
    "database": "testdb",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 0,
        "시군구": 1,
        "번지": 1,
        "단지명": 1,
        "전용면적": 1,
        "계약일": 1,
        "거래금액(만원)": 1,
        "층": 1,
        "건축년도": 1,
        "도로명": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-owzve/endpoint/data/beta',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'Eymbzs6gU81X2Q9Heh9csrO1MW8xkAngFPyXnV2Ivc1Yx4Krbm6oTjfUDnrv3psW'
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

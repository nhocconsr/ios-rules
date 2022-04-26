let obj = JSON.parse($response.body);

obj.data.purchased ={
    "pay_inapp": true,
    "time_purchased": 0,
    "time_activated": 0,
    "time_expire": 4080903419,
    "product_list": [],
    "is_active": true,
    "is_free": false,
    "is_purchased": true
};
$done({body: JSON.stringify(obj)});

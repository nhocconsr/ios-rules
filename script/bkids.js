let obj = JSON.parse($response.body);

if (obj.data) {
    for (var i = obj.data.length - 1; i >= 0; i--) {
		obj.data[i].is_fee = true;
		obj.data[i].price = 0;
    }
};
$done({body: JSON.stringify(obj)});

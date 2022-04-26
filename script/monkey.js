let obj = JSON.parse($response.body);

obj.data.purchased ={
	"pay_inapp": true,
	"time_purchased": 0,
	"time_activated": 0,
	"time_expire": 0,
	"product_list": [],
	"is_active": true,
	"is_free": false,
	"free_days": 999,
	"is_purchased": true,
	"purchased_packages": {
		"iap": [],
		"cod": []
	}
};
$done({body: JSON.stringify(obj)});

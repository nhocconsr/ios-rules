let obj = JSON.parse($response.body);
obj.data.membership = {
    "type": "PREMIUM",
	"endDateStr": "Không giới hạn"
};
obj.data.features= {
    "QUY_DAU_TU_QUY_NUOC_NGOAI": "Không giới hạn",
    "LOC_CO_PHIEU_GIAO_DICH_NOI_BO": "Không giới hạn",
    "LOC_CO_PHIEU_NANG_CAO": "Không giới hạn",
    "REWARD_STOCK": "Không giới hạn",
    "LOC_CO_PHIEU_BIEN_AN_TOAN": "Không giới hạn",
    "PHAN_TICH_GIA_HANG_HOA": "Không giới hạn",
    "STOCK_RELATIVE_STRENGTH": "Không giới hạn",
    "LIMIT_VIEW_COMPANY": "Không giới hạn"
},
obj.data.hasMembership = true;
$done({body: JSON.stringify(obj)});
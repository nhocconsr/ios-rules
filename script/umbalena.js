var obj = JSON.parse($response.body);

obj={
  "id": 102779,
  "username": "user_vn_68485",
  "password": "pbkdf2_sha256$36000$2r8W7ZGpgjW8$/vhGwAbwxNjSRvaeu7eLxAmqLwm2mIw5i1eA7oBHxXA=",
  "is_active": true,
  "is_active_str": "Đã kích hoạt",
  "full_name": "Phạm Gia Vang",
  "email": null,
  "gender": null,
  "phone": "+84966019896",
  "address": null,
  "country": "vn",
  "city": null,
  "identification_card": null,
  "packages": [
    1
  ],
  "avatar": null,
  "kid_personal_rel": [
    80402
  ],
  "kid_limit": 2,
  "birth_date": "01-01-1992",
  "personalpackage_set": [
    {
      "personal": 102779,
      "package__name": "Gói Sách Việt - Anh",
      "expiry_date": "22-02-2025 03:15",
      "is_active": true
    }
  ],
  "is_lock": false,
  "is_lock_str": "Đang hoạt động",
  "expiry_date": "02/22/2025 03:15",
  "date_joined": "17-02-2022 03:14",
  "service_type": "Pro",
  "referral__barcode": "CN_0102779",
  "referral_use__barcode": null,
  "point_bonus": 0,
  "referral_url": "https://umbalena.vn/dang-ky?gioithieu=CN_0102779",
  "referral_barcode": null,
  "referral_use__phone": null,
  "country__name": "Vietnam (Việt Nam)",
  "service_type_value": null,
  "referral_use__is_priority": false,
  "is_test": false,
  "source": "umbalena",
  "provider": "personal"
}

$done({body: JSON.stringify(obj)});


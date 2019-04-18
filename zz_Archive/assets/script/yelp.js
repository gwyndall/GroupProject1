function startSearch() {

  var restType = ""
  const lat = 32.876709;
  const long = -117.206601;
  let res = {
    "businesses": [{
      "id": "FmGF1B-Rpsjq1f5b56qMwg",
      "alias": "molinari-delicatessen-san-francisco",
      "name": "Molinari Delicatessen",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/6He-NlZrAv2mDV-yg6jW3g/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/molinari-delicatessen-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 1059,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 37.79838,
        "longitude": -122.40782
      },
      "transactions": ["pickup", "delivery"],
      "price": "$$",
      "location": {
        "address1": "373 Columbus Ave",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94133",
        "country": "US",
        "state": "CA",
        "display_address": ["373 Columbus Ave", "San Francisco, CA 94133"]
      },
      "phone": "+14154212337",
      "display_phone": "(415) 421-2337",
      "distance": 1453.998141679007
    }, {
      "id": "BcW0vRdM8N-rteR2FfV1jg",
      "alias": "deli-board-san-francisco",
      "name": "Deli Board",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/m5dL_mNk9rjSJ5jQu17hVw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/deli-board-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 1229,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 37.7776247966103,
        "longitude": -122.407012712007
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "1058 Folsom St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94103",
        "country": "US",
        "state": "CA",
        "display_address": ["1058 Folsom St", "San Francisco, CA 94103"]
      },
      "phone": "+14155527687",
      "display_phone": "(415) 552-7687",
      "distance": 1201.0092939107112
    }, {
      "id": "VH9Zfe0ip-7LRKrvNT_5Iw",
      "alias": "the-boys-deli-san-francisco-3",
      "name": "The Boy's Deli",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Hcf08mV7wZKONU1Pm4olPQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-boys-deli-san-francisco-3?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 14,
      "categories": [{
        "alias": "sandwiches",
        "title": "Sandwiches"
      }, {
        "alias": "breakfast_brunch",
        "title": "Breakfast & Brunch"
      }, {
        "alias": "soup",
        "title": "Soup"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 37.79214,
        "longitude": -122.40285
      },
      "transactions": [],
      "location": {
        "address1": "315 Montgomery St",
        "address2": "Ste E",
        "address3": null,
        "city": "San Francisco",
        "zip_code": "94104",
        "country": "US",
        "state": "CA",
        "display_address": ["315 Montgomery St", "Ste E", "San Francisco, CA 94104"]
      },
      "phone": "+14156587970",
      "display_phone": "(415) 658-7970",
      "distance": 635.180371008062
    }, {
      "id": "uFeOc6t94xLp-JPP6fhnaA",
      "alias": "wise-sons-jewish-delicatessen-san-francisco-2",
      "name": "Wise Sons Jewish Delicatessen",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Gp9tnIQJqnCN9sWMacCn8g/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/wise-sons-jewish-delicatessen-san-francisco-2?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 276,
      "categories": [{
        "alias": "sandwiches",
        "title": "Sandwiches"
      }, {
        "alias": "bagels",
        "title": "Bagels"
      }, {
        "alias": "soup",
        "title": "Soup"
      }],
      "rating": 3.5,
      "coordinates": {
        "latitude": 37.7861320529474,
        "longitude": -122.40342621841
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "736 Mission St",
        "address2": "",
        "address3": "The Contemporary Jewish Museum",
        "city": "San Francisco",
        "zip_code": "94103",
        "country": "US",
        "state": "CA",
        "display_address": ["736 Mission St", "The Contemporary Jewish Museum", "San Francisco, CA 94103"]
      },
      "phone": "+14156557887",
      "display_phone": "(415) 655-7887",
      "distance": 314.79308965734816
    }, {
      "id": "MWV8AoySYObkfVpaLhaqKQ",
      "alias": "sf-deli-and-wine-san-francisco-3",
      "name": "SF Deli & Wine",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/54PEA7BhYSnyTs3YqOxa5Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/sf-deli-and-wine-san-francisco-3?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 26,
      "categories": [{
        "alias": "beer_and_wine",
        "title": "Beer, Wine & Spirits"
      }, {
        "alias": "delis",
        "title": "Delis"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.7839431994157,
        "longitude": -122.405098485531
      },
      "transactions": ["pickup", "delivery"],
      "price": "$",
      "location": {
        "address1": "810 Mission St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94103",
        "country": "US",
        "state": "CA",
        "display_address": ["810 Mission St", "San Francisco, CA 94103"]
      },
      "phone": "+14155127847",
      "display_phone": "(415) 512-7847",
      "distance": 556.544681533414
    }, {
      "id": "eZ2_6Wx-Lqp_mLtG6-zzTg",
      "alias": "sammys-on-2nd-san-francisco",
      "name": "Sammy's on 2nd",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/GWvs007fUKMbyftq-_E7QQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/sammys-on-2nd-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 199,
      "categories": [{
        "alias": "beer_and_wine",
        "title": "Beer, Wine & Spirits"
      }, {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.7881,
        "longitude": -122.40028
      },
      "transactions": [],
      "price": "$",
      "location": {
        "address1": "84 2nd St",
        "address2": null,
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94105",
        "country": "US",
        "state": "CA",
        "display_address": ["84 2nd St", "San Francisco, CA 94105"]
      },
      "phone": "+14152430311",
      "display_phone": "(415) 243-0311",
      "distance": 146.3807329561209
    }, {
      "id": "0mZeR3TwxmZGLCxzcf620A",
      "alias": "5th-avenue-deli-and-market-san-francisco",
      "name": "5th Avenue Deli & Market",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/kCw-46xiRawlFBGyK85OwA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/5th-avenue-deli-and-market-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 38,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "grocery",
        "title": "Grocery"
      }, {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 37.79553,
        "longitude": -122.39623
      },
      "transactions": ["pickup", "delivery"],
      "price": "$",
      "location": {
        "address1": "4 Embarcadero Ctr",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94111",
        "country": "US",
        "state": "CA",
        "display_address": ["4 Embarcadero Ctr", "San Francisco, CA 94111"]
      },
      "phone": "+14157570950",
      "display_phone": "(415) 757-0950",
      "distance": 1005.1181487091517
    }, {
      "id": "n_N_aY_XGhvvVjmXg7XjEA",
      "alias": "saltys-san-francisco-2",
      "name": "Salty's",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/qfEPcYKWZ5J70zd0leo-dQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/saltys-san-francisco-2?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 2,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }, {
        "alias": "coffee",
        "title": "Coffee & Tea"
      }],
      "rating": 5.0,
      "coordinates": {
        "latitude": 37.7826302,
        "longitude": -122.4205352
      },
      "transactions": [],
      "location": {
        "address1": "748 Van Ness Ave",
        "address2": null,
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94102",
        "country": "US",
        "state": "CA",
        "display_address": ["748 Van Ness Ave", "San Francisco, CA 94102"]
      },
      "phone": "+14154004180",
      "display_phone": "(415) 400-4180",
      "distance": 1865.7577639342794
    }, {
      "id": "dv9gdJrBG7SZ8aWYkxG_3w",
      "alias": "sutter-st-cafe-san-francisco",
      "name": "Sutter St. Cafe",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/VcKDYThd72i27lPfwoRlPg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/sutter-st-cafe-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 176,
      "categories": [{
        "alias": "cafes",
        "title": "Cafes"
      }, {
        "alias": "delis",
        "title": "Delis"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 37.7894760577176,
        "longitude": -122.407699611023
      },
      "transactions": ["pickup"],
      "price": "$",
      "location": {
        "address1": "450 Sutter St",
        "address2": null,
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94108",
        "country": "US",
        "state": "CA",
        "display_address": ["450 Sutter St", "San Francisco, CA 94108"]
      },
      "phone": "+14153628342",
      "display_phone": "(415) 362-8342",
      "distance": 737.7876443304846
    }, {
      "id": "zHqoPRK7sWS0trwa5emlMw",
      "alias": "liquor-and-deli-on-union-square-san-francisco",
      "name": "Liquor & Deli On Union Square",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/k-RcZMZVehmkN_RyPhXp1Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/liquor-and-deli-on-union-square-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 33,
      "categories": [{
        "alias": "beer_and_wine",
        "title": "Beer, Wine & Spirits"
      }, {
        "alias": "delis",
        "title": "Delis"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.79,
        "longitude": -122.40729
      },
      "transactions": ["pickup"],
      "price": "$",
      "location": {
        "address1": "423 Stockton St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94108",
        "country": "US",
        "state": "CA",
        "display_address": ["423 Stockton St", "San Francisco, CA 94108"]
      },
      "phone": "+14154348210",
      "display_phone": "(415) 434-8210",
      "distance": 729.9634773299399
    }, {
      "id": "n0KBa5ce7wH0sGE-Qe3gmg",
      "alias": "davids-delicatessen-san-francisco",
      "name": "David's Delicatessen",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/fqlOcyR3sSUAAVZ4fwwS_Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/davids-delicatessen-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 475,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }],
      "rating": 2.0,
      "coordinates": {
        "latitude": 37.7871374,
        "longitude": -122.4110411
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "474 Geary St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94102",
        "country": "US",
        "state": "CA",
        "display_address": ["474 Geary St", "San Francisco, CA 94102"]
      },
      "phone": "+14152765950",
      "display_phone": "(415) 276-5950",
      "distance": 976.5200574744572
    }, {
      "id": "n5HRy0g5An_k4NIX1t53FQ",
      "alias": "rincon-market-san-francisco",
      "name": "Rincon Market",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/5m8DQepDSt-URMzostj47w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/rincon-market-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 140,
      "categories": [{
        "alias": "grocery",
        "title": "Grocery"
      }],
      "rating": 3.5,
      "coordinates": {
        "latitude": 37.7915188131615,
        "longitude": -122.392526036056
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "98 Howard St",
        "address2": null,
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94105",
        "country": "US",
        "state": "CA",
        "display_address": ["98 Howard St", "San Francisco, CA 94105"]
      },
      "phone": "+14155128066",
      "display_phone": "(415) 512-8066",
      "distance": 833.0363106142427
    }, {
      "id": "mVZtaqqcFWrVV1RBagOKBA",
      "alias": "market-mayflower-and-deli-san-francisco",
      "name": "Market Mayflower & Deli",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/dBXaa_dlVakrIk3Daxlu2g/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/market-mayflower-and-deli-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 142,
      "categories": [{
        "alias": "grocery",
        "title": "Grocery"
      }, {
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "markets",
        "title": "Fruits & Veggies"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 37.789569,
        "longitude": -122.413516
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "985 Bush St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94109",
        "country": "US",
        "state": "CA",
        "display_address": ["985 Bush St", "San Francisco, CA 94109"]
      },
      "phone": "+14157476110",
      "display_phone": "(415) 747-6110",
      "distance": 1227.1104862690993
    }, {
      "id": "2TUrb8EZwHY3Ouj67sdaaA",
      "alias": "wise-sons-delicatessen-san-francisco-4",
      "name": "Wise Sons Delicatessen",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/cCEHQjWY_Ajwizbn-rk4eQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/wise-sons-delicatessen-san-francisco-4?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 155,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.7953897580148,
        "longitude": -122.393274307251
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "Ferry Building Farmer's Market",
        "address2": "",
        "address3": "1 Ferry Bldg",
        "city": "San Francisco",
        "zip_code": "94105",
        "country": "US",
        "state": "CA",
        "display_address": ["Ferry Building Farmer's Market", "1 Ferry Bldg", "San Francisco, CA 94105"]
      },
      "phone": "+14157875534",
      "display_phone": "(415) 787-5534",
      "distance": 1114.1486963413138
    }, {
      "id": "2hGIxgprREdBieylltWaRQ",
      "alias": "limoncello-san-francisco",
      "name": "Limoncello",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/GNMz7gMIMgmBZr4WAYUQsw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/limoncello-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 643,
      "categories": [{
        "alias": "sandwiches",
        "title": "Sandwiches"
      }, {
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "beer_and_wine",
        "title": "Beer, Wine & Spirits"
      }],
      "rating": 5.0,
      "coordinates": {
        "latitude": 37.7873184067081,
        "longitude": -122.423591369312
      },
      "transactions": ["pickup", "delivery"],
      "price": "$$",
      "location": {
        "address1": "1400 Sutter St",
        "address2": "",
        "address3": null,
        "city": "San Francisco",
        "zip_code": "94109",
        "country": "US",
        "state": "CA",
        "display_address": ["1400 Sutter St", "San Francisco, CA 94109"]
      },
      "phone": "+14156386361",
      "display_phone": "(415) 638-6361",
      "distance": 2076.1540447650927
    }, {
      "id": "_7PmCSs1oEGLevlonhdFRw",
      "alias": "daniels-cafe-san-francisco-2",
      "name": "Daniel's Cafe",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/bnGv8c7Ct2PoNE0FM3QLpQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/daniels-cafe-san-francisco-2?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 263,
      "categories": [{
        "alias": "coffee",
        "title": "Coffee & Tea"
      }, {
        "alias": "bagels",
        "title": "Bagels"
      }, {
        "alias": "delis",
        "title": "Delis"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.7855284,
        "longitude": -122.4088907
      },
      "transactions": [],
      "price": "$",
      "location": {
        "address1": "154 Ellis St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94102",
        "country": "US",
        "state": "CA",
        "display_address": ["154 Ellis St", "San Francisco, CA 94102"]
      },
      "phone": "+14159561760",
      "display_phone": "(415) 956-1760",
      "distance": 802.6415324766735
    }, {
      "id": "kEhq0qT_JFxgeh-pCS4lPA",
      "alias": "the-sentinel-san-francisco",
      "name": "The Sentinel",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/bmLhuYADb1MNQJATh5Bfzw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-sentinel-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 1285,
      "categories": [{
        "alias": "sandwiches",
        "title": "Sandwiches"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.7882977785009,
        "longitude": -122.401372356986
      },
      "transactions": ["pickup", "delivery"],
      "price": "$",
      "location": {
        "address1": "37 New Montgomery St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94105",
        "country": "US",
        "state": "CA",
        "display_address": ["37 New Montgomery St", "San Francisco, CA 94105"]
      },
      "phone": "+14157698109",
      "display_phone": "(415) 769-8109",
      "distance": 199.81617618665948
    }, {
      "id": "4NInBK_67cLRyUS7sq0CEg",
      "alias": "millers-east-coast-deli-san-francisco",
      "name": "Miller's East Coast Deli",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/dp0f0riyDlevyCG2hwKx-Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/millers-east-coast-deli-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 1456,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }, {
        "alias": "breakfast_brunch",
        "title": "Breakfast & Brunch"
      }],
      "rating": 3.5,
      "coordinates": {
        "latitude": 37.79273,
        "longitude": -122.42145
      },
      "transactions": ["pickup", "delivery"],
      "price": "$$",
      "location": {
        "address1": "1725 Polk St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94109",
        "country": "US",
        "state": "CA",
        "display_address": ["1725 Polk St", "San Francisco, CA 94109"]
      },
      "phone": "+14155633542",
      "display_phone": "(415) 563-3542",
      "distance": 1993.4476800653433
    }, {
      "id": "U8J2_5sTiKUUVjWEf3J-Tg",
      "alias": "mason-street-deli-san-francisco",
      "name": "Mason Street Deli",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/CmFUgBbdyN7nAjA9mllBmQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/mason-street-deli-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 4,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.78402,
        "longitude": -122.4096
      },
      "transactions": [],
      "location": {
        "address1": "39 Mason St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94102",
        "country": "US",
        "state": "CA",
        "display_address": ["39 Mason St", "San Francisco, CA 94102"]
      },
      "phone": "+14155631380",
      "display_phone": "(415) 563-1380",
      "distance": 938.0172641796889
    }, {
      "id": "ZXwnSN4GlEuSTNCRrjjRMg",
      "alias": "bite-san-francisco",
      "name": "Bite",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sqHzrKnBj7dLOCJYX34Hzg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/bite-san-francisco?adjust_creative=3iJzoqITfxcVcmdVC21-UA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3iJzoqITfxcVcmdVC21-UA",
      "review_count": 715,
      "categories": [{
        "alias": "delis",
        "title": "Delis"
      }, {
        "alias": "sandwiches",
        "title": "Sandwiches"
      }, {
        "alias": "salad",
        "title": "Salad"
      }],
      "rating": 4.0,
      "coordinates": {
        "latitude": 37.7884239641,
        "longitude": -122.415666133
      },
      "transactions": ["pickup", "delivery"],
      "price": "$$",
      "location": {
        "address1": "912 Sutter St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94104",
        "country": "US",
        "state": "CA",
        "display_address": ["912 Sutter St", "San Francisco, CA 94104"]
      },
      "phone": "+14155632483",
      "display_phone": "(415) 563-2483",
      "distance": 1389.7519934105944
    }],
    "total": 805,
    "region": {
      "center": {
        "longitude": -122.399972,
        "latitude": 37.786882
      }
    }
  };

  // $("#searchButton").on("click", function (event) {
  //   event.preventDefault();
  //   // This line grabs the input from the textbox
  //   restType = $("#searchInput").val().trim();
  searchYelp(res);
  // });


  function searchYelp(res) {
    // var apiKey = "8tYUenwnc30zfZ_BU_6dIkyQM6X8MI1S9hGxquW7h0EtrBfG2vuhDsQNXqItzVm4822tyG6DZ_v-m0-H31za-2yCALyGz7A72nn3Tk95fMg7U_vouW72kaFg8wmsXHYx"

    //Alternative api key
    // var apiKey = "96j_fC5l32z1FaYSk8NQMukWB7BJfAL8TOjl0fylLlap3y7SOAGGuLeeNhekRn_4Gocz9oSVdMBja866dd62uppQhNvoFzmbx1rObNRykqSjIB3sdn1zolKshTGyXHYx"
    // var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + restType + "&latitude=" + lat + "&longitude=" + long;


    // $.ajax({
    //   url: queryURL,
    //   method: "GET",
    //   headers: {
    //     "accept": "application/json",
    //     "x-requested-with": "xmlhttprequest",
    //     "Access-Control-Allow-Origin": "*",
    //     "Authorization": `Bearer ${apiKey}`
    //   }
    // }).then(function (res) {

      // var results = res.businesses
      var results = res.businesses

      console.log(res);
      for (let idx = 0; idx < results.length; idx++) {
        var respData = results[idx]
        var restLink = respData.url;
        // Creating a div to hold the restaurant info
        var restCard = $("<div class='card text-white bg-dark mb-3'>");


        // Retrieving the URL for the image
        var imgURL = respData.image_url;

        // Creating an element to hold the still image
        var image = "<img src='" + imgURL + "' width=200px>"


        // Pulling and adding business data
        var busName = '<h5 class="card-title">'+respData.name+'</h5>' ;
        var busAddr = '<p>'+addr(respData.location.display_address)+'</p>';

        // Function to build address block
        function addr(array) {
          let addString = "";
          for (let index = 0; index < array.length; index++) {
            const element = array[index];
            addString = addString + element + "<br/>";
          }
          return addString;
        }
        
        // Fixing issue with some listings missing price info, function to print nothing instead of undefined
        function pricePoint () {  

          if (respData.price == undefined) {
            return "";
          } else {
            return respData.price;
          };
        };
        var price = pricePoint();
        
        var nameField = busName + busAddr;


        // Storing the rating data
        var rating = respData.rating;

        rateImg = starRtg(rating);
        starUrl = "assets/images/yelp_stars/" + rateImg;

        // Creating an element to have the rating displayed
        var pRating = "<img class='star' src=" + starUrl + ">";
        const yelpLogo = "<img class='ylogo' src='assets/images/Yelp_trademark_RGB.png'>"
        // Displaying the name and rating
        var linkedBlock = '<a href="' + restLink + '">' + image + '<br/>' + nameField + '<br/>' + pRating + yelpLogo + '<br/>' + price + '</a>'
        restCard.append(linkedBlock);

        // Adding restaurants to the display
        $("#restaurants").append(restCard);

        // Get Rating Image
        function starRtg(rating) {
    
          let rateImgFile = ""

          switch (rating) {
            case 1:
              rateImgFile = "small_1.png";
              break;
            case 1.5:
              rateImgFile = "small_1_half.png";
              break;
            case 2:
              rateImgFile = "small_2.png";
              break;
            case 2.5:
              rateImgFile = "small_2_half.png";
              break;
            case 3:
              rateImgFile = "small_3.png";
              break;
            case 3.5:
              rateImgFile = "small_3_half.png";
              break;
            case 4:
              rateImgFile = "small_4.png";
              break;
            case 4.5:
              rateImgFile = "small_4_half.png";
              break;
            case 5:
              rateImgFile = "small_5.png";
              break;
            default:
              rateImgFile = "small_0.png";
          }
          return rateImgFile;
        }
      }
        
  }
  // );


//   }
}
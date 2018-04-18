const mongoose = require("mongoose");
// const db = require("../models");
const Breweries = require("../models/breweries.js");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/beerquest", {});

const brewerySeed = [{
        "details_key": 19,
        "brewery_id": "9d2aeefe22d695bb9db385de291e2b953fe2d7ca",
        "brewery_name": "BareWolf Brewing",
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "latitude": 42.8569829,
        "longitude": -70.923599,
        "place_id": "ChIJFWvwevbj4okRAOUn-awHKuM",
        "rating": 4.8,
        "vicinity": "12 Oakland St, Amesbury",
        "saved": true,
        "full_address": "12 Oakland St, Amesbury, MA 01913, USA",
        "phone": "(978) 390-6540",
        "price_level": 1,
        "num_reviews": 5,
        "website": "http://www.barewolfbrewing.com/",
        "open_now": false,
        "photos": [{
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107297374364802645369/photos\">BareWolf Brewing</a>"
                ],
                "photo_reference": "CmRaAAAAI8hQWkQMo_arvmwFE9DFDkKKHr2MavA4YSegAnkB1hXnTBqBUYiQeYq7Tq3GjrLF6prRDSsNGjiIk8t-zK6d6lFIeC7b0lHZrElz-Q6RbugSwHS99tjZBNAllZ75w9IHEhBVbCGgo1MGaVu-zlI9gv7kGhStqcINMQaJNjN_GTd2tO80rUmHpQ",
                "width": 2048
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107297374364802645369/photos\">BareWolf Brewing</a>"
                ],
                "photo_reference": "CmRaAAAAR5F_X4e4dqfvOGaiiKKxsrPMPax5zgTdG0okfdeGrI1apzqvU1QeFxPS7xmZZhaSsSvHgFruIXoNq6iLPraJjjIcijzgGwYl1hewOT9PjnWL3CzHtrRIBRTuamN_Z3nBEhCusR8iTwTjZmfjYbhqIhybGhQ6il78RniQGjSAxIEWT07IE067IA",
                "width": 3024
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110804041350327844798/photos\">Matthew Renninger</a>"
                ],
                "photo_reference": "CmRaAAAAd_eGadUZrETXwHAp2dQ9yCD0iCXhF6SWx_DcfisN4ac3JlW9wdHw_zJZ4K0LKKM2E8beeVUoLPX3dBoeKAdGYGxV0S9izrfMLiuCNy5dRz2dT9R-bZwhqOMd9yHTiXYuEhDO-3xulpvcF6luCbM-oEBjGhQvy4agbOvvShCacmol3fFaVexQRQ",
                "width": 4048
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110804041350327844798/photos\">Matthew Renninger</a>"
                ],
                "photo_reference": "CmRaAAAAnAYylFKmZ9BEYrdg8_DKIqjKH1sB63HYbF_PQ0kqqd203faKO8Nn42IhxH5b6aBN9QKOPXc3aPkCwoUK0NBglakXVYKL-6_gJZnwP8r0_xYxPkUuuluMijECOrRbduODEhARWWD31KJMW3m3Iu00y4HSGhTjCIZBQ-N8iJd1ox96m5KwHwSeMw",
                "width": 4048
            },
            {
                "height": 1544,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107297374364802645369/photos\">BareWolf Brewing</a>"
                ],
                "photo_reference": "CmRaAAAAeRshrqZgn9UF1BjkzKBSdlYqm-Wb2kR3c24Jy611t-M21tYtstJao3bMEXLc324UKcbYet2GVMQQYrWauWVcPNxmnCIbxQRe79GINNLKowVxsLT6Q26RqLgceulAbapvEhC5bomx4t8Qww7kajeN0owXGhTGOHcXz1x4TPg0kOoIBMv6uwpW9w",
                "width": 1536
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107297374364802645369/photos\">BareWolf Brewing</a>"
                ],
                "photo_reference": "CmRaAAAAJX3rOneObfo0uZna0LhS7WPQj_tqGtAC6nO5hKEGM9h7qYdWiRc4zEoZ0ps66IJ5Ia_wGJdJqhDPqVpEEDoGNCT9EgWPepUqgYobN3ww2xh-JY3n_R4r8Wzr8rmEr9c3EhDErDsZd8R23O_YsKHlNOC5GhSqTiYqtfGT0woqgRUxNiuauF9hfQ",
                "width": 1536
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110804041350327844798/photos\">Matthew Renninger</a>"
                ],
                "photo_reference": "CmRaAAAAfZt5eC50NIpEdYN4DtmOw3AHtYFRTPRGS7rsST33uB5MzT_SFXJxTyRKZ3ZPczOXuReS7arX5nyGeU_XQvyIc9HLegP5sVp9oMIq4khZahbomR1xsje09vJF39EPVVcTEhCmXNmNnfKPweLkOF3038NGGhTqF_1uyUC6AF21UgZG0ir20sFqWw",
                "width": 4048
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107297374364802645369/photos\">BareWolf Brewing</a>"
                ],
                "photo_reference": "CmRaAAAAPYwK4H1RjST8-G2uoUgumrorGMXytKhrDp-xAiUgiTPpKnHJl6UNfDYvV1fgrtztOcC2olFDMnkic2MrDDR-ZiDC4HNS9M8kpJOLwJUA28VwP36Y4KOuh-EiadlwoZAbEhDIILD_e9sB7JD7FBM7e4leGhSzTLfbnSceyg9OBKNimpVS9kP9nw",
                "width": 1536
            },
            {
                "height": 1512,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107297374364802645369/photos\">BareWolf Brewing</a>"
                ],
                "photo_reference": "CmRaAAAAj2DwKwr2wzCX4N8lDQY03JybhaTBiz6X4jO7sqoTZ60uCLCMtQvzz4MJnVDfPt1MXjKyv8GDI58OHHyZI7I4Uym1_4CWfqwKMTKkYYxgNk6DP7oe2NE8uTFcy0bGFIwTEhACcxFevw4Osv9xMCwx6b05GhSnepTTufM3j18uXO7aZPbWgNACMA",
                "width": 2016
            },
            {
                "height": 1224,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107297374364802645369/photos\">BareWolf Brewing</a>"
                ],
                "photo_reference": "CmRaAAAAE9KSWoaiRYdMQZEnYtSlr9BYD0NzXMsxeZVc2yT4wKSDm7-20hvtvVuzvJW_HLIpZFvja89QrN-CVKd157RsqOTnpUxzVXrhL9GXMQJQ9-p-N8SOQVZ4RVqwW1jJxtCDEhDuqmqgtmSeC1seazH7CjtuGhTKIZUx0LliO-9OXgzp2CMHn8bBEQ",
                "width": 1632
            }
        ],
        "reviews": [{
                "author_name": "Joe Harrison",
                "author_url": "https://www.google.com/maps/contrib/112802965201727845680/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/--qCtTxU0_m8/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfym_jctEUtJkE0uaBk0z_tuWZPyew/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 5,
                "relative_time_description": "4 months ago",
                "text": "Was in the area today for a meeting and popped in to see the brewery.  The guys were in the middle of their first ever canning run.  I'm pretty sure I bought the first two 4-packs ever.  Just cracked a Gross Negligence IPA.  Super juicy and hoppy.  Delicious.  Definitely will be stopping by for more.  Really cool spot as well and can see why it's so popular.  Thanks guys!",
                "time": 1508362329
            },
            {
                "author_name": "Kate Davis",
                "author_url": "https://www.google.com/maps/contrib/104929999556721750838/reviews",
                "language": "en",
                "profile_photo_url": "https://lh4.googleusercontent.com/-IotOnozyMt4/AAAAAAAAAAI/AAAAAAAAAJU/vmk-Hhf23sM/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 4,
                "relative_time_description": "3 months ago",
                "text": "Great beer. Arcade classic games inside. Local art for sale. Really cool place inside. When I went they collaborated with The Angry Donut.",
                "time": 1512260914
            },
            {
                "author_name": "Erika Galluzzo",
                "author_url": "https://www.google.com/maps/contrib/101647463515475218061/reviews",
                "language": "en",
                "profile_photo_url": "https://lh4.googleusercontent.com/-LQwUI3QeeVQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfybI51Ps4CH_lmmYrPKAm3sNuTbuw/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 5,
                "relative_time_description": "a month ago",
                "text": "Great atmosphere and even better beer!  Very diverse selection and knowledgeable staff.",
                "time": 1516330500
            },
            {
                "author_name": "Kimberly Adie",
                "author_url": "https://www.google.com/maps/contrib/110810821988398650689/reviews",
                "language": "en",
                "profile_photo_url": "https://lh6.googleusercontent.com/-f15Upi2BXWs/AAAAAAAAAAI/AAAAAAAAD0E/ubs7694Oq5A/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 5,
                "relative_time_description": "4 months ago",
                "text": "Great new brewery! Awesome staff who really care about their craft. Really like how they bring in other local businesses with food trucks, bands and artists.",
                "time": 1508378062
            },
            {
                "author_name": "Robert Pelletier",
                "author_url": "https://www.google.com/maps/contrib/100070134241368938478/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/-UZwHCW2GtJY/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfwjjGPSQl2vw8ffmTBwyEK4T95ydg/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 5,
                "relative_time_description": "a month ago",
                "text": "Great Beer and Great atmosphere to hang out with friends and family.",
                "time": 1517719920
            }
        ],
        "url": "https://maps.google.com/?cid=3810643628520741652",
        "been_there": false,
        "weekday_text": [
            "Monday: Closed",
            "Tuesday: Closed",
            "Wednesday: 9:00 AM – 8:30 PM",
            "Thursday: 9:00 AM – 8:30 PM",
            "Friday: 9:00 AM – 8:30 PM",
            "Saturday: 9:00 AM – 8:30 PM",
            "Sunday: 9:00 AM – 8:30 PM"
        ]
    },
    {
        "details_key": 1,
        "brewery_id": "01daf25ee9bc3663b541d7f7827d80f968e20a4a",
        "brewery_name": "Stoneface Brewing Co.",
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "latitude": 43.1149002,
        "longitude": -70.8185158,
        "place_id": "ChIJDUFu746V4okRFJuVwzAg4jQ",
        "rating": 4.7,
        "vicinity": "436 Shattuck Way, Newington",
        "saved": true,
        "full_address": "436 Shattuck Way, Newington, NH 03801, USA",
        "phone": "(603) 570-2603",
        "num_reviews": 5,
        "website": "http://www.stonefacebrewing.com/",
        "open_now": false,
        "photos": [{
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114260608827860580000/photos\">Stoneface Brewing Co.</a>"
                ],
                "photo_reference": "CmRaAAAAvXMGudHGr2zHFQEehbVOB8jpJfHfAJjQcHiRUC8e32H2CERn1daFTvb8bzWjeYiy5Ct64_TvB32na3psRYWYMis3kprN_N2z7eWm5m9VY4DoMNPVhr1jFczZLRyslfA8EhBGk2-oBoqBiiKftuUpCLYtGhRtauiWgTJOFvgfd3w_AeZi2sCu_g",
                "width": 3872
            },
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107206440235676358501/photos\">Myles Moriarty</a>"
                ],
                "photo_reference": "CmRaAAAA2yI-DZlWFO1TOR0UG5RfAmhgrG-NIDa6yGAIiwhObsOIu1bS583Y55mxbaRyxsQyPkgMsQ3LCXcj7KtUNsYo5zuyIWbvdrvvzkI2hozPV1sai5LwJPURusKFWh4uy6DvEhBGxTcnQryzb4G2FEHINAyiGhR9e15CxQ6l0f_qRFJEyUr_wgKsxA",
                "width": 4608
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101616137020660913352/photos\">Andrea Ragusa</a>"
                ],
                "photo_reference": "CmRaAAAA9cfARtNbvamJVUuWtiJE6QcjzDGTaqqRYJQsM6-eX70Y21K2zZDd5kvy-XW8E1hVSScO-Wm_p2GkbdNyaKF8ui42XtxVzfsKzws0vFtK9sk4GqryQYCBTngmxv6eMNklEhAu7pVTAW1nkONVwlYxatVeGhSlx0QGG9_05JrYRrSPj5JmN9fPJg",
                "width": 4032
            },
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105871556740216723299/photos\">Rick Murray</a>"
                ],
                "photo_reference": "CmRaAAAADKeblepvY4mFirY_GHSGFGdbC8LJWzVt9ohRj4yVhTHOIHT0E7j9RmbQEseMQDfAG-_-Nn_cHhpMQCVLxIcD4n8VdwqbaeAQ8mwsGzvGJjgZI-OAofvc-Edu45lA3mYMEhCGrXeMhh2I2WQ9NjdTPyBKGhSb7WX36Kfk9FUSwb0d4h7KaANTpA",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107785233128995890966/photos\">Joe Darden</a>"
                ],
                "photo_reference": "CmRaAAAA1WtSjpF6uspX1KW_BL2I5wHfCzEzHMRyRmOi1vC64g4rT1QV9CY4IAFrdFpIyBh2EiDgTe_vK8Pd9bMpTirlMxQHMeFIpkqwGwD5HCafl8crXkwk3QrJsXsZO7n-kySZEhCua9EIGdAMVYO5lBmlQfjHGhT28dmqUp9yswzXhxNqnUqHl3L2fw",
                "width": 3024
            },
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107206440235676358501/photos\">Myles Moriarty</a>"
                ],
                "photo_reference": "CmRaAAAAGLfy2GLTPhqmGOrUUlmmK3Pva2-BGYnnzjSf9BRMxKRTGO1xMQ4p4ghmpWhYH8i-NqvekLPBBC1Cx8eBNhp9sYItbjZN67zZ0LCjwmo_1FWvG1DlSwXmuc0WB5iFylnLEhCBpbAA3ayK87cYisCMBGaIGhTPhiiVDipsx2jtFHMgy2UvypDQgA",
                "width": 3456
            },
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105871556740216723299/photos\">Rick Murray</a>"
                ],
                "photo_reference": "CmRaAAAAyr6Hd0Y0aT7o4ARvgQ0CdpUYOS_q16qO2RbbAZ2Jxll4-BF8ceqCosABq-dWAykEmQAgxVbUcUgss5sDuuXCcP4hDmY7F3lBQppp_F92qFau6cxri_HWGnesM_Jn09KbEhDwIsvvLDGy0Guk4LvkCD84GhQQ2Wczh1xWjavcivflkg0VBrOK_A",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107785233128995890966/photos\">Joe Darden</a>"
                ],
                "photo_reference": "CmRaAAAAQNN5xwHY4jhDEUuQRwIcW4X2OJzS9BI7o31yMdy4rKeadf1JBsE0B2A6LN2NsObhacuMdp_XNB1tojMastSKYa7HTZ2UWvOP9AtgJOEHP_K9EqkhGXWpWXvE907RJWGPEhBCzsL-nBlXnJoRLqvHbgENGhRsDL1fs0R3NrA8KSUVQSE7l7T3sg",
                "width": 3024
            },
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107568792307011911849/photos\">Nicholas Donovan</a>"
                ],
                "photo_reference": "CmRaAAAAU9SpPJqxBucEXG9LSztDjyR5Db78unh4EXfCDsd0i_P8VW943ucMCEiObhi5chGsDakZ2OXq3XzYKvUR9eUeut4fqT31qVfFmpaMkqzkRdU324nsvv9RthDBTKWY76pwEhACs09pEVvtC-plcfqpUW9eGhS1pIH0qrvFXwHc9lBQWBr5V9QPXg",
                "width": 2992
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101335434393104449973/photos\">Eric Keskula</a>"
                ],
                "photo_reference": "CmRaAAAAeVRAs3anluZLK8fhPyFh0qrEgqVwwBm9zGgmtmSLZNy8QTykZtB-nPVNGV3sXYJpQc36IBWL31DYBJ65tVRr6FMn1mmBfoWhimP1r---x8RnefhmdWN3Bx76-WZtCxacEhBnuv8Lm0cKjPtBDLVYAwMMGhRXH2fxIxFrMDMSfKVwTlwgzdDrow",
                "width": 3024
            }
        ],
        "reviews": [{
                "author_name": "Adam and Amity Kulis",
                "author_url": "https://www.google.com/maps/contrib/106089874262694394549/reviews",
                "language": "en",
                "profile_photo_url": "https://lh4.googleusercontent.com/-6F6u8yIqnT4/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfw8F0HATTivxTxj8R07FvtHOVSaOg/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 4,
                "relative_time_description": "a month ago",
                "text": "Don't let the exterior fool you, this place is gorgeous inside. It is very clean with a fair amount of seating, although I could see this place being super busy on a summer weekend. The pretzel was delicious and the rest of the food coming out of the kitchen looked great as well. And of course the beer was great with many take home options.",
                "time": 1517527618
            },
            {
                "author_name": "Joe Rogers",
                "author_url": "https://www.google.com/maps/contrib/101414166949270095006/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/-ih8ttUrq57E/AAAAAAAAAAI/AAAAAAAAAQE/Zjg7Bu7Z9hY/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 4,
                "relative_time_description": "a month ago",
                "text": "Good food, and good beer.  It's a tasting room and not a romantic dinner.  Keep that in mind and you probably won't be disappointed. The service was excellent,  and I really liked everything we had.",
                "time": 1515957940
            },
            {
                "author_name": "Jon D.",
                "author_url": "https://www.google.com/maps/contrib/116232620388228997150/reviews",
                "language": "en",
                "profile_photo_url": "https://lh4.googleusercontent.com/-GY1cb-hpxEw/AAAAAAAAAAI/AAAAAAAAAt4/ssqkHyeOjYk/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
                "rating": 4,
                "relative_time_description": "3 weeks ago",
                "text": "Good beer. Needs more parking especially in the winter because their plow guy piled snow in four spots. You can park out back in the delivery areas.",
                "time": 1518292626
            },
            {
                "author_name": "Rich MacLean",
                "author_url": "https://www.google.com/maps/contrib/106440759832137565536/reviews",
                "language": "en",
                "profile_photo_url": "https://lh6.googleusercontent.com/-KLeCsW_YYUA/AAAAAAAAAAI/AAAAAAAAAIg/4ZMV6QPkEu8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 5,
                "relative_time_description": "in the last week",
                "text": "Fantastic beer! Aside from a stellar selection of hop forward beers Stoneface has delicious German style offerings like their Gose, Berlinerwise Raspberry and Blackberry and an Helles IPA fusion license to IPL. Their hop forward beers are stellar and stand out in a sea of hop focused competition. In addition to the great beers their food offerings are great gastropub fare! Their pretzel was delicious!",
                "time": 1520099243
            },
            {
                "author_name": "John Hieber",
                "author_url": "https://www.google.com/maps/contrib/113152653755622099541/reviews",
                "language": "en",
                "profile_photo_url": "https://lh5.googleusercontent.com/-haXfRx938Ug/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyn7a1Spo8TE-Zxrwxu7YOuT6F3YA/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 5,
                "relative_time_description": "a month ago",
                "text": "Stoneface has the best set up tap room. Food...not just bar treats, great choices of beers, friendly employees who know the beers and patrons who treat each other like family. We're frequent flyers here, coming from the Northshore of MA. to visit.",
                "time": 1516496931
            }
        ],
        "url": "https://maps.google.com/?cid=3810643628520741652",
        "been_there": false,
        "weekday_text": [
            "Monday: Closed",
            "Tuesday: Closed",
            "Wednesday: 10:00 AM – 8:30 PM",
            "Thursday: 10:00 AM – 8:30 PM",
            "Friday: 10:00 AM – 8:30 PM",
            "Saturday: 10:00 AM – 8:30 PM",
            "Sunday: 10:00 AM – 8:30 PM"
        ]
    },
    {
        "details_key": 15,
        "brewery_id": "56748886ff66445e3b5cf01c80373e400186c74e",
        "brewery_name": "Neighborhood Beer Co.",
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "latitude": 42.99415,
        "longitude": -70.971813,
        "place_id": "ChIJt1oF-kPu4okRFGb0kfm30CA",
        "rating": 4.8,
        "vicinity": "156 Epping Rd, Exeter",
        "saved": true,
        "full_address": "156 Epping Rd, Exeter, NH 03833, USA",
        "phone": "(603) 418-7124",
        "num_reviews": 5,
        "website": "http://neighborhoodbeer.com/",
        "open_now": false,
        "photos": [{
                "height": 3840,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116575864961947638871/photos\">Neighborhood Beer Co.</a>"
                ],
                "photo_reference": "CmRaAAAAr4Phl9CTBEGG2oOLcCJYTtQrESa1CwuKEFcvGgjv_pbrj5NscXn4mEPAEbkAK2nUHEQ12iIaNLCzadOLv20tGTO4jwEuMybGbMZkavl-oU_XXB1SncxDvIbx0MgKr_bVEhB5EQr5sfc7izdYrfF72pEkGhSFlRQ7AymnLNZ1mY0ExbxvuoeEXA",
                "width": 5760
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111233672772518994579/photos\">Jason Alström</a>"
                ],
                "photo_reference": "CmRaAAAAkvUnZ5lhX7YEUA6DyljSI_qbJVvvSJtHNVI4SHJw10NESBZHj23lJ-x3zYyCKwC-HhBMQzA0FlVF3qbRu3T0I4_xxGKIx6h6K2kss98aFlzX2TMoLm3CDuZZmQ5zjvRgEhBLivMqSC1axG2b3HrTgJ87GhSRWCxcvtSv9tyMLUabcOU0rIgnrQ",
                "width": 3264
            },
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116575864961947638871/photos\">Neighborhood Beer Co.</a>"
                ],
                "photo_reference": "CmRaAAAA_JSb1Cj9FAB6MdJc8TVHEAf9Eg5WJiSVneY_Qxfjvjmo7DNjGqteT9Ex5IBB25jjyPJ0X0wbGuLBo3r61ojY_W0UTm_IkkNxl5O0365eNgf4vNL8WsrrBlmiVZIztqWOEhBL0dPjiZechTe4jooClKsgGhSayiFretu9NEitRR9eAtKkyaS7Lg",
                "width": 2048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113230576734730121764/photos\">Melissa Currier</a>"
                ],
                "photo_reference": "CmRaAAAA1XuwqIEiMqM-9YPAC4Nh0Uwq8s0Q5GqDkHTwV33m3eijDSTJKjf7de9AdelJsocqNR5EMPSVK3J05RNxA6HJ58SnONWmwUt9VvWsAXW7P5bM5yVifqRgmAShdrduWUr5EhAOjW0X2GGID6tNsdTAfvhEGhStF1rJKpnPoqpF3t-tS_rkoPzraA",
                "width": 4032
            },
            {
                "height": 4008,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105941923020876992777/photos\">remy michaud</a>"
                ],
                "photo_reference": "CmRaAAAAq1Iso2Hv2zSLl7KjaAANDGGljJWP7j8OeeXC7PgnSSMJmLo2HTZ7wyTODy3xPwm1iGtPeYy3pAsbguyf2adL2N-baKQzg468ZxCKHTK61onUaxG3SXWKe29ec011LCraEhCHhowdHaIUpjGHvrEnJi3DGhR03SQiZ-HTLOklelVmEWE1TifihA",
                "width": 5344
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104030379261431940164/photos\">David Allen</a>"
                ],
                "photo_reference": "CmRaAAAAhvBCa7puGu2DZrH5C8U7Is9Jx-dK6jGpvZc9onCqaoXAu4lxHWizdVnGaKFLRg8MmZhYKeSu_6WnwHkmT0FpGSIShrzySDcjc4RusCSgoWR1YKMbJvPaOfnG_KhwLplhEhBgAezbAsOayVv27kUClu8zGhRTu-qGEE6lOJQvmHvloLG2Awwh2A",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102165813671656039170/photos\">John Snedden</a>"
                ],
                "photo_reference": "CmRaAAAAtA0hpmi6dV3uGXCpC2E47QdKmV3YNvyydVORLaOMqZHQQlpg_EfH4q_3OymotNSLn5yPRsMoNJBuW1Z_CNNyIz4TX5bcShiloRLC89UvdUPVXQSjg0tA8XBFrZpjv1dmEhCxlUyTfXKqPFuImMIL19CFGhQ-Mas7ilUxbV4waslYSiDF9DxSgA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115232604102986969553/photos\">Shayne Greene</a>"
                ],
                "photo_reference": "CmRaAAAAtk6H3lpS7bFYKVUoqW9H-wxl4ydTEemUhSs-Sj20MNhpHGOAkIIengrue9ByBFJy80EhGm8o4k3jhSxgBSEZvRRvbQKV9m70ukaEjZftKojrDWMl5CkLLKi6yDfJYHbYEhAG0x9lmSIv5FHEzUM40985GhTJv1lE6fGgeLBiLEpPzVdoijy3hw",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117898275255290550079/photos\">Chris Williams</a>"
                ],
                "photo_reference": "CmRaAAAAuKfbn3VfbjI_mLC3dXFN0ishRB17xv21qUxrkeEWsn_QW7MXpwX_lJzIqLFR1IHLhxeQpApZeUM-zLgCPmO4IrVMwe80826Jc-sF5T40mLjZyhoM8ZQoKRtde0bwSDKOEhAU-G0KRzxZ8Bdpxr1OA1_TGhQHbniBGgpYlGuYmgHNyoefI5Y4vA",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104700167649883586202/photos\">Bill Costello</a>"
                ],
                "photo_reference": "CmRaAAAAXA8S5YqD5felabJ5N6oNKR1gvjxHgOLbPqMyWxNBK3MRXTjGd1LYqnuODXj3KVcEdW2SeiAenxH67wQFdc-sbHxBq15Ho8vYCwlssub4ajBxSxddfxMykXoHCHNSAuvNEhBCSlyBvU1SomeUb7eK-mzBGhTm8DPbdEi442Sb5Hw8XCz5HDbuQQ",
                "width": 5312
            }
        ],
        "reviews": [{
                "author_name": "Jacob Downs",
                "author_url": "https://www.google.com/maps/contrib/109074680459707933017/reviews",
                "language": "en",
                "profile_photo_url": "https://lh5.googleusercontent.com/-tOrI1vg7IlQ/AAAAAAAAAAI/AAAAAAAAADU/R84nhrQkn5I/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
                "rating": 5,
                "relative_time_description": "2 months ago",
                "text": "I had a great time. It's a nice little place, the grilled cheese was great (especially my fiance's). The prices were very reasonable and we got great service. The music was good, not too intense, but we'll done and not boring. I'm really not a beer person but I liked the Hallowed Hammock. I would definitely recommend swinging by with some friends.",
                "time": 1513907827
            },
            {
                "author_name": "Shayne Greene",
                "author_url": "https://www.google.com/maps/contrib/115232604102986969553/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/-GVT1bw2BQww/AAAAAAAAAAI/AAAAAAAAARg/kM3joVlRpas/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 5,
                "relative_time_description": "3 weeks ago",
                "text": "Best beer around. A great variety. Also the Granny Clampett is to die for. So delicious.",
                "time": 1518468200
            },
            {
                "author_name": "Jerome Brown",
                "author_url": "https://www.google.com/maps/contrib/106033120616066042978/reviews",
                "language": "en",
                "profile_photo_url": "https://lh6.googleusercontent.com/-vPNAIo9Z-NY/AAAAAAAAAAI/AAAAAAAAAkc/tcwFJu9DpAQ/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 4,
                "relative_time_description": "2 weeks ago",
                "text": "Strait forward micro brewery turning out really good beer without all the hype.",
                "time": 1519053924
            },
            {
                "author_name": "Bungles Danforth",
                "author_url": "https://www.google.com/maps/contrib/117323564131713340004/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/-uBTG_j-6gC8/AAAAAAAAAAI/AAAAAAAAAb4/dwMUcvwLnVA/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 5,
                "relative_time_description": "7 months ago",
                "text": "The beers were fantastic. The takeout selection was also good. Had the soft pretzel. It was delicious and the pub cheese it came with was 5-star worthy alone. Also, the bartender was from Havertown. Always great meeting someone from my home while on the road.",
                "time": 1501333911
            },
            {
                "author_name": "Tim Duggs",
                "author_url": "https://www.google.com/maps/contrib/102944779369264326514/reviews",
                "language": "en",
                "profile_photo_url": "https://lh4.googleusercontent.com/-s0SbG0g3WEk/AAAAAAAAAAI/AAAAAAAAAow/HgUvBh_itn4/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 5,
                "relative_time_description": "5 months ago",
                "text": "Had a great time in a clean and climate controlled environment. I especially enjoyed the lager beers including the märzen.",
                "time": 1506382171
            }
        ],
        "url": "https://maps.google.com/?cid=3810643628520741652",
        "been_there": false,
        "weekday_text": [
            "Monday: Closed",
            "Tuesday: Closed",
            "Wednesday: 11:00 AM – 8:30 PM",
            "Thursday: 11:00 AM – 8:30 PM",
            "Friday: 11:00 AM – 8:30 PM",
            "Saturday: 11:00 AM – 8:30 PM",
            "Sunday: 11:00 AM – 8:30 PM"
        ]
    },
    {
        "details_key": 5,
        "brewery_id": "9dd12b9137535c51ee442fdbb61ca8d19181c1cf",
        "brewery_name": "Earth Eagle Brewings",
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "latitude": 43.079052,
        "longitude": -70.759492,
        "place_id": "ChIJ87Wd-gu_4okR0cbn_YBXYoM",
        "rating": 4.7,
        "vicinity": "165 High St, Portsmouth",
        "saved": true,
        "full_address": "165 High St, Portsmouth, NH 03801, USA",
        "phone": "(603) 502-2244",
        "num_reviews": 5,
        "website": "http://eartheaglebrewings.com/",
        "open_now": false,
        "photos": [{
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115886611651670264121/photos\">Matthew Bacon</a>"
                ],
                "photo_reference": "CmRaAAAAabqot-3-ECMG2mGYgSnac77ibKQCT7GcFy-UsAL7hh_SYv4ih7YQ8uyQ8OYgqjacaFHW3xRgNb-6ZwBSVDmdu06wmw6ZCGvsddyxafk6KjNwMc3cLd9DoELoNTWDD8gjEhBDK9rBGgWuff1LqOKQiGG3GhSlHM8o8MUVTnqOLDsAJfQMA7KWWg",
                "width": 4032
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101786264550949034416/photos\">Tom Eldredge</a>"
                ],
                "photo_reference": "CmRaAAAA9FOeP-zg_wcNGmARv2zYpTRVEPrU89m3OS6NDgyyVqzMV0odfHBMqOB3KheyEydmnhM5Du7zXV8lpRYnDTGp1wgSWMgdEuDVBeKxaNxdQc6rm35AocRuCIOXUE8uCNoiEhCOVpubZqQt_zuFmbrDHm3gGhTtI606Qm6OJRKLMz_C7_tOcOJ5Mw",
                "width": 3036
            },
            {
                "height": 2432,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116856081158615446930/photos\">Harvey Bornstein</a>"
                ],
                "photo_reference": "CmRaAAAATiTcJtfwla5J60gxoKUxbUY6wNW3wklx2x7-9poeqBEJVwiwo1i5A2RWkqqDh7My-tQk3ElJcieUvxkhY-eYYHaZTGOXmEy5xVDIy1i704wvvXlenycQLlf8r3JcAiZ5EhA1ePz_Z6IzIJrQZZgbC8vcGhQWhmZG9ZuG73JpsM1Jv027KWn4-w",
                "width": 4320
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105409265342099614788/photos\">Benjamin Brown</a>"
                ],
                "photo_reference": "CmRaAAAAN1P4S3lv9VRuO8rtE5xupp5272a8Oor0A_7th1-Wo2qQNR-k67mO0soHrQKLhJov__PUn10VGbwQZ2qu7nyDxCBBH_3rGPOYngnqIKXgHSuWhfSdVDv0i02SJvc9BVu9EhDjJ0gOcm63AgMludum3JV8GhQLMvpM_2Xpj047D1Fy_m--x0pd0g",
                "width": 4032
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107753136370457218699/photos\">Bryan Peretto</a>"
                ],
                "photo_reference": "CmRaAAAABrPBm0C80JSL9FvIbn315DMg_oZXtJhtLTUt1WOZ-m5JP07EUA-r0XV70MTcpcb_XyovghS4GV97tL1JwJqbyu9x1F6lQfqxGlUa4oNeMhi5GBKVKsbUV-AK7aScBZdYEhAt2MmWf2dntTKFIBrXA-HwGhRd_tCz_N7HWo1aYrV9R9UQfdoP3g",
                "width": 2448
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117475803772172236382/photos\">Clint Trudeau</a>"
                ],
                "photo_reference": "CmRaAAAAgkkR5-Ns0Pm5gHYRmuQ0ioZqbzvmW4H82PzzKa21wIBZpIoREtckIQWvuddChLsq4vh_rzuu34y3aigL3cP2DxPbINaij3coBwknEa2SsZAxxdTTmgTHNo5gDMv99Yi5EhAs_37RJDXEAbXAw_od1utoGhRUdvs67RS85QHdc8jbRnCXQhzL7Q",
                "width": 2448
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105190280791436727097/photos\">Mars K</a>"
                ],
                "photo_reference": "CmRaAAAAYYAoBjgamOdhVdXAwGNk7UWSEgrPcONwmC_yQVEzYAXjOju9F3l9AWi8xHlPdanWLsbIfH3fDBLm8rsCdRznrGk1dXy_MM0sOtZG9RK7g2s45wcfpRP1uZy21BRXpFOcEhB-qFW0CvmnPnNp1MPAkFRAGhSWHT-HkGHPdrD-7FYconobWE65Kg",
                "width": 5312
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112542960003237915834/photos\">Tim Smith</a>"
                ],
                "photo_reference": "CmRaAAAAgAvXj4AmlpGwBiJrKccDZsuhjdxXLN3nIUJm5mbMHrA9auX6s1P735w__4ZwxTzM52iL-uFnHXF4zxzQ8yzTI_pkMOP-f9OwyI6yfYCkyC-TdHuMnnsWmQP9v6lmbITIEhBxPj40626UIM4GUZRSSz8fGhRMKB-LwB8MvtWNhN0q-sgXby-tKA",
                "width": 3264
            },
            {
                "height": 3561,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107162821238826729663/photos\">Ian Logan</a>"
                ],
                "photo_reference": "CmRaAAAAAk9Lr9x9jopPaEr29w2cvMsX3zc2I5h3JZk754EibBgC7CptIl7A6gjOutkkyXKpuQ8-GV1qiCvmiEL7QFQ6z-4IuESw40u8wmYKRSRPmVvZGp3n4DGtbYSMICdfsTO4EhDnhmtR7fZN8xfJnpWFTYrAGhQX2RwkeTEr-VuqvdkiC-pu0o54wg",
                "width": 3088
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114985727082953678866/photos\">Tillie Tillie</a>"
                ],
                "photo_reference": "CmRaAAAApga_fzl86IjOzxNLupGHoaQoTbr3oORFcVtsZYWkrr_krS4XnCgdGzZGvW2VmoRfprM2KF6eW0pPmY-NprlXyv4YfKb0yu4UbJCPp9118K8FlnHDJLr1r2lvhRnK-1oVEhACZrxUaQth9F_hjPKUaDCFGhStg3PY2gr60pHi3VEm2xsKqnqI3g",
                "width": 3024
            }
        ],
        "reviews": [{
                "author_name": "stephen gillissie",
                "author_url": "https://www.google.com/maps/contrib/104916549063860131324/reviews",
                "language": "en",
                "profile_photo_url": "https://lh6.googleusercontent.com/-HravIsUJrxI/AAAAAAAAAAI/AAAAAAAAASo/PGENv_mszl0/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 5,
                "relative_time_description": "2 months ago",
                "text": "Super cool spot. Small (maybe 30 seats), low key, and cool design on the inside. There is a small food menu, I got the pretzel, which was really good. Most importantly the beer is great. The variety is nice from red ales to stouts. Definitely stop in if you’re in the area.",
                "time": 1515182051
            },
            {
                "author_name": "Meredith Raphelson",
                "author_url": "https://www.google.com/maps/contrib/108688585575141863769/reviews",
                "language": "en",
                "profile_photo_url": "https://lh6.googleusercontent.com/-YPiEmmw-O30/AAAAAAAAAAI/AAAAAAAAAas/7lgu4ph_Yrs/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 4,
                "relative_time_description": "2 months ago",
                "text": "Visited while staying in Portsmouth for a few days. A cute small scale brewery that's really good. Definitely not a big name brewery, but their beer is just as good. Recommended to go her by hotel staff and it was great. Servers were super friendly. Visited in June 2017 and was kind of hot inside to sit, only downfall. However the beer cooled us down!",
                "time": 1514591265
            },
            {
                "author_name": "Scott Spencer",
                "author_url": "https://www.google.com/maps/contrib/104806655581197484392/reviews",
                "language": "en",
                "profile_photo_url": "https://lh5.googleusercontent.com/-wHEzx0nEI_w/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfzlr50meAbyMU6skP2W1oSuwcGd2Q/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
                "rating": 5,
                "relative_time_description": "a month ago",
                "text": "So many choices for craft beer in the area, so I chose this more or less at random...glad I did. Wide variety of styles, including one I've never tried (gruit). The six beers I tasted were excellent. Creative menu (had a duck pastrami sandwich). Really nice vibe. Full bar, unlike many tasting rooms.",
                "time": 1515783172
            },
            {
                "author_name": "Ronald Dixon",
                "author_url": "https://www.google.com/maps/contrib/104026887887966944603/reviews",
                "language": "en",
                "profile_photo_url": "https://lh5.googleusercontent.com/-gxkyIBU_o58/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfwPwsVynYVLttyHEvf1wEWPwkRUSA/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 5,
                "relative_time_description": "in the last week",
                "text": "Great place for unusual beers.  They always have a great guest tap list too!  Make sure to bring your appetite.  The food is fantastic!",
                "time": 1520379767
            },
            {
                "author_name": "Benjamin Brown",
                "author_url": "https://www.google.com/maps/contrib/105409265342099614788/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/-gaO-O3M6e8k/AAAAAAAAAAI/AAAAAAAACtI/3pC3fE787Yc/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg",
                "rating": 5,
                "relative_time_description": "in the last week",
                "text": "My favorite place in town. It took a while to get a seat cause it was so busy, but it was worth it. The bar staff were really friendly and helpful, and knew their beer knowledge. I got a flight of their non-IPAs, and they were all delicious, and very different then your standard beer. It's like drinking some of the Dogfish Head experiments. Ghost Ship and Hibitchkiss, I don't think I'll ever have anything as unique again, and they were unique in a good way. The food was delicious as well, with a bowl of hearty chili crusted in cheese to warm me up on this winter day. The What the Duck sandwich, oh man, duck pastrami is sooo tender and flavorful, it's a must try. I really enjoyed my lunch here!",
                "time": 1520118740
            }
        ],
        "url": "https://maps.google.com/?cid=3810643628520741652",
        "been_there": false,
        "weekday_text": [
            "Monday: Closed",
            "Tuesday: Closed",
            "Wednesday: 8:00 AM – 8:30 PM",
            "Thursday: 8:00 AM – 8:30 PM",
            "Friday: 8:00 AM – 8:30 PM",
            "Saturday: 8:00 AM – 8:30 PM",
            "Sunday: 8:00 AM – 8:30 PM"
        ]
    }
];

Breweries
    .remove({})
    .then(() => Breweries.collection.insertMany(brewerySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
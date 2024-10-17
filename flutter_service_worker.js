'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "03dac40aad6443a71f1d78f3e87f22bc",
"version.json": "65be61b80547e843a570542f3e681542",
"index.html": "619386dfff142407062747d03fb36aee",
"/": "619386dfff142407062747d03fb36aee",
"main.dart.js": "cfbd19d646a23915712db482b89c6c64",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "3e42272962a18211443661357153b575",
"icons/Icon-192.png": "4a9bbcffa8354f328afe09c2c6942093",
"icons/Icon-maskable-192.png": "4a9bbcffa8354f328afe09c2c6942093",
"icons/Icon-maskable-512.png": "1aa2b16f2ad3d8e4f3e6dc6b21e37844",
"icons/Icon-512.png": "1aa2b16f2ad3d8e4f3e6dc6b21e37844",
"manifest.json": "0c710a3f0dc68ea2ed50e47738c4ec20",
"assets/AssetManifest.json": "4365ed197ab740aaf4021585324dac8f",
"assets/NOTICES": "00e800a1b70aa6e6fa75c741faa05bb5",
"assets/FontManifest.json": "59be54d145b32ebf0412cd3aa35d153f",
"assets/AssetManifest.bin.json": "6ef566ce1cf3fc17a1779b42a4472c61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "501db0fce69b5c727f6e59b93146609e",
"assets/fonts/MaterialIcons-Regular.otf": "ec616861b3e58fcf9af03b978eb17639",
"assets/assets/main_screen_images/asakusa.png": "ada56bb9c3725fed3ce0425c9483a4cc",
"assets/assets/main_screen_images/kakaotalk.png": "97fc6ba67672b0745208840575378fcc",
"assets/assets/main_screen_images/akihabara.png": "2443ca51985c567424c67eb280d8010c",
"assets/assets/main_screen_images/disneyland.png": "959e1be72f6fae25f0778a77726c2a7a",
"assets/assets/main_screen_images/Phone.svg": "e36d9d754972499c4a4660be32861e5d",
"assets/assets/main_screen_images/odiba.png": "9c3e1d481fff5adcd2615209c6a8da63",
"assets/assets/app_bar_icons/travel_icons/leftcare_icon.svg": "85437170297974c9a1d8ca36923af5eb",
"assets/assets/app_bar_icons/travel_icons/map_icon.svg": "f73fa2f5a08a4054b257017f7a7e95e3",
"assets/assets/app_bar_icons/toggle_on_icon.png": "564ebb58bad0d0b610e830a77985ce1f",
"assets/assets/app_bar_icons/map_icon.svg": "1a17a3287a274444e82a939c51f43696",
"assets/assets/app_bar_icons/toggle_off_icon.png": "d51358a734d5590bddc88a042ca926b8",
"assets/assets/app_bar_icons/phone_icon.svg": "ec6ae84c647090142143e82cf2733360",
"assets/assets/bottom_nav_bar_icons/home_icon.svg": "5d28f5a4ec1900bd7e78c0264764da02",
"assets/assets/bottom_nav_bar_icons/place_active_icon.svg": "0af51b3152950b03b138dcf1e3fd6917",
"assets/assets/bottom_nav_bar_icons/map_icon.svg": "7c42115f4877afc59025cf90bd26f445",
"assets/assets/bottom_nav_bar_icons/tool_active_icon.svg": "ba7fb2b20085cf3fcf7e1ca3cc8fa11d",
"assets/assets/bottom_nav_bar_icons/tool_icon.svg": "6e43f7987e79af1b2bc21cf8a8a61679",
"assets/assets/bottom_nav_bar_icons/map_active_icon.svg": "7f9f530c9c153a597fb888e688396fb9",
"assets/assets/bottom_nav_bar_icons/place_icon.svg": "d555f85f015d56c82fd123f9daa6e8e4",
"assets/assets/bottom_nav_bar_icons/home_active_icon.svg": "6e0db02ec557998c342464a655837caf",
"assets/assets/nation_images/usa.png": "7bc4fe5b20df2d2071fb5ef495835ae4",
"assets/assets/nation_images/korea.png": "a8c9912279468015b5e011bc1422e8f0",
"assets/assets/nation_images/japan.png": "c6ff24603dfd56f40468c18b56315d9e",
"assets/assets/travel_detail_icons/lightbulb_icon.svg": "5084b6699ce5adc0b188468723a567e2",
"assets/assets/travel_detail_icons/filled_star_icons.svg": "30672c98f38c5b26085e84d29ea71c3f",
"assets/assets/travel_detail_icons/three_dots_vertical_icons.svg": "032debbb3a8c018d2feb6e24e63b4d7a",
"assets/assets/travel_detail_icons/map_pin_icons.svg": "f3f5744299ae5d4f8c22bf5384ddedf5",
"assets/assets/travel_detail_icons/filled_heart_icons.svg": "bf7df451407d5a8567314dee1bfa2cad",
"assets/assets/travel_detail_icons/link_icon.svg": "e21fac476123a3902ed61daeb614ee61",
"assets/assets/travel_detail_icons/warning.svg": "34a9b4dab0470305b45c4c9d83cb0e9c",
"assets/assets/travel_detail_icons/profil_icon.svg": "7f7b66b487b504599233d7b62a49ddff",
"assets/assets/travel_detail_icons/time_icon.svg": "2a577aa32bc957c535420f723e2a6ed3",
"assets/assets/travel_detail_icons/mdi_star-outline.svg": "c3e176ebef2dbb1d432e531c83d38133",
"assets/assets/travel_detail_icons/phone_icon.svg": "fb06eaad0b1df42da8ecf5b0d5ef26c8",
"assets/assets/travel_detail_icons/checklist.svg": "392f6ae0c27e2bc21762fd42460268eb",
"assets/assets/travel_detail_icons/money_icon.svg": "fe1313228d445c0000ec034755015350",
"assets/assets/travel_detail_icons/crosshair_icons.svg": "28a0448c0ddea870d5b4e4009c87f35a",
"assets/assets/travel_detail_icons/addition_icon.svg": "0473eb10bc962c9f2987c88aad0a879f",
"assets/assets/travel_background_imgaes/store_images/hey_akihabara.png": "d5f12c9f04fab158d5107f275536529a",
"assets/assets/travel_background_imgaes/store_images/tokyo_leisureland_akihabara.png": "dd2e189c20f11bddb6a257e05e3720e4",
"assets/assets/travel_background_imgaes/store_images/taito_station_akihabara.png": "678b30b2d3cd315718fa66829e07ff4a",
"assets/assets/travel_background_imgaes/store_images/super_potato_akihabara.png": "efbbce944d4b6b74eac852e95416930a",
"assets/assets/travel_background_imgaes/review2_image.png": "757a775e422af6da569f58c86e66ab4c",
"assets/assets/travel_background_imgaes/akihabara1_image.png": "d45f5c59fd616dc8cf157d7d57f9b861",
"assets/assets/travel_background_imgaes/disney1_image.png": "9edca67ed819df3de0f1190c4efd8ecd",
"assets/assets/travel_background_imgaes/tokyo_image.png": "5d5f00e2904ee51a7bfd4273432b8cca",
"assets/assets/travel_background_imgaes/review1_image.png": "54575da50fd740d573b49bb2be256ff0",
"assets/assets/travel_background_imgaes/akihabara2_image.png": "7425cc06edb45ba4dbb34ff655d391b9",
"assets/assets/travel_background_imgaes/black_background_image.png": "d29e624f1b46c1c344c4f7ae8940f92b",
"assets/assets/safety_rules_screen_icons/list_icon.svg": "31c278e0af588806bea17b21740b0472",
"assets/assets/safety_rules_screen_icons/x_icon.svg": "95ebe4d0f288223946b03b5bd13f2121",
"assets/assets/travel_detail_images/hakone_pirate_ship_images/hakonepirate1.png": "27d5d493812bcaa438be2d136c2c27dd",
"assets/assets/travel_detail_images/hakone_pirate_ship_images/hakonepirate2.png": "e50f6dc18591313cfe664543a99aead0",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_detail_image_2.png": "6aedfc335d75aad316f94b5eae3c034b",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_detail_image_1.png": "3004593837e8cd59a15420f1e3226c28",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinda_1.png": "ad11963c3e734e65fff85a0823fe5ec4",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_3.jpeg": "17fb3430950a2fa1716ed6272399db88",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_2.jpeg": "15d734494325024aff555d6458423459",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_review_2.png": "986f187eb2206a2da3f44ed82cae11c8",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_review_3.png": "ff1d9f3ee4d9fb4d46d1654ece7a1f24",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_review_1.png": "ecd40656df4e44b8c68947b436f6baec",
"assets/assets/travel_detail_images/hakone_sinsa_images/hakone_sinsa_4.jpeg": "321457fd4b2f4cf8534909c84a2a3dcb",
"assets/assets/travel_detail_images/disneyland_images/disneyland_basic_map_image.png": "6674795f80f3be4749b8daa408d9b4c0",
"assets/assets/travel_detail_images/disneyland_images/disney_map_image.png": "48ce23b92050a93e913a4e93dbbae552",
"assets/assets/travel_detail_images/disneyland_images/disney_area2_image.png": "2c5b1eabb891b674d2e13c026422cc2d",
"assets/assets/travel_detail_images/disneyland_images/disney_review_image1.png": "073008910ec7c30ade3b69e25989f9d2",
"assets/assets/travel_detail_images/disneyland_images/disney_review_image3.png": "4237d33a647801969d8c54adff55513a",
"assets/assets/travel_detail_images/disneyland_images/disney_review_image2.png": "93fc06127ca0ab33020a997b80f976f7",
"assets/assets/travel_detail_images/disneyland_images/disney_simple_map_image.png": "780d936d05931996f0c94963e5bd7757",
"assets/assets/travel_detail_images/disneyland_images/disney_area1_image.png": "0abf7a5aab017df4c5f509fbf01e9cbb",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba8.png": "c57be9c835816587b348081f1de5d311",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba9.png": "4ff8a0bf0637726495273b128368c694",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba10.png": "6ef67f8feea25c59847af9ff13a29f20",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba1.png": "7bbcf7555dbef2ff979afa396879e5c0",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba2.png": "282238669740f8868d4b477319639367",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba3.png": "bee39c97f39b9a10992d119da8e3848a",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba7.png": "6d4fcabd8e81c54e68fce606e0217c04",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba6.png": "5a70e8e05d3b3429b7b1be43ff8e5cda",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba4.png": "5120c6d19744865d3dc422f6a41af982",
"assets/assets/travel_detail_images/odaiba_ocean_buffet_images/odaiba5.png": "28ab386e9f9966a460d6971ad273c0a4",
"assets/assets/travel_detail_images/asakusa_images/a1cf707ba418a4ce4c3545f8889e8ff9.png": "9833a01c64999fce6d249720dfd22e6e",
"assets/assets/travel_detail_images/asakusa_images/762afc6eb1c28fc0c9f5939ee8be7713.png": "28857933815cf371d49358c3553f84ba",
"assets/assets/travel_detail_images/asakusa_images/6d163c74c4898c7d183fccd603c445c9.png": "c69b81667d09d4c971cccfabe9a3c0f8",
"assets/assets/travel_detail_images/asakusa_images/cefec402e8ed292cfa41fe23a0ffc564.png": "b874706fd544e3cdf06c6250f9f0d2a2",
"assets/assets/travel_detail_images/asakusa_images/3156d3c70bdd4d3686c06825c25136da.png": "c9de8e580249a18a5aa3e0238e8eebc9",
"assets/assets/travel_detail_images/asakusa_images/f4b62743313a3502c3eeec5d1a0d4ce3.png": "1ca8fdcf42acde520428dbb1362d9935",
"assets/assets/travel_detail_images/asakusa_images/a54f3f6bc29bf5b47ad3cc342be3db8e.png": "49c737f4ff1d19e657b376820f731574",
"assets/assets/travel_detail_images/asakusa_images/a4da7659f5ea5855249166e2036c0304.png": "51dc3b2861347d19cffe2ece55ee3860",
"assets/assets/travel_detail_images/asakusa_images/6b7c89d6928a3aef848c3430c0180f87.png": "9b78e4d8045803e3a8ef61c437c60956",
"assets/assets/travel_detail_images/asakusa_images/93ee993350934992ec68bfcc6794da98.png": "bca7ddb86d528cad82a548063ce54aed",
"assets/assets/travel_detail_images/asakusa_images/64fe6cf41a262d4ade79227607ca22e6.png": "5829eebe811e25fd4f893293842f3c99",
"assets/assets/travel_detail_images/asakusa_images/141a0073ef55ef21c3b78b0e3d4345f9.png": "ada56bb9c3725fed3ce0425c9483a4cc",
"assets/assets/travel_detail_images/asakusa_images/2067114d66127ce8ec2b341c8ea57c08.png": "7181febde415c6da184b5f4b906d60d6",
"assets/assets/travel_detail_images/asakusa_images/ed3f8610ca953ec6a6a0849895b672bf.png": "c9de20a2fdb006676f9a28f7e4ad978c",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo1.png": "26f20083f6979cb62e152dd495ef0d7b",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo2.png": "00f50cb60d33f1f4ed5ce4487134485f",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo3.png": "9f7633e0d1cf977009f1ae5b4f3e0b4a",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo7.png": "26f20083f6979cb62e152dd495ef0d7b",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo6.png": "85b5f80b8a5b047ff0abe1770a5be070",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo4.png": "97abffc4c9a7671031d9e2206772840b",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo5.png": "fe6c5881c7ab605d541cda77eaf860a5",
"assets/assets/travel_detail_images/shabuyo_images/shabuyo8.png": "8cfa682747b62f1228bcc737fa883381",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku4.png": "1bc330652e75e864b78743abac352ead",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku10.png": "d13aaff0c8cfb2669566b8a1769fcac6",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku11.png": "2619f1152261eb3dcd839be5b6dca401",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku5.png": "564ddda09d5c0aa7826a8728e06edee7",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku7.png": "3b1ea66b6b0d3c151a436611d0f4e565",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku12.png": "55453d7ff018aa6c35396317ac9d3f64",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku6.png": "ab94188701330a2574f458e0e4f1b372",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku2.png": "05ee8b3102a99f3aea092ca35f5cbbfe",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku3.png": "460454cbd57a63ff34993d8c83d39c8b",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku1.png": "80549a091b5db714956b26c98f7d8e73",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku0.png": "ae5bebeed6691ca61fbd11fa0b188fb5",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku8.png": "0696df6e932315f46b9f5b94497b8b2a",
"assets/assets/travel_detail_images/shinjukuhotel_images/shinjuku9.png": "6eb2374350e59c01571c0582e1bc8cb3",
"assets/assets/travel_detail_images/narita_shinshoji_images/narita2.png": "82ec0beb5b072b833ac293c22f5b4206",
"assets/assets/travel_detail_images/narita_shinshoji_images/narita3.png": "d4305ce3acd93c331b34e049746ab65b",
"assets/assets/travel_detail_images/narita_shinshoji_images/narita1.png": "a71f71aed7efcc4aae6bfbfa0fe53cf9",
"assets/assets/travel_detail_images/narita_shinshoji_images/narita4.png": "cfb8cbd5753f31d236ca8f695dd6196b",
"assets/assets/travel_detail_images/narita_shinshoji_images/narita5.png": "46ff2410d4b7bd26bf12b49596d74c61",
"assets/assets/travel_detail_images/akihabara_images/d85f4a4d9f52b309e65d7e17685a16ff.jpeg": "a527921fce30fa66c9b1219503c54f8a",
"assets/assets/travel_detail_images/akihabara_images/939008f7f9449327c4e1ff58dec25ad5.png": "af60462c0ce6b1c7c5718cc0b0f0d526",
"assets/assets/travel_detail_images/akihabara_images/44fc3f64de9f7ebfa47716743209c6f5.jpeg": "3d26d79606d35745407012a43489a2da",
"assets/assets/travel_detail_images/akihabara_images/c0e53e07eeb9b55ff8f1aaaeacfab0b1.jpeg": "baf705a68194e64c83eb29b95606fc5a",
"assets/assets/travel_detail_images/akihabara_images/0e3937de40ae18ec176c40800269003b.png": "15f3b684fb9f7f43d1dadfec508ee9cf",
"assets/assets/travel_detail_images/akihabara_images/d3ead99a1c8ca512009ea2ebc41ed10a.jpeg": "77426cfec81cb20cfee5c6bbd541bde6",
"assets/assets/travel_detail_images/akihabara_images/review_images/5053e3bd9e6747dcae506f61bd8564cf.png": "ed3f7dfdba148609ead6fa83782fcad9",
"assets/assets/travel_detail_images/akihabara_images/review_images/e9aeaa21cc4c3cc07a738e0d5709e409.png": "2feedfa076798308ef00075bc41ad446",
"assets/assets/travel_detail_images/akihabara_images/review_images/acd6f3a43ca7d1c1698962028fd08b88.png": "2891737fd97bf36d89afa1d1564be66f",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred_treats2_image.png": "d9ef48d7cf410e54d38401754116f9f0",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred_treats4_image.png": "a6d5d3ce8a52bc5b9e8c2eb8f670a2b7",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred6_image.png": "f29b9dc2fcd6d7227da0eebbf631e1ca",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred_treats3_image.png": "0b361b9b8e4a0662a6561c5674dbcaa5",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred1_image.png": "e5619dea34c47f10908b648535cdfe64",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred_treats5_image.png": "848845241e7e4f85cc4891cfc3ca33c9",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred7_image.png": "858474ce8d0441f523484fa571a14fa4",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred2_image.png": "e5b8f356f9422c983babcf8e7834f8df",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred4_image.png": "3a7915f0a42971d150ae9c3fef43ee09",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred_treats1_image.png": "beaa8b2bd09a63c33634ee724a6756dd",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred3_image.png": "b2c5c0e79f1484caa0a4d67add87724d",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred_app_image.png": "2d9de0c28b668a87ee70c6d358f63bda",
"assets/assets/travel_detail_images/disney_hundred_images/disney_hundred5_image.png": "7f3b544bb7d87bf3554f7273906809a8",
"assets/assets/travel_detail_images/incheon_airport_images/incheon14.png": "461baff9a0f07be839918b21214593b9",
"assets/assets/travel_detail_images/incheon_airport_images/incheon10.png": "55a81bd8f3e46ba61193449b386d7ba8",
"assets/assets/travel_detail_images/incheon_airport_images/incheon11.png": "41675b51699ece47f97cebef08dc1c20",
"assets/assets/travel_detail_images/incheon_airport_images/incheon13.png": "884f239aff190595c6d23cf3cc1e77a8",
"assets/assets/travel_detail_images/incheon_airport_images/incheon8.png": "208a662dd78ccc15ca89fedd5299b0af",
"assets/assets/travel_detail_images/incheon_airport_images/incheon9.png": "dc38305dde34af040b92626728765b2f",
"assets/assets/travel_detail_images/incheon_airport_images/incheon12.png": "f0927fa03243ebe21d7088906c11c9fc",
"assets/assets/travel_detail_images/incheon_airport_images/incheon4.png": "ee389fd7a81f5d55021cb7dadd55ff60",
"assets/assets/travel_detail_images/incheon_airport_images/incheon5.png": "a021e8a16f85a7f5dfe97626104897bd",
"assets/assets/travel_detail_images/incheon_airport_images/incheon7.png": "977b1ef3c547c67f0a3c64d3375f4ceb",
"assets/assets/travel_detail_images/incheon_airport_images/incheon6.png": "0f210ded790cd8d03d4897fff95a4087",
"assets/assets/travel_detail_images/incheon_airport_images/incheon2.png": "9e000fc748db6616cbeff8ab0791af0f",
"assets/assets/travel_detail_images/incheon_airport_images/incheon3.png": "668b5e84456c4be8d586813d75ec9a23",
"assets/assets/travel_detail_images/incheon_airport_images/incheon1.png": "457acdad6ef6730b6fb40eca523e99d8",
"assets/assets/travel_detail_images/odaiba_images/odaiba_review_image1.jpeg": "22e80ebade08a716653e3d5df74bece1",
"assets/assets/travel_detail_images/odaiba_images/odaiba_review_image3.png": "97408d0e618e869a5b2298e9b4565988",
"assets/assets/travel_detail_images/odaiba_images/odaiba_basic_map_image.png": "014b1bbe38b517ac363b334634fb125f",
"assets/assets/travel_detail_images/odaiba_images/odaiba_river_image.png": "7a120133141f4acc17e63c68b09454aa",
"assets/assets/travel_detail_images/odaiba_images/odaiba_rainbow_bridge_image.png": "7c81dabbbc4971bc72cf81121af9158f",
"assets/assets/travel_detail_images/odaiba_images/odaiba_night_image.png": "802c4dacae165a68eba70ca66457bd3b",
"assets/assets/travel_detail_images/odaiba_images/odaiba_wheel_image.png": "22b62c1d07423c4a9ce0e1cc0a99c5db",
"assets/assets/travel_detail_images/odaiba_images/odaiba_review_image2.jpeg": "e1c9f09d7d67443d878bed957237e878",
"assets/assets/logo/mydashintrip_LOGO.png": "27d4180b3c04c163ff45475797125f17",
"assets/assets/logo/dashin_LOGO.png": "f8a4113b8d69d2c4e9028b902f2c5d23",
"assets/assets/tool_screen_icons/cloudsun_weather_icon.svg": "67d3598c50d82bc3695d618accecacae",
"assets/assets/tool_screen_icons/minus_icon.svg": "5f71348dfb860922d4c48f91b0c43603",
"assets/assets/tool_screen_icons/equal_icon.svg": "b12042cc149a4080cf51d39072077fa9",
"assets/assets/tool_screen_icons/sun_weather_icon.svg": "82d65cb421298474a704bbe602c2f114",
"assets/assets/tool_screen_icons/devide_icon.svg": "8d78c1d4a3b47430dde82fc52233cb0d",
"assets/assets/tool_screen_icons/multiply_icon.svg": "9a4b30581457fb5e56ac5a3ad6a254f0",
"assets/assets/tool_screen_icons/plus_icon.svg": "16067e99789b77f59212625fa078c92c",
"assets/assets/tool_screen_icons/rain_weather_icon.svg": "73be7c0b0046bf66a054e18bf76283fd",
"assets/assets/tool_screen_icons/arrows_leftright_icon.svg": "efa078e94e94e2202f2cfdfee19c3696",
"assets/assets/tool_screen_icons/downcare_icon.svg": "fa1b0062f91f1aea1f69455160634c08",
"assets/assets/nalita_airport_screen_images/nalita_airport_information1_image.png": "7be10fa27f9e64e3b9fffe3bda5820be",
"assets/assets/nalita_airport_screen_images/nalita_airport4_image.png": "ee389fd7a81f5d55021cb7dadd55ff60",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange1_image.png": "0519139ecc965eebef2614409769f927",
"assets/assets/nalita_airport_screen_images/nalita_airport2_image.png": "31424d603151a14fe3768d4ee3e2c596",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange7_image.png": "9df09e7c5cd3e7000b56147874aec85f",
"assets/assets/nalita_airport_screen_images/nalita_airport5_image.png": "a021e8a16f85a7f5dfe97626104897bd",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange6_image.png": "7c0c87e4065e5a8d67e3bafb5376274a",
"assets/assets/nalita_airport_screen_images/nalita_airport3_image.png": "668b5e84456c4be8d586813d75ec9a23",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange3_image.png": "cacd849e4fd6df310bbcbd2930457b6d",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange8_image.png": "1f13e7e02270197384ae0a32ea007ce4",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange5_image.png": "70afce7a1076383d7d345d3e4cbae12e",
"assets/assets/nalita_airport_screen_images/nalita_airport_information2_image.png": "5f357e7ffbbea2116db6005a9cc4dc72",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange2_image.png": "5cddf9b3cdfa744b3cd8f8e57c7ddc24",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange9_image.png": "94775d15b68554f03671edd87c373dfb",
"assets/assets/nalita_airport_screen_images/nalita_currency_exchange4_image.png": "99f3aa382cd279c7853d4cc532294982",
"assets/assets/nalita_airport_screen_images/nalita_airport1_image.png": "d4a8991c7a7d6c156e413410cef2cccb",
"assets/assets/store_map_images/akihabara_store1_image.png": "e3946e3d71b2b2d84183434ffdeb17ca",
"assets/assets/icons/star_icon.svg": "75180d23d5068862e744930f34698f40",
"assets/assets/icons/filled_star.svg": "38260ad39dadfb424028b7cfee88293c",
"assets/assets/icons/hotel.svg": "66a9d16e184227021041b66aa0b20528",
"assets/assets/icons/warning.svg": "7c9533731d35ac1d218062e25707e6ac",
"assets/assets/icons/info.svg": "c2d434edc339feae767f2fa53a0afdca",
"assets/assets/icons/empty_star.svg": "9e64f339c9040be9065dd0bb24a24006",
"assets/assets/icons/security.svg": "183890a195b50073209f8dbc483ac61e",
"assets/assets/icons/checklist.svg": "44e130a984ef0dfd03193f50b1ad0cf8",
"assets/assets/icons/kakao.svg": "4e9f7cad70ff72324a178a28786e5191",
"assets/assets/icons/phone.svg": "e36d9d754972499c4a4660be32861e5d",
"assets/assets/icons/heart.svg": "63e832dc66fe594324ae9c8335659029",
"assets/assets/emergency_screen_images/emergency_screen_image3.png": "a454bd9fbcdd121b6999a4c88b8ae416",
"assets/assets/emergency_screen_images/emergency_screen_image2.png": "09debd2d7c7c30fe265997c1721bc55b",
"assets/assets/emergency_screen_images/emergency_screen_image1.png": "4ea11368056492b54a7ce8e01c71eacb",
"assets/assets/emergency_screen_icons/x_list.svg": "95ebe4d0f288223946b03b5bd13f2121",
"assets/assets/emergency_screen_icons/list_icon.png": "20a6dde0b2b3dd5088e698e2493093bd",
"assets/assets/place_screen_images/asacosa.png": "b874706fd544e3cdf06c6250f9f0d2a2",
"assets/assets/place_screen_images/disneyland.png": "1fa4c8b1ec2c5d96a5e86ddfc1f5948e",
"assets/assets/place_screen_images/star_icon.svg": "75180d23d5068862e744930f34698f40",
"assets/assets/place_screen_images/no_star_icon.svg": "c7715efff776b93a436dbb6ca4654aaa",
"assets/assets/place_screen_images/way_icon.svg": "59594543a537b225e9c16cd2fbe77fa3",
"assets/assets/place_screen_images/akiabara.png": "47711c3eddfd2e442cf44a29c0f8be86",
"assets/assets/place_screen_images/odiaba.png": "4f13d663cdf77b12ed6bc6c1040bea1c",
"assets/assets/place_screen_images/hakone.png": "501583c47b11f6d7afcc09653160543c",
"assets/assets/fonts/CookieRun%2520Black.ttf": "e34b3a3a57b661882166c48ca294f2c3",
"assets/assets/fonts/okticon_light.ttf": "a90951f55a929ef0476a63065160df28",
"assets/assets/fonts/CookieRun%2520Bold.ttf": "b01731e0798bd4242f0b2a058601b173",
"assets/assets/fonts/okticon_regular.ttf": "3b5f5af4aa673513fa0ae9cfb4870571",
"assets/assets/fonts/okticon_bold.ttf": "c783e6fc49bac76ea28feb0a004867b8",
"assets/assets/fonts/CookieRun%2520Regular.ttf": "b6c8137dd2e215ed1aba2ebfc45c93c4",
"assets/assets/trip_schdule_icons/arrow_drop_up.svg": "f3336a26b87ecba2a226b59cf8d5806d",
"assets/assets/trip_schdule_icons/arrow_right.svg": "efbc0c6b6f4009ea66a1302b43037a71",
"assets/assets/trip_schdule_icons/arrow_drop_down.svg": "ec93ed053e0fa53ab5731f6d30dfb19a",
"assets/assets/trip_schdule_icons/arrow_icon.svg": "632d9c7d57579158a1830582e206657f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

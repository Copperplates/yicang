if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$h = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/Desktop/yicang/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$g = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/Desktop/yicang/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$f = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-7920e3e0"], ["__file", "D:/Desktop/yicang/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$e = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-26544265"], ["__file", "D:/Desktop/yicang/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$d = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-card__header-extra-text" },
                vue.toDisplayString($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-ae4bee67"], ["__file", "D:/Desktop/yicang/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        ifChoice: true,
        ifSearch: false,
        ifDialog: false,
        ifFocus: false,
        ifDetail: false
      };
    },
    methods: {
      navigateToNewPage() {
        uni.navigateTo({
          url: "/pages/index/about"
        });
      },
      searchFn() {
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("main", { style: { "background-color": "black", "min-height": "100vh", "width": "100vw" } }, [
      vue.createVNode(_component_uni_nav_bar, {
        "left-icon": "left",
        "right-icon": "auth-filled",
        style: { "margin-top": "3vh", "background-color": "black", "border-radius": "146px" }
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_search_bar, {
            placeholder: "#烟花",
            bgColor: "rgba(61, 61, 57, 1)",
            onConfirm: _cache[0] || (_cache[0] = ($event) => {
              $options.searchFn();
            }),
            style: { "width": "80vw" },
            onClick: _cache[1] || (_cache[1] = ($event) => {
              $data.ifChoice = !$data.ifChoice;
              $data.ifSearch = !$data.ifSearch;
            })
          }),
          vue.createElementVNode("div", { style: { "width": "20vw", "margin-right": "-3vw", "color": "black", "z-index": "9999", "padding-top": "2vh" } }, " 我的关注 ")
        ]),
        _: 1
        /* STABLE */
      }),
      $data.ifChoice == true ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "container",
        style: { "background-color": "black" }
      }, [
        vue.createElementVNode("div", { style: { "background": "url(https://img.js.design/assets/img/6423da6731aefe4dc8e9343e.png#12aadd9d316ffbba084263d6cc9228ba) no-repeat", "background-size": "cover", "width": "100vw", "height": "30vh", "margin-left": "-4vw" } }, [
          vue.createElementVNode("div", { style: { "color": "rgba(240, 224, 190, 1)", "padding-top": "22vh", "padding-left": "3vw" } }, [
            vue.createElementVNode("div", { style: { "font-size": "20px", "font-weight": "500", "line-height": "28.96px" } }, "#热搜话题"),
            vue.createElementVNode("div", { style: { "font-size": "12px", "font-weight": "400", "line-height": "17.38px" } }, "第三期|基础入门")
          ])
        ]),
        vue.createVNode(_component_uni_card, {
          cover: "https://img.js.design/assets/img/6423db9459e732fb599343a5.png#9769dde76f7482a9944d01f805edc1f7",
          style: { "width": "100vw", "margin-left": "-4vw", "background-color": "rgba(24, 24, 24, 1)" },
          onClick: _cache[4] || (_cache[4] = ($event) => {
            $data.ifDetail = !$data.ifDetail;
          })
        }, {
          actions: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: "card-actions",
              style: { "display": "flex", "align-items": "center", "justify-content": "space-between", "width": "20vw" }
            }, [
              vue.createElementVNode("view", {
                class: "card-actions-item",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateToNewPage && $options.navigateToNewPage(...args))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "heart",
                  size: "18",
                  color: "rgba(240, 224, 190, 1)"
                }),
                vue.createElementVNode("text", {
                  class: "card-actions-item-text",
                  style: { "color": "#fff" }
                }, "54")
              ]),
              vue.createElementVNode("view", {
                class: "card-actions-item",
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.actionsClick("评论"))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "chatbubble",
                  size: "18",
                  color: "rgba(240, 224, 190, 1)"
                }),
                vue.createElementVNode("text", {
                  class: "card-actions-item-text",
                  style: { "color": "#fff" }
                }, "88")
              ])
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("text", { style: { "font-size": "12px", "font-weight": "400", "line-height": "17.38px", "color": "rgba(255, 255, 255, 0.8)" } }, "2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。")
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_uni_card, {
          cover: "https://img.js.design/assets/img/6423da3f4754de384841d7c1.png#9e6c4ff978fca5666f86a95a355d41fe",
          style: { "width": "100vw", "margin-left": "-4vw", "background-color": "rgba(24, 24, 24, 1)" }
        }, {
          actions: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: "card-actions",
              style: { "display": "flex", "align-items": "center", "justify-content": "space-between", "width": "20vw" }
            }, [
              vue.createElementVNode("view", {
                class: "card-actions-item",
                onClick: _cache[5] || (_cache[5] = (...args) => $options.navigateToNewPage && $options.navigateToNewPage(...args))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "heart",
                  size: "18",
                  color: "rgba(240, 224, 190, 1)"
                }),
                vue.createElementVNode("text", {
                  class: "card-actions-item-text",
                  style: { "color": "#fff" }
                }, "54")
              ]),
              vue.createElementVNode("view", {
                class: "card-actions-item",
                onClick: _cache[6] || (_cache[6] = ($event) => _ctx.actionsClick("评论"))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "chatbubble",
                  size: "18",
                  color: "rgba(240, 224, 190, 1)"
                }),
                vue.createElementVNode("text", {
                  class: "card-actions-item-text",
                  style: { "color": "#fff" }
                }, "88")
              ])
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("text", { style: { "font-size": "12px", "font-weight": "400", "line-height": "17.38px", "color": "rgba(255, 255, 255, 0.8)" } }, "2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。")
          ]),
          _: 1
          /* STABLE */
        })
      ])) : vue.createCommentVNode("v-if", true),
      $data.ifSearch == true ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "container",
        style: { "background-color": "black" }
      }, [
        vue.createElementVNode("div", { style: { "position": "absolute", "top": "10vh", "width": "30vw", "font-size": "20px", "font-weight": "500", "line-height": "28.96px", "color": "rgba(240, 224, 190, 1)" } }, "热搜藏品"),
        vue.createElementVNode("div", { style: { "display": "flex", "justify-content": "space-between", "position": "absolute", "top": "15vh", "width": "90vw", "font-size": "20px", "font-weight": "500", "line-height": "28.96px", "color": "rgba(240, 224, 190, 1)" } }, [
          vue.createElementVNode("div", { style: { "width": "30%", "background-image": "url('https://img.js.design/assets/img/6423def59b06204f6ad661f1.png#b7411bc65ed267448616ccedffc8dc30')", "background-size": "cover", "background-position": "center", "height": "200px" } }, [
            vue.createElementVNode("div", { style: { "display": "flex", "justify-content": "space-between", "position": "absolute", "top": "24vh", "width": "90vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)" } }, "新花样"),
            vue.createElementVNode("div", { style: { "display": "flex", "justify-content": "space-between", "position": "absolute", "top": "27vh", "width": "90vw", "font-size": "9.13px", "font-weight": "400", "line-height": "13.22px", "color": "rgba(240, 224, 190, 1)" } }, "作者：独角兽祥子")
          ]),
          vue.createElementVNode("div", { style: { "width": "30%", "background-image": "url('https://img.js.design/assets/img/6423dc57bff1bce4180d48e7.png#9fa310303820a79b43944ce19c3d53b0')", "background-size": "cover", "background-position": "center", "height": "200px" } }, [
            vue.createElementVNode("div", { style: { "display": "flex", "justify-content": "space-between", "position": "absolute", "top": "24vh", "width": "90vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)" } }, "混蛋经济学"),
            vue.createElementVNode("div", { style: { "display": "flex", "justify-content": "space-between", "position": "absolute", "top": "27vh", "width": "90vw", "font-size": "9.13px", "font-weight": "400", "line-height": "13.22px", "color": "rgba(240, 224, 190, 1)" } }, "作者：小美")
          ]),
          vue.createElementVNode("div", { style: { "width": "30%", "background-image": "url('https://img.js.design/assets/img/6423defe59e732fb59968dae.png#0418d57d850697ac07dcb8b955550061')", "background-size": "cover", "background-position": "center", "height": "200px" } }, [
            vue.createElementVNode("div", { style: { "display": "flex", "justify-content": "space-between", "position": "absolute", "top": "24vh", "width": "90vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)" } }, "即刻出发"),
            vue.createElementVNode("div", { style: { "display": "flex", "justify-content": "space-between", "position": "absolute", "top": "27vh", "width": "90vw", "font-size": "9.13px", "font-weight": "400", "line-height": "13.22px", "color": "rgba(240, 224, 190, 1)" } }, "作者：独角兽祥子")
          ])
        ]),
        vue.createElementVNode("div", { style: { "position": "absolute", "top": "50vh", "width": "30vw", "font-size": "20px", "font-weight": "500", "line-height": "28.96px", "color": "rgba(240, 224, 190, 1)" } }, "热搜话题"),
        vue.createElementVNode("div", { style: { "position": "absolute", "top": "56vh", "width": "100vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)", "background": "rgba(24, 24, 24, 1)", "border-bottom": "1px solid rgba(166, 166, 166, 1)" } }, "NFT数字藏品 "),
        vue.createElementVNode("div", { style: { "position": "absolute", "top": "60vh", "width": "100vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)", "background": "rgba(24, 24, 24, 1)", "border-bottom": "1px solid rgba(166, 166, 166, 1)" } }, "数字藏品史上最强破圈活动今日火爆上线 "),
        vue.createElementVNode("div", { style: { "position": "absolute", "top": "64vh", "width": "100vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)", "background": "rgba(24, 24, 24, 1)", "border-bottom": "1px solid rgba(166, 166, 166, 1)" } }, "#五福送了我一个数字藏品# "),
        vue.createElementVNode("div", { style: { "position": "absolute", "top": "68vh", "width": "100vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)", "background": "rgba(24, 24, 24, 1)", "border-bottom": "1px solid rgba(166, 166, 166, 1)" } }, "“头条新闻”发布置顶微博 "),
        vue.createElementVNode("div", { style: { "position": "absolute", "top": "72vh", "width": "100vw", "font-size": "14px", "font-weight": "400", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)", "background": "rgba(24, 24, 24, 1)", "border-bottom": "1px solid rgba(166, 166, 166, 1)" } }, "截至发稿前阅读量已超2.5亿人次，讨论数量... ")
      ])) : vue.createCommentVNode("v-if", true),
      $data.ifDetail == true ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        style: { "position": "absolute", "top": "80vh", "width": "100vw", "height": "100vh", "background-color": "black", "z-index": "99999" }
      }, [
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "25.75px", "top": "2vh", "width": "37px", "height": "37px", "opacity": "1", "background": "url(https://img.js.design/assets/img/6422e152634e77963d56402d.png#f4304c7f9c5740824bc23a47ab0abd2d)", "border-radius": "50%" } }),
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "78px", "top": "2vh", "width": "90.13px", "height": "20.27px", "opacity": "1", "font-size": "14px", "font-weight": "500", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)" } }, "Derek Russell"),
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "78px", "top": "4.5vh", "width": "140px", "height": "14.48px", "opacity": "1", "font-size": "10px", "font-weight": "400", "line-height": "14.48px", "color": "rgba(255, 255, 255, 1)" } }, "很喜欢你的作品，可以收藏吗？")
      ])) : vue.createCommentVNode("v-if", true),
      $data.ifDetail == true ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        style: { "position": "absolute", "top": "90vh", "width": "100vw", "height": "100vh", "background-color": "black", "z-index": "99999" }
      }, [
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "25.75px", "top": "2vh", "width": "37px", "height": "37px", "opacity": "1", "background": "url(https://img.js.design/assets/img/6422ead54e8874d2ce590f5b.png#db33345d13591d58cfdb60991ce975df)", "border-radius": "50%" } }),
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "78px", "top": "2vh", "width": "90.13px", "height": "20.27px", "opacity": "1", "font-size": "14px", "font-weight": "500", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)" } }, "动漫少女"),
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "78px", "top": "4.5vh", "width": "140px", "height": "14.48px", "opacity": "1", "font-size": "10px", "font-weight": "400", "line-height": "14.48px", "color": "rgba(255, 255, 255, 1)" } }, "好的")
      ])) : vue.createCommentVNode("v-if", true),
      $data.ifDetail == true ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 4,
        style: { "position": "absolute", "top": "100vh", "width": "100vw", "height": "100vh", "background-color": "black", "z-index": "99999" }
      }, [
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "25.75px", "top": "2vh", "width": "37px", "height": "37px", "opacity": "1", "background": "url(https://img.js.design/assets/img/6422eaeb94edb4d304930826.png#a896847d576d2a06221b8d7fa455a25f)", "border-radius": "50%" } }),
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "78px", "top": "2vh", "width": "90.13px", "height": "20.27px", "opacity": "1", "font-size": "14px", "font-weight": "500", "line-height": "20.27px", "color": "rgba(240, 224, 190, 1)" } }, "一只鱼"),
        vue.createElementVNode("div", { style: { "position": "absolute", "left": "78px", "top": "4.5vh", "width": "140px", "height": "14.48px", "opacity": "1", "font-size": "10px", "font-weight": "400", "line-height": "14.48px", "color": "rgba(255, 255, 255, 1)" } }, "可以收藏吗？")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "D:/Desktop/yicang/pages/index/index.vue"]]);
  const _sfc_main$b = {
    data() {
      return {};
    },
    methods: {
      getNovelListFn() {
        formatAppLog("log", "at pages/novel/novel.vue:96", "getNovelList");
        uni.request({
          url: "http://47.97.38.78/mall/paintingList",
          method: "GET",
          sslVerify: false,
          data: {},
          success: (response) => {
            formatAppLog("log", "at pages/novel/novel.vue:103", "success");
            formatAppLog("log", "at pages/novel/novel.vue:104", response);
          },
          fail: (response) => {
            formatAppLog("log", "at pages/novel/novel.vue:107", response);
          }
        });
      },
      toNewPageFn(url) {
        uni.navigateTo({ url });
      }
    },
    mounted() {
      this.getNovelListFn();
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("main", null, [
      vue.createElementVNode("div", { class: "bg" }),
      vue.createElementVNode("div", { class: "intro-wrapper" }, [
        vue.createElementVNode("image", {
          src: "/static/人物对话.png",
          mode: "aspectFit"
        }),
        vue.createElementVNode("h1", null, "好书推荐"),
        vue.createElementVNode("h2", null, "你有太久没来看书了，快来看看吧~")
      ]),
      vue.createElementVNode("div", {
        class: "card-top-adjust-block",
        style: { "height": "38vh" }
      }),
      vue.createElementVNode("div", {
        class: "card",
        id: "card-1"
      }, [
        vue.createElementVNode("div", { class: "card-left" }, [
          vue.createElementVNode("image", { src: "/static/tmp.png" })
        ]),
        vue.createElementVNode("div", { class: "card-right" }, [
          vue.createElementVNode("h1", null, "烈狱天女王"),
          vue.createElementVNode("p", null, "2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。"),
          vue.createElementVNode("div", { class: "button-wrapper" }, [
            vue.createElementVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => {
                $options.toNewPageFn("/pages/novel/detail");
              })
            }, [
              vue.createElementVNode("span", { class: "icon-wrapper" }, [
                vue.createElementVNode("image", {
                  src: "/static/icon1.png",
                  class: "icon"
                })
              ]),
              vue.createElementVNode("span", { class: "label" }, "阅读")
            ]),
            vue.createElementVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => {
                $options.toNewPageFn("/pages/novel/continue");
              })
            }, [
              vue.createElementVNode("span", { class: "icon-wrapper" }, [
                vue.createElementVNode("image", {
                  src: "/static/icon2.png",
                  class: "icon"
                })
              ]),
              vue.createElementVNode("span", { class: "label" }, "续写")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", { class: "card" }, [
        vue.createElementVNode("div", { class: "card-left" }, [
          vue.createElementVNode("image", { src: "https://img.js.design/assets/img/6423def59b06204f6ad661f1.png#b7411bc65ed267448616ccedffc8dc30" })
        ]),
        vue.createElementVNode("div", { class: "card-right" }, [
          vue.createElementVNode("h1", null, "永生世界"),
          vue.createElementVNode("p", null, "李天命做梦都要笑醒了。他家的宠物，竟然都是传说中的太古混沌巨兽！他的家鸡，是以太阳为食的‘永恒炼狱凤凰’。他的黑猫，是以雷霆炼化万界的‘太初混沌雷魔’。"),
          vue.createElementVNode("div", { class: "button-wrapper" }, [
            vue.createElementVNode("button", null, [
              vue.createElementVNode("span", { class: "icon-wrapper" }, [
                vue.createElementVNode("image", {
                  src: "/static/icon1.png",
                  class: "icon"
                })
              ]),
              vue.createElementVNode("span", { class: "label" }, "阅读")
            ]),
            vue.createElementVNode("button", null, [
              vue.createElementVNode("span", { class: "icon-wrapper" }, [
                vue.createElementVNode("image", {
                  src: "/static/icon2.png",
                  class: "icon"
                })
              ]),
              vue.createElementVNode("span", { class: "label" }, "续写")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", { class: "card" }, [
        vue.createElementVNode("div", { class: "card-left" }, [
          vue.createElementVNode("image", { src: "https://img.js.design/assets/img/6423defe59e732fb59968dae.png#0418d57d850697ac07dcb8b955550061" })
        ]),
        vue.createElementVNode("div", { class: "card-right" }, [
          vue.createElementVNode("h1", null, "千骗万化"),
          vue.createElementVNode("p", null, "我见过那些腰缠万贯的人，一夜之间倾家荡产还见过那些权势在手的人，被人玩弄于股掌之中，含恨自尽官为白，匪为黑......"),
          vue.createElementVNode("div", { class: "button-wrapper" }, [
            vue.createElementVNode("button", null, [
              vue.createElementVNode("span", { class: "icon-wrapper" }, [
                vue.createElementVNode("image", {
                  src: "/static/icon1.png",
                  class: "icon"
                })
              ]),
              vue.createElementVNode("span", { class: "label" }, "阅读")
            ]),
            vue.createElementVNode("button", null, [
              vue.createElementVNode("span", { class: "icon-wrapper" }, [
                vue.createElementVNode("image", {
                  src: "/static/icon2.png",
                  class: "icon"
                })
              ]),
              vue.createElementVNode("span", { class: "label" }, "续写")
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesNovelNovel = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-9f0fb72e"], ["__file", "D:/Desktop/yicang/pages/novel/novel.vue"]]);
  const _sfc_main$a = {
    data() {
      return {};
    },
    methods: {
      toNewPageFn(url) {
        uni.navigateTo({ url });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("main", null, [
      vue.createElementVNode("div", { class: "bg" }),
      vue.createElementVNode("div", { class: "intro-wrapper" }, [
        vue.createElementVNode("image", {
          src: "/static/人物对话.png",
          mode: "aspectFit"
        }),
        vue.createElementVNode("h1", null, "好书推荐"),
        vue.createElementVNode("h2", null, "你有太久没来看书了，快来看看吧~")
      ]),
      vue.createElementVNode("div", {
        class: "card-top-adjust-block",
        style: { "height": "38vh" }
      }),
      vue.createElementVNode("div", { class: "card" }, [
        vue.createElementVNode("div", { class: "card-left" }, [
          vue.createElementVNode("image", { src: "/static/tmp.png" })
        ]),
        vue.createElementVNode("div", { class: "card-right" }, [
          vue.createElementVNode("h1", null, "烈狱天女王"),
          vue.createElementVNode("p", null, "2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。")
        ])
      ]),
      vue.createElementVNode("div", { class: "card-chapter" }, [
        vue.createElementVNode("div", { class: "card-chapter-left" }, [
          vue.createElementVNode("h2", null, "第一章")
        ]),
        vue.createElementVNode("div", { class: "card-chapter-right" }, [
          vue.createElementVNode("h1", null, "科技的诞生")
        ])
      ]),
      vue.createElementVNode("div", { class: "card-chapter" }, [
        vue.createElementVNode("div", { class: "card-chapter-left" }, [
          vue.createElementVNode("h2", null, "第二章")
        ]),
        vue.createElementVNode("div", { class: "card-chapter-right" }, [
          vue.createElementVNode("h1", null, "长生不死的虚拟源宇宙")
        ])
      ]),
      vue.createElementVNode("div", { class: "card-chapter" }, [
        vue.createElementVNode("div", { class: "card-chapter-left" }, [
          vue.createElementVNode("h2", null, "第三章")
        ]),
        vue.createElementVNode("div", { class: "card-chapter-right" }, [
          vue.createElementVNode("h1", null, "崭新的资本角斗场")
        ])
      ]),
      vue.createElementVNode("div", { class: "blur-divider" }, [
        vue.createElementVNode("div", { class: "blur-divider-line" }),
        vue.createElementVNode("div", { class: "blur-divider-icon" }, [
          vue.createElementVNode("image", { src: "/static/审核.png" }),
          vue.createElementVNode("span", { style: { "font-size": "12px", "font-weight": "400", "letter-spacing": "0px", "line-height": "0px", "color": "rgba(80, 80, 80, 1)", "text-align": "right", "vertical-align": "top" } }, "解锁更多")
        ]),
        vue.createElementVNode("div", { class: "blur-divider-line" })
      ]),
      vue.createElementVNode("button", {
        class: "button-continue",
        onClick: _cache[0] || (_cache[0] = ($event) => {
          $options.toNewPageFn("/pages/novel/continue");
        })
      }, "开始续写")
    ]);
  }
  const PagesNovelDetail = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-b6e916f9"], ["__file", "D:/Desktop/yicang/pages/novel/detail.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$9 = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:143", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow || $props.onceRender ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "D:/Desktop/yicang/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$8 = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      // 指定使用v-show指令，不重新渲染Pop组件
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:285", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup || $props.onceRender ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap,
              "once-render": $props.onceRender
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick", "once-render"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )), [
      [vue.vShow, $data.showPopup]
    ]) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-4dd3c44b"], ["__file", "D:/Desktop/yicang/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    methods: {
      getNovelListFn() {
        formatAppLog("log", "at pages/novel/continue.vue:49", "getNovelList");
      },
      toNewPageFn(url) {
        uni.navigateTo({
          url
        });
      },
      openDialogFn() {
        this.$refs.popup.open("top");
      }
    },
    mounted() {
      this.getNovelListFn();
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("main", null, [
      vue.createElementVNode("div", { class: "bg" }),
      vue.createElementVNode("div", { class: "intro-wrapper" }, [
        vue.createElementVNode("image", {
          src: "/static/人物对话.png",
          mode: "aspectFit"
        }),
        vue.createElementVNode("h1", null, "剧情续写"),
        vue.createElementVNode("h2", null, "你有太久来没看书了，快来看看吧～")
      ]),
      vue.createElementVNode("div", {
        class: "card-top-adjust-block",
        style: { "height": "38vh" }
      }),
      vue.createElementVNode("div", {
        class: "card",
        id: "card-1"
      }, [
        vue.createElementVNode("div", { class: "card-left" }, [
          vue.createElementVNode("image", { src: "/static/tmp.png" })
        ]),
        vue.createElementVNode("div", { class: "card-right" }, [
          vue.createElementVNode("h1", null, "烈狱天女王"),
          vue.createElementVNode("p", null, "2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。")
        ])
      ]),
      vue.createElementVNode("div", {
        class: "article-editor",
        style: { "margin-bottom": "5vh" }
      }, [
        vue.createElementVNode("textarea", {
          class: "article-textarea",
          placeholder: "请在此续写"
        })
      ]),
      vue.createElementVNode("button", {
        class: "button-continue",
        onClick: _cache[0] || (_cache[0] = ($event) => {
          $options.openDialogFn();
        })
      }, "上传续写"),
      vue.createVNode(
        _component_uni_popup,
        { ref: "popup" },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", { class: "dialog" }, [
              vue.createElementVNode("div", { class: "success-wrapper" }, [
                vue.createElementVNode("image", {
                  src: "/static/人物.png",
                  mode: "aspectFit"
                }),
                vue.createElementVNode("h1", null, "上传成功"),
                vue.createElementVNode("h2", null, "你太棒了！，给自己点个赞吧～")
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesNovelContinue = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-50a3d528"], ["__file", "D:/Desktop/yicang/pages/novel/continue.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {
      toNewPageFn(url) {
        uni.navigateTo({
          url
        });
      }
    },
    mounted() {
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("main", null, [
      vue.createElementVNode("div", { class: "bg" }),
      vue.createElementVNode("div", { class: "intro-wrapper" }, [
        vue.createElementVNode("image", {
          src: "/static/人物对话.png",
          mode: "aspectFit"
        }),
        vue.createElementVNode("h1", { style: { "width": "200%" } }, "绘画藏品阅览"),
        vue.createElementVNode("h2", { style: { "width": "200%" } }, "看看有哪些中意的藏品哦～快把它带回家")
      ]),
      vue.createElementVNode("div", {
        class: "card-top-adjust-block",
        style: { "height": "38vh" }
      }),
      vue.createElementVNode("div", {
        class: "draw-card",
        onClick: _cache[0] || (_cache[0] = ($event) => {
          $options.toNewPageFn("/pages/draw/buy");
        }),
        style: { "z-index": "999" }
      }, [
        vue.createCommentVNode(' <image src="../../static/画1.png" class="draw-card__image" mode="scaleToFill"></image> '),
        vue.createElementVNode("image", {
          src: "https://img.js.design/assets/img/6423da6731aefe4dc8e9343e.png#12aadd9d316ffbba084263d6cc9228ba",
          class: "draw-card__image",
          mode: "scaleToFill"
        }),
        vue.createElementVNode("div", { class: "draw-card__info" }, [
          vue.createElementVNode("div", { class: "draw-card__price" }, " $19.00 "),
          vue.createElementVNode("div", { class: "draw-card__title" }, " 千变万化绘画作品 ")
        ])
      ]),
      vue.createElementVNode("div", {
        class: "draw-card",
        style: { "z-index": "999" }
      }, [
        vue.createCommentVNode(' <image src="../../static/画1.png" class="draw-card__image" mode="scaleToFill"></image> '),
        vue.createElementVNode("image", {
          src: "https://img.js.design/assets/img/6423db9459e732fb599343a5.png#9769dde76f7482a9944d01f805edc1f7",
          class: "draw-card__image",
          mode: "scaleToFill"
        }),
        vue.createElementVNode("div", { class: "draw-card__info" }, [
          vue.createElementVNode("div", { class: "draw-card__price" }, " $22.00 "),
          vue.createElementVNode("div", { class: "draw-card__title" }, " 千变万化绘画作品 ")
        ])
      ]),
      vue.createElementVNode("div", {
        class: "draw-card",
        style: { "z-index": "999" }
      }, [
        vue.createCommentVNode(' <image src="../../static/画1.png" class="draw-card__image" mode="scaleToFill"></image> '),
        vue.createElementVNode("image", {
          src: "https://img.js.design/assets/img/6423da3f4754de384841d7c1.png#9e6c4ff978fca5666f86a95a355d41fe",
          class: "draw-card__image",
          mode: "scaleToFill"
        }),
        vue.createElementVNode("div", { class: "draw-card__info" }, [
          vue.createElementVNode("div", { class: "draw-card__price" }, " $19.00 "),
          vue.createElementVNode("div", { class: "draw-card__title" }, " 千变万化绘画作品 ")
        ])
      ])
    ]);
  }
  const PagesDrawDraw = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-522d40ef"], ["__file", "D:/Desktop/yicang/pages/draw/draw.vue"]]);
  const _sfc_main$5 = {
    name: "user-btm-info",
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "user-btm-info" }, [
      vue.createElementVNode("img", {
        class: "user-avatar",
        src: $props.user.avatar,
        alt: "user avatar"
      }, null, 8, ["src"]),
      vue.createElementVNode("div", { class: "user-info" }, [
        vue.createElementVNode(
          "div",
          { class: "user-name" },
          vue.toDisplayString($props.user.username),
          1
          /* TEXT */
        ),
        vue.createElementVNode("div", { class: "user-stats" }, [
          vue.createElementVNode("div", { class: "user-stat" }, [
            vue.createElementVNode("div", { class: "user-stat-label" }, "·故事"),
            vue.createElementVNode(
              "div",
              { class: "user-stat-value" },
              vue.toDisplayString($props.user.story),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("div", { class: "user-stat" }, [
            vue.createElementVNode("div", { class: "user-stat-label" }, "·专精"),
            vue.createElementVNode(
              "div",
              { class: "user-stat-value" },
              vue.toDisplayString($props.user.expertise),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("div", { class: "user-stat" }, [
            vue.createElementVNode("div", { class: "user-stat-label" }, "·天赋"),
            vue.createElementVNode(
              "div",
              { class: "user-stat-value" },
              vue.toDisplayString($props.user.talent),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("div", { class: "user-stat" }, [
            vue.createElementVNode("div", { class: "user-stat-label" }, "综合属性"),
            vue.createElementVNode(
              "div",
              { class: "user-stat-value" },
              vue.toDisplayString($props.user.composite),
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]);
  }
  const UserBtmInfo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-99b497e5"], ["__file", "D:/Desktop/yicang/components/userBtmInfo.vue"]]);
  const _sfc_main$4 = {
    props: {
      user: {
        avatar: String,
        username: String,
        signature: String,
        postCount: Number,
        fansCount: Number,
        friendCount: Number
      }
    },
    components: {
      UserBtmInfo
    },
    data() {
      return {
        topImageUrl: "https://img.js.design/assets/img/6422468ad51f3246b0551740.png#9035c48270538db98579855b00f82616",
        btmImageUrl: "https://img.js.design/assets/img/64228a34cece21d6b6495b2d.png#af16a6ad687a8181f2b8ba794a7cd1e",
        topImgStyle: {
          width: "120vw",
          height: "80vh",
          marginTop: "-20vh",
          marginLeft: "-10vw",
          opacity: ".6",
          position: "fixed"
        },
        btmImgStyle: {
          width: "120vw",
          height: "80vh",
          marginTop: "-15vh",
          marginLeft: "-10vw"
        },
        showInfo: false,
        userInfo: {
          username: this.computedUsername,
          story: "Once upon a time...",
          expertise: "Coding",
          talent: "Creative problem solving",
          overall: "A+"
        }
      };
    },
    computed: {
      computedSinature() {
        return this.user.signature;
      },
      computedUsername() {
        return this.user.username;
      }
    },
    methods: {
      handleSignature() {
        this.$refs.showSignaturePopup.open("center");
      },
      handleSignatureConfirm() {
        formatAppLog("log", "at components/userTopInfo.vue:108", "handleSignatureConfirm");
        uni.request({
          header: {
            "Content-Type": "application/json"
          },
          url: "http://47.97.38.78/user/setSignature",
          method: "POST",
          sslVerify: false,
          data: JSON.stringify({
            "username": this.username,
            "signature": this.computedSinature
          }),
          success: (response) => {
            this.$refs.showSignaturePopup.close();
            formatAppLog("log", "at components/userTopInfo.vue:122", response.data.data);
          },
          fail: (response) => {
            formatAppLog("log", "at components/userTopInfo.vue:125", response);
          }
        });
      },
      handleSignatureCancel() {
        this.$refs.showSignaturePopup.close();
      },
      getUserInfo() {
        formatAppLog("log", "at components/userTopInfo.vue:134", "getUserInfo-Character");
        this.showInfo = true;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("div", { class: "user-top-info" }, [
          vue.createElementVNode("image", {
            src: $data.topImageUrl,
            style: vue.normalizeStyle($data.topImgStyle)
          }, null, 12, ["src"]),
          vue.createElementVNode("div", { class: "user-card" }, [
            vue.createElementVNode("div", { class: "user-card-header" }, [
              vue.createElementVNode("img", {
                src: $props.user.avatar,
                class: "avatar"
              }, null, 8, ["src"]),
              vue.createCommentVNode(' <img :src="user.avatar" class="avatar" @click="getUserInfo();" /> '),
              vue.createElementVNode("div", { class: "user-info" }, [
                vue.createElementVNode(
                  "div",
                  { class: "username" },
                  vue.toDisplayString($props.user.username),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "div",
                  {
                    class: "signature",
                    onClick: _cache[0] || (_cache[0] = ($event) => {
                      $options.handleSignature();
                    })
                  },
                  vue.toDisplayString($options.computedSinature),
                  1
                  /* TEXT */
                )
              ]),
              vue.createVNode(
                _component_uni_popup,
                {
                  ref: "showSignaturePopup",
                  title: "签名",
                  style: { "z-index": "99999" }
                },
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_uni_card, {
                      title: "注册",
                      "sub-title": "",
                      extra: "",
                      thumbnail: "https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("text", null, "请输入您新的签名"),
                        vue.createElementVNode("view", { class: "input-group" }, [
                          vue.withDirectives(vue.createElementVNode(
                            "input",
                            {
                              type: "text",
                              placeholder: "签名",
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $props.user.signature = $event)
                            },
                            null,
                            512
                            /* NEED_PATCH */
                          ), [
                            [vue.vModelText, $props.user.signature]
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "btn-group" }, [
                          vue.createElementVNode("button", {
                            class: "btn cancel",
                            onClick: _cache[2] || (_cache[2] = ($event) => {
                              $options.handleSignatureCancel();
                            })
                          }, "取消"),
                          vue.createElementVNode("button", {
                            class: "btn confirm",
                            onClick: _cache[3] || (_cache[3] = ($event) => {
                              $options.handleSignatureConfirm();
                            })
                          }, "确认")
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              )
            ]),
            vue.createElementVNode("div", { class: "user-card-footer" }, [
              vue.createElementVNode("div", { class: "count-item" }, [
                vue.createElementVNode(
                  "div",
                  { class: "count" },
                  vue.toDisplayString($props.user.postCount),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("div", { class: "count-label" }, "帖子")
              ]),
              vue.createElementVNode("div", { class: "count-item" }, [
                vue.createElementVNode(
                  "div",
                  { class: "count" },
                  vue.toDisplayString($props.user.fansCount),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("div", { class: "count-label" }, "粉丝")
              ]),
              vue.createElementVNode("div", { class: "count-item" }, [
                vue.createElementVNode(
                  "div",
                  { class: "count" },
                  vue.toDisplayString($props.user.friendCount),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("div", { class: "count-label" }, "好友")
              ])
            ])
          ])
        ]),
        vue.createElementVNode("div", { class: "user-bottom-info" }, [
          vue.createElementVNode("image", {
            src: $data.btmImageUrl,
            style: vue.normalizeStyle($data.btmImgStyle)
          }, null, 12, ["src"])
        ]),
        vue.createCommentVNode(' <view v-if="showInfo == true">\r\n		<UserBtmInfo :user="user" />\r\n	</view> ')
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const UserTopInfo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-1fd244db"], ["__file", "D:/Desktop/yicang/components/userTopInfo.vue"]]);
  const _sfc_main$3 = {
    components: {
      UserTopInfo
    },
    data() {
      return {
        ifLogin: false,
        ifChoice: true,
        ifNovel: false,
        ifDraw: false,
        //ifLogin: true,
        username: "",
        password: "",
        user: {
          avatar: "https://img.js.design/assets/img/642297ced51f3246b08fdfb0.png#dd97edd5a028e2369fa1a7f712d85b0f",
          username: "",
          signature: "",
          postCount: "",
          fansCount: "",
          friendCount: ""
        }
      };
    },
    methods: {
      handleLogin() {
        this.$refs.showLoginPopup.open("center");
      },
      handleLoginConfirm() {
        formatAppLog("log", "at pages/center/center.vue:164", "handleLoginConfirm");
        uni.request({
          header: {
            "Content-Type": "application/json"
          },
          url: "http://47.97.38.78/user/login",
          method: "POST",
          sslVerify: false,
          data: JSON.stringify({
            "username": this.username,
            "password": this.password
          }),
          success: (response) => {
            this.$refs.showLoginPopup.close();
            this.ifLogin = true;
            formatAppLog("log", "at pages/center/center.vue:179", response.data.data);
            this.user.avatar = "https://img.js.design/assets/img/642297ced51f3246b08fdfb0.png#dd97edd5a028e2369fa1a7f712d85b0f";
            this.user.signature = "#" + response.data.data.signature;
            this.user.username = response.data.data.username;
            this.user.postCount = 724;
            this.user.fansCount = 452;
            this.user.friendCount = 273;
          },
          fail: (response) => {
            formatAppLog("log", "at pages/center/center.vue:190", response);
          }
        });
      },
      handleLoginCancel() {
        this.$refs.showLoginPopup.close();
      },
      handleRegister() {
        this.$refs.showRegisterPopup.open("center");
      },
      handleRegisterConfirm() {
        formatAppLog("log", "at pages/center/center.vue:201", "handleReigsterConfirm");
        uni.request({
          header: {
            "Content-Type": "application/json"
          },
          url: "http://47.97.38.78/user/register",
          method: "POST",
          sslVerify: false,
          data: JSON.stringify({
            "username": this.username,
            "password": this.password
          }),
          success: (response) => {
            this.$refs.showRegisterPopup.close();
          },
          fail: (response) => {
            formatAppLog("log", "at pages/center/center.vue:217", response);
          }
        });
      },
      handleRegisterCancel() {
        this.$refs.showRegisterPopup.close();
      },
      myNovel() {
        this.ifChoice = false;
        this.ifNovel = true;
      },
      myDraw() {
        this.ifChoice = false;
        this.ifDraw = true;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_UserTopInfo = vue.resolveComponent("UserTopInfo");
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("div", { style: { "position": "fixed" } }, [
          vue.createVNode(_component_UserTopInfo, { user: $data.user }, null, 8, ["user"])
        ]),
        $data.ifLogin == false ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "login-container"
        }, [
          vue.createElementVNode("view", { class: "title" }, "未登录"),
          vue.createElementVNode("view", { class: "btn-group" }, [
            vue.createElementVNode("button", {
              class: "btn login",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.handleLogin && $options.handleLogin(...args))
            }, "登录"),
            vue.createElementVNode("button", {
              class: "btn register",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.handleRegister && $options.handleRegister(...args))
            }, "注册")
          ]),
          vue.createVNode(
            _component_uni_popup,
            {
              ref: "showLoginPopup",
              title: "登录"
            },
            {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_card, {
                  title: "登录",
                  "sub-title": "",
                  extra: "",
                  thumbnail: "https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", null, "请输入用户名和密码"),
                    vue.createElementVNode("view", { class: "input-group" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          type: "text",
                          placeholder: "用户名",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.username = $event)
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $data.username]
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "input-group" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          type: "password",
                          placeholder: "密码",
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.password = $event)
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $data.password]
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "btn-group" }, [
                      vue.createElementVNode("button", {
                        class: "btn cancel",
                        onClick: _cache[4] || (_cache[4] = (...args) => $options.handleLoginCancel && $options.handleLoginCancel(...args))
                      }, "取消"),
                      vue.createElementVNode("button", {
                        class: "btn confirm",
                        onClick: _cache[5] || (_cache[5] = (...args) => $options.handleLoginConfirm && $options.handleLoginConfirm(...args))
                      }, "确认")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          vue.createVNode(
            _component_uni_popup,
            {
              ref: "showRegisterPopup",
              title: "注册"
            },
            {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_card, {
                  title: "注册",
                  "sub-title": "",
                  extra: "",
                  thumbnail: "https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", null, "请输入用户名和密码"),
                    vue.createElementVNode("view", { class: "input-group" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          type: "text",
                          placeholder: "用户名",
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.username = $event)
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $data.username]
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "input-group" }, [
                      vue.withDirectives(vue.createElementVNode(
                        "input",
                        {
                          type: "password",
                          placeholder: "密码",
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.password = $event)
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vModelText, $data.password]
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "btn-group" }, [
                      vue.createElementVNode("button", {
                        class: "btn cancel",
                        onClick: _cache[8] || (_cache[8] = (...args) => $options.handleRegisterCancel && $options.handleRegisterCancel(...args))
                      }, "取消"),
                      vue.createElementVNode("button", {
                        class: "btn confirm",
                        onClick: _cache[9] || (_cache[9] = (...args) => $options.handleRegisterConfirm && $options.handleRegisterConfirm(...args))
                      }, "确认")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $data.ifLogin == true && $data.ifChoice == true ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "choice-container"
        }, [
          vue.createElementVNode("view", { class: "choice-item" }, [
            vue.createElementVNode("text", {
              class: "choice-text",
              onClick: _cache[10] || (_cache[10] = ($event) => {
                $options.myNovel();
              })
            }, "我的小说")
          ]),
          vue.createElementVNode("view", { class: "choice-item" }, [
            vue.createElementVNode("text", {
              class: "choice-text",
              onClick: _cache[11] || (_cache[11] = ($event) => {
                $options.myDraw();
              })
            }, "我的绘画")
          ]),
          vue.createElementVNode("view", { class: "choice-item" }, [
            vue.createElementVNode("text", {
              class: "choice-text",
              onClick: _cache[12] || (_cache[12] = ($event) => {
                _ctx.myCharacter();
              })
            }, "我的人物")
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.ifLogin == true && $data.ifNovel == true ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "choice-container"
        }, [
          vue.createElementVNode("div", {
            class: "big-card",
            style: { "margin-top": "30vh" }
          }, [
            vue.createElementVNode("div", { class: "card-row" }, [
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423df1b59e732fb5996ac2e.png#3c07a2d25650b7e910989358ab73684a" }),
                vue.createElementVNode("p", { class: "card-text" }, "新花样 ")
              ]),
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423def59b06204f6ad661f1.png#b7411bc65ed267448616ccedffc8dc30" }),
                vue.createElementVNode("p", { class: "card-text" }, "混蛋经济学")
              ]),
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423df45e8745177e5a937b6.png#47f730dd16d5a273f13dbc8f54362930" }),
                vue.createElementVNode("p", { class: "card-text" }, "即刻出发")
              ])
            ]),
            vue.createElementVNode("div", { class: "card-row" }, [
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423df4bad69f06604d63a81.png#e05312d11709458a89793be28837da0c" }),
                vue.createElementVNode("p", { class: "card-text" }, "米歇尔")
              ]),
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423df51e8745177e5a941c6.png#c3fd0bd57108e787c23d0b3f6cefe78e" }),
                vue.createElementVNode("p", { class: "card-text" }, "新花样")
              ]),
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423def59b06204f6ad661f1.png#b7411bc65ed267448616ccedffc8dc30" }),
                vue.createElementVNode("p", { class: "card-text" }, "混蛋经济学")
              ])
            ]),
            vue.createElementVNode("button", {
              style: { "margin-top": "10vh", "color": "palevioletred", "background-color": "darkorchid" },
              onClick: _cache[13] || (_cache[13] = ($event) => {
                $data.ifNovel = false;
                $data.ifChoice = true;
              })
            }, "返回")
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $data.ifLogin == true && $data.ifDraw == true ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "choice-container"
        }, [
          vue.createElementVNode("div", {
            class: "big-card-draw",
            style: { "margin-top": "30vh" }
          }, [
            vue.createElementVNode("div", { class: "card-row" }, [
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423ddca24baae5a3b5d1706.png#b711d9f8cfa497ce0145f2f73ba5f8bc" }),
                vue.createElementVNode("p", { class: "card-text" }, "现代言情")
              ]),
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423df51e8745177e5a941c6.png#c3fd0bd57108e787c23d0b3f6cefe78e" }),
                vue.createElementVNode("p", { class: "card-text" }, "在彼岸")
              ])
            ]),
            vue.createElementVNode("div", { class: "card-row" }, [
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423dd799b06204f6ad4fa50.png#c6aabd883f06363d979a52ce1769eb4d" }),
                vue.createElementVNode("p", { class: "card-text" }, "新花样")
              ]),
              vue.createElementVNode("div", { class: "card" }, [
                vue.createElementVNode("img", { src: "https://img.js.design/assets/img/6423ddca24baae5a3b5d1706.png#b711d9f8cfa497ce0145f2f73ba5f8bc" }),
                vue.createElementVNode("p", { class: "card-text" }, "更多画作")
              ])
            ]),
            vue.createElementVNode("button", {
              style: { "margin-top": "10vh", "color": "palevioletred", "background-color": "darkorchid" },
              onClick: _cache[14] || (_cache[14] = ($event) => {
                $data.ifDraw = false;
                $data.ifChoice = true;
              })
            }, "返回")
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesCenterCenter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-3f122818"], ["__file", "D:/Desktop/yicang/pages/center/center.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {
      toNewPageFn(url) {
        uni.navigateTo({
          url
        });
      }
    },
    mounted() {
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("main", null, [
      vue.createElementVNode("div", { class: "bg" }),
      vue.createElementVNode("image", {
        src: "https://img.js.design/assets/img/642a49692850a4fc08992bb9.png#1da1d91836b637abe3b6c9936f004c66",
        class: "top-img",
        mode: "aspectFill"
      }),
      vue.createElementVNode("image", {
        src: "https://img.js.design/assets/img/642281207c814c19c7d829d5.png#7deb0d9fbaff1845eb3b64bad7fcb142",
        class: "name-img",
        mode: "aspectFill"
      }),
      vue.createElementVNode("div", { class: "img-decorate" }),
      vue.createElementVNode("h2", { class: "name" }, "《千变万化绘画》"),
      vue.createElementVNode("div", { class: "p-wrapper" }, [
        vue.createElementVNode("div", { style: { "width": "100%", "background-color": "black" } }, [
          vue.createElementVNode("p", null, " 2120年，人类科技水平再次迈上了新台阶。新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。不过，对于死亡，他倒是没有什么恐惧的。 癌症晚期的他，本来就活不了多久。从警校毕业之后，他主动在某个犯罪集团卧底五年，凭借出色的能力，深得集团首脑信任，从一个外围人员，成功坐上了二把手的位貴在李玉的配合下，军方最终成功的将这個国内最大的犯罪集团一网打尽。 任务完成，李玉却并没有多么高兴二把手的位費不是凭空得来的，卧底五年，为了最终的任务，他做了很多本不该做的事情，以至于很多时候连他自己都分不清，他到底是一个好人还是坏人。后来查出癌症晚期，他星然一直在积极接受治疗，但从此以后，每次执行危险任务，他总是冲在前面，直到在抓捕一名危险的持枪歹徒时，为救人质，李玉以身为饵，胸部中枪，壮烈牺牲这是属于他脑海的一段记忆，而另-一段记忆告诉他，他是陈国白云观的一名弟 ")
        ])
      ])
    ]);
  }
  const PagesDrawDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-db773602"], ["__file", "D:/Desktop/yicang/pages/draw/detail.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {
      toNewPageFn(url) {
        uni.navigateTo({
          url
        });
      }
    },
    mounted() {
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("main", null, [
      vue.createElementVNode("div", { class: "bg" }),
      vue.createElementVNode("image", {
        src: "https://img.js.design/assets/img/642a48a72850a4fc08989c92.png#55e0c5c0e9f01944b7b1f02511ec5107",
        class: "top-img",
        mode: "aspectFill"
      }),
      vue.createElementVNode("image", {
        src: "https://img.js.design/assets/img/642281207c814c19c7d829d5.png#7deb0d9fbaff1845eb3b64bad7fcb142",
        class: "name-img",
        mode: "aspectFill"
      }),
      vue.createElementVNode("div", { class: "img-decorate" }),
      vue.createElementVNode("h2", { class: "name" }, "《千变万化绘画》"),
      vue.createElementVNode("div", {
        class: "p-wrapper",
        style: { "background-color": "black" }
      }, [
        vue.createElementVNode("div", { style: { "width": "100%" } }, [
          vue.createElementVNode("view", {
            class: "card",
            style: { "border": "1px solid #333", "border-radius": "14px" }
          }, [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createElementVNode("div", { style: { "margin-top": "20vh" } }),
              vue.createElementVNode("view", { class: "image-wrapper" }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: "https://img.js.design/assets/img/6422872d634e77963d151f89.png#f391bd6731fb87de589c75f2a67fb9d3",
                  mode: "aspectFit"
                })
              ]),
              vue.createElementVNode("view", { class: "text-wrapper" }, [
                vue.createElementVNode("text", { class: "title" }, "武当山书则"),
                vue.createElementVNode("view", { class: "button-wrapper" }, [
                  vue.createElementVNode("button", { class: "button" }, "+关注")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("div", { style: { "border": "1px solid rgba(240, 224, 190, 0.17)", "margin-top": "-7vh" } }),
              vue.createElementVNode("p", { style: { "margin-top": "1vh", "font-size": "12px", "font-weight": "400", "color": "rgba(255, 255, 255, 0.8)", "text-align": "justify" } }, " 2120年，人类科技水平再次迈上了新台阶。 "),
              vue.createElementVNode("p", { style: { "font-size": "12px", "font-weight": "400", "color": "rgba(255, 255, 255, 0.8)", "text-align": "justify" } }, " 新种族的诞生，能令意识长生不死的虚拟元宇宙世界，可用时间抗衡绝症的冰冻技术，崭新的资本角斗场……眼花缭乱的出现在了地球原住民的眼前。 ")
            ])
          ]),
          vue.createElementVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "space-between" } }, [
            vue.createElementVNode("div", { style: { "font-size": "20px", "font-weight": "700", "letter-spacing": "3px", "line-height": "0px", "color": "rgba(255, 255, 255, 1)", "text-align": "left", "vertical-align": "top", "width": "70vw" } }, "￥ 19.00"),
            vue.createElementVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "space-between", "flex-grow": "1" } }, [
              vue.createElementVNode("button", {
                style: { "background": "rgba(240, 224, 190, 1)", "border-radius": "18.5px", "width": "100px", "height": "37px", "margin-right": "3vw" },
                onClick: _cache[0] || (_cache[0] = ($event) => $options.toNewPageFn("/pages/draw/detail"))
              }, "预览"),
              vue.createElementVNode("button", {
                style: { "background": "linear-gradient(90deg, rgba(251, 231, 193, 1) 0%, rgba(232, 194, 132, 1) 99.93%)", "border-radius": "18.5px", "width": "100px", "height": "37px", "margin-right": "3vw" },
                onClick: _cache[1] || (_cache[1] = ($event) => {
                  this.$refs.popup.open("center");
                })
              }, "购买")
            ])
          ])
        ]),
        vue.createVNode(
          _component_uni_popup,
          { ref: "popup" },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", { style: { "width": "288px", "height": "343px", "background": "url(https://img.js.design/assets/img/64227e507c814c19c7d66c31.png#2c89fe46a5d30dd33a59feda70bfa2df) no-repeat", "background-size": "cover" } }),
              vue.createCommentVNode(' <div style="\r\n					width: 324px;\r\n					height: 556px;\r\n					background: url(https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583);">\r\n				 </div>'),
              vue.createElementVNode("div", { style: { "position": "absolute", "top": "0", "right": "-5vw", "width": "440px", "height": "307px", "background": "url(https://img.js.design/assets/img/642262b6cece21d6b638099f.png#c6a461f978abdc00993655755571ec07) no-repeat", "background-size": "cover" } }),
              vue.createElementVNode("div", { style: { "width": "80vw", "height": "25vh", "background": "url(https://img.js.design/assets/img/6422455dd51f3246b0542d43.jpg#16e1bba5446fd8ab0a4664271572b583) no-repeat", "background-size": "cover", "border-radius": "24px" } }, [
                vue.createElementVNode("div", { style: { "margin-left": "12vw", "top": "475px", "width": "224px", "height": "44px", "opacity": "1", "border-radius": "226px", "background": "linear-gradient(90deg, rgba(91, 85, 75, 1) 0%, rgba(44, 42, 35, 1) 100%)" } }, [
                  vue.createElementVNode("div", { style: { "font-size": "18px", "font-weight": "500", "color": "rgba(240, 224, 190, 1)", "text-align": "center", "vertical-align": "center" } }, " 购买成功！ ")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        ),
        vue.createCommentVNode(` <uni-popup v-model="showBuy" :title="'交易成功'" :message="'您已成功购买商品！'">\r
				<h1>aasfdasdf</h1>\r
				<view class="popup-btns">\r
					<button @click="show = false">确定</button>\r
				</view>\r
			</uni-popup> `)
      ])
    ]);
  }
  const PagesDrawBuy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c101b52c"], ["__file", "D:/Desktop/yicang/pages/draw/buy.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/novel/novel", PagesNovelNovel);
  __definePage("pages/novel/detail", PagesNovelDetail);
  __definePage("pages/novel/continue", PagesNovelContinue);
  __definePage("pages/draw/draw", PagesDrawDraw);
  __definePage("pages/center/center", PagesCenterCenter);
  __definePage("pages/draw/detail", PagesDrawDetail);
  __definePage("pages/draw/buy", PagesDrawBuy);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:7", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
      formatAppLog("log", "at App.vue:8", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:11", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:14", "App Hide");
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Desktop/yicang/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);

const lights = [
  {
    id: "eingang",
    name: "Eingang",
    ip: "192.168.0.18",
    key: "lnICyrh0voADd2GQLaRxyXgCs5Ep6Jw0",
  },
  {
    id: "stube",
    name: "Stube",
    ip: "192.168.0.10",
    key: "f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q",
  },
  {
    id: "kueche",
    name: "Küche",
    ip: "192.168.0.16",
    key: "kCS0osqMp8pZ57fB4KHJ8QOxAo7Xgyiy",
  },
];

// get info
//curl --location --request PUT 'http://192.168.0.10:16021/api/v1/f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q/state' \

// turn off/on
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q/state' --header 'Content-Type: application/json' --data-raw '{"on": {"value": true}}'

// set brightness
// curl --location --request PUT 'http://192.168.x.x:16021/api/v1/Add-a-user-to-generate-auth-token/state' --data-raw '{"brightness" : {"value":100, "duration":30}}'

// set hue
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q/state' --data-raw '{"hue" : {"value":120}}'

// set saturation
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q/state/sat' --data-raw '{"sat" : {"value": 20}}'

// get effect
// curl --location --request GET 'http://192.168.0.10:16021/api/v1/f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q/effects/select'

// set effect
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q/effects' --data-raw '{"select" : "Dragon Fruit"}'

// get color mode
// curl --location --request GET 'http://192.168.0.10:16021/api/v1/f6ZKYihkBOLVqiu2DwTaiPk06PubHA4q/state/colorMode'

module.exports.lights = lights;

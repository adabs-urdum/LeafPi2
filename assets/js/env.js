const lights = [
  {
    id: "eingang",
    name: "Eingang",
    ip: "192.168.0.10",
    key: "IYWBQyXiXftedRVMC4o6WjEK1yryOeyE",
  },
  {
    id: "stube",
    name: "Stube",
    ip: "192.168.0.12",
    key: "IYWBQyXiXftedRVMC4o6WjEK1yryOeyE",
  },
  {
    id: "kueche",
    name: "Küche",
    ip: "192.168.0.11",
    key: "IYWBQyXiXftedRVMC4o6WjEK1yryOeyE",
  },
];

// get key
// curl --location --request POST 'http://192.168.0.11:16021/api/v1/new'

// get info
//curl --location --request PUT 'http://192.168.0.10:16021/api/v1/IYWBQyXiXftedRVMC4o6WjEK1yryOeyE/state'

// turn off/on
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM/state' --header 'Content-Type: application/json' --data-raw '{"on": {"value": true}}'

// set brightness
// curl --location --request PUT 'http://192.168.x.x:16021/api/v1/Add-a-user-to-generate-auth-token/state' --data-raw '{"brightness" : {"value":100, "duration":30}}'

// set hue
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM/state' --data-raw '{"hue" : {"value":120}}'

// set saturation
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM/state/sat' --data-raw '{"sat" : {"value": 20}}'

// get effect
// curl --location --request GET 'http://192.168.0.10:16021/api/v1/Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM/effects/select'

// set effect
// curl --location --request PUT 'http://192.168.0.10:16021/api/v1/Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM/effects' --data-raw '{"select" : "Dragon Fruit"}'

// get color mode
// curl --location --request GET 'http://192.168.0.10:16021/api/v1/Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM/state/colorMode'

module.exports.lights = lights;

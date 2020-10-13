const lights = [
  {
    id: "eingang",
    name: "Eingang",
    ip: "192.168.0.10",
    key: "Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM",
  },
  {
    id: "stube",
    name: "Stube",
    ip: "192.168.0.11",
    key: "jW5XshHSh8rABAHtKYDvEngaWyviEhjP",
  },
  {
    id: "kueche",
    name: "Küche",
    ip: "192.168.0.12",
    key: "QoHqPWAe9m5WJtkjE4CQtWArhTEm04jZ",
  },
];

// get info
//curl --location --request PUT 'http://192.168.0.10:16021/api/v1/Ow8klqeZtGZtAEcmKO5OpCLaqPXt7ElM/state' \

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

import rainy from "./assets/icons/rain.svg";
import snow from "./assets/icons/snow.svg";
import sunny from "./assets/icons/clear-day.svg";
import clear from "./assets/icons/clear-day.svg";
import partlyClouds from "./assets/icons/partly-cloudy-day.svg";
import cloudy from "./assets/icons/cloudy.svg";
import overcast from "./assets/icons/overcast.svg";

const icons = {
  // rainy,
  // snow,
  2: sunny,
  1: sunny,
  34: clear,
  33: clear,
  4: partlyClouds,
  35: partlyClouds,
  36: cloudy,
  // overcast,
};

export const getIcon = (iconNumber) => {
  return icons[iconNumber];
};

import React from "react";

import rain from "./assets/icons/rain.svg";
import snow from "./assets/icons/snow.svg";
import sunny from "./assets/icons/clear-day.svg";
import partlyClouds from "./assets/icons/partly-cloudy-day.svg";
import cloudy from "./assets/icons/cloudy.svg";
import overcast from "./assets/icons/overcast.svg";
import overcastDay from "./assets/icons/overcast-day.svg";
import fog from "./assets/icons/fog.svg";
import fogDay from "./assets/icons/fog-day.svg";
import partlyCloudyRain from "./assets/icons/partly-cloudy-day-rain.svg";
import partlyCloudySleet from "./assets/icons/partly-cloudy-day-rain.svg";
import showers from "./assets/icons/drizzle.svg";
import storms from "./assets/icons/thunderstorms.svg";
import mostlyCloudyStorms from "./assets/icons/thunderstorms-rain.svg";
import partlySunnyStorms from "./assets/icons/thunderstorms-day-rain.svg";
import mostlyCloudySnow from "./assets/icons/partly-cloudy-day-snow.svg";
import sleet from "./assets/icons/sleet.svg";
import windy from "./assets/icons/wind.svg";
import clearNight from "./assets/icons/clear-night.svg";
import partlyCloudyNight from "./assets/icons/partly-cloudy-night.svg";
import partlyCloudyRainNight from "./assets/icons/partly-cloudy-night-rain.svg";
import partlyCloudyStormNight from "./assets/icons/thunderstorms-night-rain.svg";
import partlyCloudySnowNight from "./assets/icons/thunderstorms-snow.svg";
import fogNight from "./assets/icons/fog-night.svg";

import { ReactComponent as C } from './assets/icons/celsius.svg';
import { ReactComponent as F } from './assets/icons/fahrenheit.svg';

const icons = {
  1: sunny,
  2: sunny,
  3: partlyClouds,
  4: partlyClouds,
  5: fogDay,
  6: overcastDay,
  7: cloudy,
  8: overcast,
  11: fog,
  12: showers,
  13: partlyCloudyRain,
  14: partlyCloudyRain,
  15: storms,
  16: mostlyCloudyStorms,
  17: partlySunnyStorms,
  18: rain,
  19: sleet,
  20: partlyCloudySleet,
  21: partlyCloudySleet,
  22: snow,
  23: mostlyCloudySnow,
  24: snow,
  25: sleet,
  26: sleet,
  29: sleet,
  32: windy,
  33: clearNight,
  34: partlyCloudyNight,
  35: partlyCloudyNight,
  36: partlyCloudyNight,
  37: fogNight,
  38: partlyCloudyNight,
  39: partlyCloudyRainNight,
  40: partlyCloudyRainNight,
  41: partlyCloudyStormNight,
  42: partlyCloudyStormNight,
  43: partlyCloudySnowNight,
  44: partlyCloudySnowNight,
};

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getIcon = (iconNumber) => {
  return icons[iconNumber];
};

export const getWeekday = (day) => {
  return weekday[day];
};

export const padTo2Digits = (num) => {
  return String(num).padStart(2, "0");
};

export const getTempUnitIcon = (tempUnit, darkModeOn) => {
  const fill = darkModeOn ? "#ffffff" : "#000000"
  return (
    tempUnit === 'Metric' ? <C width={40} height={40} fill={fill} /> : <F width={40} height={40} fill={"#438ac9"} />
  )
}

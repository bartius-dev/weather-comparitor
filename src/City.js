class City {
  constructor(city, country, data) {
    this.city = city;
    this.country = country;
    this.weather = [];
    for (let i = 0; i < 12; i++) {
      let dateArray = data[i].datetime.split("-");
      let dayIndex = new Date(
        dateArray[0],
        parseInt(dateArray[1]) - 1,
        dateArray[2]
      ).getDay();
      this.weather.push({
        dayOfWeek: daysOfTheWeek[dayIndex],
        lowTempCelsius: Math.floor(data[i].low_temp),
        lowTempFahrenheit: Math.floor(data[i].low_temp * 1.8 + 32),
        highTempCelsius: Math.floor(data[i].max_temp),
        highTempFahrenheit: Math.floor(data[i].max_temp * 1.8 + 32),
        cloudiness: data[i].clouds, // measured in percentage of coverage
        uv: data[i].uv, // on a scale of 0-11
        windSpeed: data[i].wind_spd, // measured in m/s
        humidity: data[i].rh, // measured in percentage
        solarRadiation: data[i].solar_rad, // measured in W / m^2
        airQuality: data[i].aqi // measured in US - EPA standard 0 - 500
      });
    }
  }
}

const daysOfTheWeek = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export default City;

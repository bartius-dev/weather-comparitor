export default function getWeather(newCityName, newCountryName) {
  let apiKey = process.env.WEATHER_API_KEY || "WEATHER_API_KEY";
  let weather = fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${newCityName}&country=${newCountryName}&key=${apiKey}`
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    return Promise.reject(response.status);
  });

  return weather;
}

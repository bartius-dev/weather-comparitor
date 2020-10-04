export default async function getWeather(newCityName, newCountryName) {
  const apiKey = process.env.WEATHER_API_KEY || "WEATHER_API_KEY";
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${newCityName}&country=${newCountryName}&key=${apiKey}`
  );
  if (response.status !== 200) {
    return Promise.reject(response.status);
  }
  const weather = await response.json();
  return weather;
}

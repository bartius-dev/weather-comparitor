<script>
  import cities from "../stores/Cities.js";
  import City from "../City.js";

  let newCityName = "";
  let newCountryName = "";

  function handleClick() {
    getWeather()
      .then((weather) => {
        let newCity = new City(
          newCityName,
          newCountryName,
          $cities.length,
          weather.data
        );
        cities.addCity(newCity);
        clearInputBoxes();
      })
      .catch((statusCode) => {
        if (process.env.IS_PROD) {
          console.clear();
        }

        if (statusCode === 400) {
          alert("No input!")
        } else if (statusCode === 203) {
          alert("Could not find that city & country combo")
        }
      });
  }

  function handleKeyup(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  function clearInputBoxes() {
    newCityName = "";
    newCountryName = "";
  }

  function getWeather() {
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
</script>

<div class="space-underneath">
  <input id="cityInput"
    placeholder="City"
    bind:value={newCityName}
    on:keyup={handleKeyup} />
  <input
    placeholder="Country"
    bind:value={newCountryName}
    on:keyup={handleKeyup} />
  <button on:click|preventDefault={handleClick}>Enter</button>
</div>

<style>
  .space-underneath {
    margin-bottom: 50px;
  }
  input {
    color: cornflowerblue;
  }
  input:focus {
    border-color: cornflowerblue;
    /*this outline: thin attribute makes the input more accessible to keyboard users*/
    outline: thin;
  }
  button {
    background-color: lightblue;
    color: cornflowerblue;
  }
  button:hover {
    color: royalblue;
    border-color: cornflowerblue;
  }
  button:active {
    background-color: lightskyblue;
  }
</style>

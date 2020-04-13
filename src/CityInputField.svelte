<script>
  // this component uses component bindings to communicate data
  import { createEventDispatcher } from 'svelte';
  import City from './City.js';

  let newCityName = '';
  let newCountryName = '';

  const dispatch = createEventDispatcher();

  function handleClick() {
    let missingInput = isMissingInput();
    // really wish this if statement would go away
    if (missingInput === '') {
      getWeather()
      .then(weather => {
        let newCity = new City(newCityName, newCountryName, false, weather);
        dispatch('addCity', { newCity });
        clearInputBoxes();
      })
    } else {
      alert(`Must enter the name of a ${missingInput}`);
      // TODO must add a custom function here to notify the user subtly (nothing like a modal, more like a little text bubble)
    }
  }

  function handleKeyup(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function isMissingInput() {
    // no idea how to do this without an if statement
    if (newCityName === '' && newCountryName === '') {
      return "city and a country!"
    } else if (newCityName === '') {
      return "city";
    } else if (newCountryName === '') {
      return 'country';
    } else {
      return ''
    }
  }

  function clearInputBoxes() {
    newCityName = '';
    newCountryName = '';
  }

  function getWeather() {
    let weather = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${newCityName}&country=${newCountryName}&key=${process.env.WEATHER_API_KEY}`)
    .then(response => {
      if (response.ok) return response.json()

      throw new Error();
    })
    .then(jsonResponse => {
      return jsonResponse.data;
    })

    return weather;
  }
</script>

<div class="space-underneath">
  <input placeholder="City" bind:value={newCityName} on:keyup={handleKeyup} />
  <input placeholder="Country" bind:value={newCountryName} on:keyup={handleKeyup} />
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

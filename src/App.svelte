<script>
  import CityInputField from './CityInputField.svelte';
  import WeatherTable from './WeatherTable.svelte';
  import InputCityNameNotification from './InputCityNameNotification.svelte';
  import Welcome from './Welcome.svelte';
  // TODO remove this city object creation to CityInputField
  import City from './City.js';

  let cities = [];

  function addCity(newCityName) {
    let newcity = new City(newCityName.detail.newCityName);
    // TODO call the weather API here!!!
    cities = [...cities, newcity];
  }
</script>

<main>
  <Welcome />
  <CityInputField on:addCity={addCity} />
  {#if cities.length === 0}
    <InputCityNameNotification />
  {:else}
    <WeatherTable cities={cities} />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

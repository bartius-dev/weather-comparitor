<script>
  import CityInputField from './CityInputField.svelte';
  import WeatherTable from './WeatherTable.svelte';
  import InputCityNameNotification from './InputCityNameNotification.svelte';
  import Welcome from './Welcome.svelte';

  let cities = [];

  function addCity(newCity) {
    if (cities.length === 0)
    {
      newCity.detail.newCity.setToBase();
    }
    cities = [...cities, newCity.detail.newCity];
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

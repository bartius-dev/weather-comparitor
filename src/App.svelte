<script>
  import CityInputField from './CityInputField.svelte';
  import WeatherTable from './WeatherTable.svelte';

  let cities = [];

  function addCity(newCityName) {
    // TODO call the weather API here!!!
    cities = [...cities, newCityName.detail.newCityName];
  }
</script>

<main>
  <h1>Welcome!</h1>
  <CityInputField on:addCity={addCity} />
  <WeatherTable cities={cities} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: cornflowerblue;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

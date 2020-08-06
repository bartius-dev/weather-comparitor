<script>
  import Difference from "./Difference.svelte";
  import InstructionBlock from "./InstructionBlock.svelte";
  import cities from '../stores/Cities.js';
  import City from "../City.js";
  import getWeather from "../GetWeather";
  import { onMount } from 'svelte';

  function handleDelete(event) {
    cities.deleteCity(event.target.id.split(",")[0]);
    localStorage.setItem("cities", localStorage.getItem("cities").split(";").filter((cityAndCountry) => {
          if (cityAndCountry !== event.target.id) {
            return cityAndCountry;
          }
        }).join(";"))
  }

  onMount(() => {
      let savedCitiesAndCountries = localStorage.getItem("cities");
      if (savedCitiesAndCountries !== "" && savedCitiesAndCountries !== null)
      {
          let savedCitiesAndCountries = localStorage.getItem("cities").split(";");

          for (let i = 0; i < savedCitiesAndCountries.length; i++) {
              let cityAndCountry = savedCitiesAndCountries[i].split(",");
              let city = cityAndCountry[0];
              let country = cityAndCountry[1];
              getWeather(city, country)
                      .then((weather) => {
                          cities.addCity(new City(city, country, weather.data))
                      })
                        .catch(() => {

                        });

          }
      }
  })
</script>

{#if $cities.length === 0}
    <InstructionBlock/>
{:else}
<table class="fade-in">
    <thead>
    <th class="city-name-cell">
        City
    </th>
    {#each $cities[0].weather as header}
        <th class="data-cell thin">
            {header.dayOfWeek}
        </th>
    {/each}
    </thead>
    { #each $cities as city}
        <tr>
            <td on:click|preventDefault={handleDelete} id={`${city.city},${city.country}`} class="city-name-cell thin">{city.city}</td>
            { #each city.weather as weather, i }
                <td class="data-cell">
                    <Difference weather="{weather}" baseWeather="{$cities[0].weather}" cityIndex="{i}"/>
                </td>
            {/each}
        </tr>
    { /each }
</table>
{/if}

<style>
  table {
    /*for centering the table*/
    margin-left: auto;
    margin-right: auto;
    /*for that nice depth look - really subtle*/
    box-shadow: lightgray 2px 1px 10px 1px;
    border-radius: 2px;
    /*these are so the border doesnt show, but it still allows the table to have rounded corners*/
    border-collapse: separate;
    border: 1px solid lightblue;
    border-spacing: 0px;
    margin-bottom: 50px;
  }
  th {
    color: cornflowerblue;
    border: 1px solid lightblue;
  }
  thead {
    background-color: lightblue;
    color: cornflowerblue;
  }
  td,
  th {
    height: 50px;
  }
  tr {
    color: cornflowerblue;
  }
  .city-name-cell {
    width: 150px;
  }
  .data-cell {
    width: 60px;
  }
  tr:hover {
    color: royalblue;
  }
  tr:nth-child(odd) {
    background-color: aliceblue;
  }
  .thin {
    font-weight: lighter;
  }
  td.city-name-cell:hover {
      text-decoration: line-through;
      cursor: pointer;
  }
  .fade-in {
    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>

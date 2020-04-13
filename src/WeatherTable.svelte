<script>
  import Difference from "./Difference.svelte";
  export let cities;
</script>

<table class="fade-in">
    <thead>
    <th class="city-name-cell">
        City
    </th>
    {#each cities[0].weather as header}
        <th class="data-cell thin">
            {header.dayOfWeek}
        </th>
    {/each}
    </thead>
    { #each cities as city }
        <tr>
            <td class="city-name-cell thin">{city.city}</td>
            { #each city.weather as weather }
                <td class="data-cell">
                    {#if city.isBase}
                        {weather.high}
                    {:else}
                        <Difference high="{weather.high}" difference="{weather.high - 5}"/>
                    {/if}
                </td>
            {/each}
        </tr>
    { /each }
</table>

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

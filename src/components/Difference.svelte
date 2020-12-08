<script>
  export let weather;
  export let baseWeather;
  export let cityIndex;

  let difference;
  $: difference =
    weather.highTempCelsius - baseWeather[cityIndex].highTempCelsius;

  function getTempDifferenceKey(difference) {
    let style;
    if (difference > 30) {
      style = "much-hotter";
    } else if (difference > 20) {
      style = "hotter";
    } else if (difference > 10) {
      style = "warmer";
    } else if (difference === 0) {
      style = "invisible";
    } else if (difference > -5) {
      style = "not-much-colder";
    } else if (difference > -15) {
      style = "colder";
    } else {
      style = "much-colder";
    }
    return style;
  }
</script>

<td class="{getTempDifferenceKey(difference)} data-cell">
  <span>{weather.highTempCelsius}</span>
  <span class="difference"> {difference} </span>
</td>

<style>
  .much-hotter {
    background-color: #ff000033;
    color: red;
  }

  .hotter {
    background-color: #ff450033;
    color: orangered;
  }

  .warmer {
    background-color: #ff8c0033;
    color: darkorange;
  }

  .not-much-colder {
    background-color: #add8e633;
    color: #6495ed;
  }

  .colder {
    background-color: #6495ed33;
    color: cornflowerblue;
  }

  .much-colder {
    background-color: #00008b33;
    color: darkblue;
  }

  .invisible {
    color: cornflowerblue;
  }

  .invisible .difference {
    visibility: hidden;
  }

  .difference {
    position: relative;
    top: -10px;
    left: 5px;
    font-size: 0.8em;
  }
</style>

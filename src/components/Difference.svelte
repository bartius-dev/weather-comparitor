<script>
  export let weather;
  export let baseWeather;
  export let cityIndex;

  let difference;
  $: difference =
    weather.highTempCelsius - baseWeather[cityIndex].highTempCelsius;

  let differenceToStyleMap = {};

  let tempDifferenceKey = 50;
  for (let i = 0; i < 100; i++) {
    let style;
    if (tempDifferenceKey > 30) {
      style = "much-hotter";
    } else if (tempDifferenceKey > 20) {
      style = "hotter";
    } else if (tempDifferenceKey > 10) {
      style = "warmer";
    } else if (tempDifferenceKey === 0) {
      style = "invisible";
    } else if (tempDifferenceKey > -5) {
      style = "not-much-colder";
    } else if (tempDifferenceKey > -15) {
      style = "colder";
    } else {
      style = "much-colder";
    }
    differenceToStyleMap[tempDifferenceKey] = style;
    tempDifferenceKey--;
  }
</script>

<div>
  {weather.highTempCelsius}
  <span id="difference" class={differenceToStyleMap[difference]}>
    {difference}
  </span>
</div>

<style>
  .much-hotter {
    color: red;
  }

  .hotter {
    color: orangered;
  }

  .warmer {
    color: darkorange;
  }

  .not-much-colder {
    color: cornflowerblue;
  }

  .colder {
    color: lightblue;
  }

  .much-colder {
    color: darkblue;
  }

  .invisible {
    visibility: hidden;
  }

  span {
    position: relative;
    top: -10px;
    left: 5px;
    font-size: 0.0000001em;
    font-weight: lighter;
  }
</style>

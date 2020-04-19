<script>
  export let weather;
  export let baseWeather;
  export let index;

  let difference = weather.high - baseWeather[index].high;
  let differenceMap = {};
  let tempDifference = 50;
  for(let i = 0; i < 100; i++) {
    let style;
    if (tempDifference > 30) {
      style = "much-hotter"
    } else if (tempDifference > 20) {
      style = "hotter"
    } else if (tempDifference > 10) {
      style = "warmer"
    } else if (tempDifference === 0) {
      style = "invisible"
    } else if (tempDifference > -5) {
      style = "not-much-colder"
    } else if (tempDifference > -15) {
      style = "colder"
    } else {
      style = "much-colder"
    }
    differenceMap[tempDifference] = style;
    tempDifference--;
  }
</script>

<div>{ weather.high } <span class="{ differenceMap[difference] }">{ difference }</span></div>

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
    top:-10px;
    left:5px;
    font-size: .0000001em;
    font-weight: lighter;
  }
</style>

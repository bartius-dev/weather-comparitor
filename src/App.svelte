<script>
  import TextInputBox from './TextInputBox.svelte';

  let cityName;
</script>

<main>
  <h1>Welcome!</h1>
  <TextInputBox bind:this={cityName}/>
  <p>{cityName}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: lawngreen;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

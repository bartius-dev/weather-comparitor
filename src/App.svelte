<script>
  import TextInputBox from './TextInputBox.svelte';
</script>

<main>
  <h1>Welcome!</h1>
  <TextInputBox let:city={cityName}/>
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

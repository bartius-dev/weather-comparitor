<script>
  import InputFields from './InputFields.svelte';
  import WeatherTable from './WeatherTable.svelte';
  import Welcome from './Welcome.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    if (localStorage.getItem("cities") == null) {
      localStorage.setItem("cities", "");
    }
  })
</script>

<main>
  <Welcome />
  <InputFields />
  <WeatherTable />
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

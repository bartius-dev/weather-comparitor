<script>
  // this component uses component bindings to communicate data
  import { createEventDispatcher } from 'svelte';

  export let newCityName = '';

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (isInputSanitized()) {
      dispatch('addCity', { newCityName });
      clearInputBox();
    } else {
      alert('Must enter the name of a city');
    }
  }

  function handleKeyup(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function isInputSanitized() {
    if (newCityName === '') {
      return false;
    } else {
      return true;
    }
  }

  function clearInputBox() {
    newCityName = '';
  }
</script>

<div class="space-underneath">
<input bind:value={newCityName} on:keydown={handleKeyup} />
<button on:click|preventDefault={handleClick}>Enter</button>
</div>
<style>
  .space-underneath {
    margin-bottom: 50px;
  }
  input {
    color: cornflowerblue;
  }
  input:focus {
    border-color: cornflowerblue;
    /*this outline: thin attribute makes the input more accessible to keyboard users*/
    outline: thin;
  }
  button {
    background-color: lightblue;
    color: cornflowerblue;
  }
  button:hover {
    color: royalblue;
    border-color: cornflowerblue;
  }
  button:active {
    background-color: lightskyblue;
  }
</style>

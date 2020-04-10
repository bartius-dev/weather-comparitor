<script>
    // this component uses component bindings to communicate data
    import { createEventDispatcher } from 'svelte';

    export let newCity = "";

    const dispatch = createEventDispatcher();

    function handleClick () {
      if (isInputSanitized()) {
          dispatch('addCity', {newCityName: newCity});
          clearInputBox();
      } else {
          alert("Must enter the name of a city")
      }
    }

    function isInputSanitized() {
        if (newCity === "") {
          return false;
        } else {
          return true;
        }
    }

    function clearInputBox () {
        newCity = "";
    }

    function enterable(node) {
      function handleKeyPress(event){
        console.log(event.clientX);
        node.dispatchEvent(new CustomEvent('pressEnter', {
          detail: {}
        }))
      }

      node.addEventListener('keyup', handleKeyPress());

        return {

        }
    }
</script>

<input bind:value={newCity}>
<!--       use:enterable-->
<!--       on:pressEnter={handleClick}>-->
<button on:click|preventDefault={handleClick}>
    Enter
</button>

<style>
    input {
        color: cornflowerblue;
    }
    input:focus {
        border-color: cornflowerblue;
        transition: border .2s ease-in-out;
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

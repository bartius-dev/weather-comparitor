<script>
    export let city = "";
</script>

<input bind:value={city}>

<style>
    input {
        color: lawngreen;
    }
    input:focus {
        border-color: lawngreen;
        transition: border .5s ease-in-out;
        /*this outline: thin attribute makes the input more accessible to keyboard users*/
        outline: thin;
    }
</style>

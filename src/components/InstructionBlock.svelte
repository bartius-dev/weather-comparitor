<script>

</script>

<div class="fade-in-out">
  <h1>^</h1>
  <p>type a city & country combo above!</p>
</div>

<style>
  p {
    margin-top: -60px;
  }

  .fade-in-out {
    -webkit-animation: fadeinout 4s linear;
    animation: fadeinout 4s linear;
    animation-iteration-count: infinite;
    opacity: 0.3;
  }

  @-webkit-keyframes fadeinout {
    50% {
      opacity: 0;
    }
  }

  @keyframes fadeinout {
    50% {
      opacity: 1;
    }
  }
</style>

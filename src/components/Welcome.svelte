<h1>Welcome!</h1>
<div class="cloud" />
<div class="cloud-fluff" />

<style>
  @keyframes shimmy {
    0% {
      transform: translate(-10px, 0);
    }
    100% {
      transform: translate(5px, 0);
    }
  }

  .cloud {
    left: 52%;
    top: -80px;
    position: relative;
    background-color: lightblue;
    width: 175px;
    height: 75px;
    border-radius: 50px;
    z-index: -1;
    animation: shimmy 3s infinite;
    animation-direction: alternate;
  }

  .cloud:before {
    content: "";
    position: absolute;
    top: -30px;
    left: 20px;
    background-color: lightblue;
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  .cloud:after {
    content: "";
    position: absolute;
    top: -50px;
    right: 15px;
    background-color: lightblue;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .cloud-fluff {
    left: 55%;
    top: 122px;
    position: absolute;
    background-color: lightblue;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    animation: shimmy 3s infinite;
    animation-direction: alternate;
  }
</style>

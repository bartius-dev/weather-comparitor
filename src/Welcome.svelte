<h1>Welcome!</h1>
<div class='cloud'></div>
<div class='white-ball'></div>
<style>
    .cloud {
        left: 52%;
        top: -80px;
        position: relative;
        background-color: lightblue;
        width: 175px;
        height: 75px;
        border-radius: 50px;
        /*border: 1px solid black;*/
        z-index: -1;
    }

    .cloud:before {
        content: '';
        position: absolute;
        top: -30px;
        left: 20px;
        background-color: lightblue;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        /*border: 1px solid black;*/
    }

    .cloud:after {
        content: '';
        position: absolute;
        top: -50px;
        right: 15px;
        background-color: lightblue;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        /*border: 1px solid black;*/
    }

    .white-ball {
        left: 55%;
        top: 122px;
        position: absolute;
        background-color: lightblue;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
</style>

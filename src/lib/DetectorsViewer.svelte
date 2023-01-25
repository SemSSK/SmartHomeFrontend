<script lang="ts">
    import {fromCelisiusToAllUnits,getTemperature} from '../tsLibs/temperatureModel';
    import {getHumidity} from '../tsLibs/humidityModel';
    import { onMount } from 'svelte';

    let temperature = getTemperature();
    let humidity = getHumidity().toString() + " g/m3";
    let temps = fromCelisiusToAllUnits(temperature);

    onMount(()=>{
        const interval = setInterval(()=>{
            temperature = getTemperature();
            humidity = getHumidity().toString() + " g/m3";
            temps = fromCelisiusToAllUnits(temperature);
        },500)
        return () => clearInterval(interval);
    })
</script>

<div class="container">

    <div class="temp disp">
        <div></div>
        <h2>{temps.celsius}</h2>
        <h2>{temps.fahrenheit}</h2>
        <h2>{temps.kelvin}</h2>
    </div>

    <div class="hum disp">
        <div></div>
        <h2>{humidity}</h2>
    </div>
    
</div>



<style>

    *{
        -webkit-text-stroke: 1px black;
    }
    
    .container{
        width: 30cm;
        height: 50vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }


    .disp{
        margin: 1%;
        width: 20%;
        height: 90%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(red, green, blue, #000);
        box-shadow: 0px 0px 50px black;
    }
    .disp:hover{
        transform: rotate(0deg) translate(0px,0px) scale(2);
    }
    .disp{
        transition-timing-function: ease-in-out;
        transition-duration:  250ms;
    }


  
    .hum{
        background-image: url('../assets/humid.svg');
        background-size: cover;
        justify-content: start;
        transform: rotate(10deg) translate(-20px,100px);
        transition-duration: 0.5s;
    }
    .hum div{
        margin-top: 1.3cm;
        background-image: url('../assets/humidity.svg');
        background-size: cover;
        width : 1.5cm;
        height: 1.5cm;
    }


    
    .temp{
        background-image: url('../assets/temp.svg');
        background-size: cover;
        transform: rotate(-10deg) translate(20px,-100px);
        transition-duration: 0.5s;
    }
    .temp div{
        background-image: url('../assets/thermometer.svg');
        background-size: cover;
        width : 1.5cm;
        height: 1.5cm;
    }

    
</style>



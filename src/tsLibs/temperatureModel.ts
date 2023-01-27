import axios from "axios";
import { navigate } from "svelte-routing";
import { axiosConfig, getRandomInRange, getServerUrl } from "./core";

interface temperatureUnits{
    celsius : string,
    kelvin : string,
    fahrenheit : string
};

const convertCelsiusToKelvin = (celsius:number) => celsius + 273.15; 

const convertCelsiusToFarenheit = (celsius:number) => celsius * (9/3) + 32;

function fromCelisiusToAllUnits(celsius:number) : temperatureUnits{
    return {
        celsius : celsius.toString() + "°C",
        kelvin : convertCelsiusToKelvin(celsius).toString() + " K",
        fahrenheit : convertCelsiusToFarenheit(celsius).toString() + "°F",
    };
}

const getTemperature = () => Math.floor(getRandomInRange(20,25));

export const getTemperatureAsync = (callback: (arg0:temperatureUnits)=>void) => {
    axios.get(getServerUrl() + "temperature",axiosConfig())
        .then((res)=>{
            callback(fromCelisiusToAllUnits(parseInt(res.data)));
        })
        .catch(()=>navigate("/"))
} 
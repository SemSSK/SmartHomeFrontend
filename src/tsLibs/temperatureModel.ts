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
            if(res.status === 403){
                navigate("/")
            }
            else{
                console.log(fromCelisiusToAllUnits(parseInt(res.data)))
                callback(fromCelisiusToAllUnits(parseInt(res.data)));
            }
        })
} 
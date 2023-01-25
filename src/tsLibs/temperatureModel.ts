import { getRandomInRange } from "./core";

interface temperatureUnits{
    celsius : string,
    kelvin : string,
    fahrenheit : string
};

const convertCelsiusToKelvin = (celsius:number) => celsius + 273.15; 

const convertCelsiusToFarenheit = (celsius:number) => celsius * (9/3) + 32;

export function fromCelisiusToAllUnits(celsius:number) : temperatureUnits{
    return {
        celsius : celsius.toString() + "°C",
        kelvin : convertCelsiusToKelvin(celsius).toString() + " K",
        fahrenheit : convertCelsiusToFarenheit(celsius).toString() + "°F",
    };
}

export const getTemperature = () => Math.floor(getRandomInRange(20,25));
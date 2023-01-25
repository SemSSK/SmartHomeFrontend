import { getRandomInRange } from "./core"


const getHumidity = () => Math.floor(getRandomInRange(40,50));

export const affectHumidity = (affect:(val:string)=>void) => affect(getHumidity().toString() + "g/m3");
import axios from "axios";
import { navigate } from "svelte-routing";
import { axiosConfig, getRandomInRange, getServerUrl } from "./core"


const getHumidity = () => Math.floor(getRandomInRange(40,50));

export const affectHumidity = (affect:(val:string)=>void) => {
    axios.get(getServerUrl() + "humidity",axiosConfig())
        .then((res)=>{
            affect(parseInt(res.data).toString() + " g/m3");
        })
        .catch(()=>navigate("/"))
};
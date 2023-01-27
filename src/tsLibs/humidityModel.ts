import axios from "axios";
import { navigate } from "svelte-routing";
import { axiosConfig, getRandomInRange, getServerUrl } from "./core"


const getHumidity = () => Math.floor(getRandomInRange(40,50));

export const affectHumidity = (affect:(val:string)=>void) => {
    axios.get(getServerUrl() + "humidity",axiosConfig())
        .then((res)=>{
            if(res.status === 403){
                navigate("/");
            }
            else{
                affect(parseInt(res.data).toString() + " g/m3")
            }
        })
};
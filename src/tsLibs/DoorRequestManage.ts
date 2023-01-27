import axios from "axios";
import { navigate } from "svelte-routing";
import { axiosConfig, getServerUrl } from "./core";
import type { DoorRequest } from "./Model/DoorReqModel";


export const getRequest = (assign : (doorReq:Array<DoorRequest>)=>void) => {
    axios.get(getServerUrl() + "door",axiosConfig())
        .then((res)=>{
            assign(res.data);
        })
        .catch(()=>{
            navigate("/")
        })
}
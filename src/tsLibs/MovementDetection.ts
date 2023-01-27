import axios from "axios"
import { navigate } from "svelte-routing"
import { axiosConfig, getServerUrl } from "./core"

export const getAlert = (callback: (arg0: Array<any>) => void) => {
    axios.get(getServerUrl() + "alert",axiosConfig())
        .then((res)=>{
            if(res.status === 403){
                navigate("/");
            }
            else{
                callback(res.data);
            }
        })
}
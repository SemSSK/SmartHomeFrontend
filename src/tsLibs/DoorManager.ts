import axios from "axios";
import { navigate } from "svelte-routing";
import { axiosConfig, getServerUrl } from "./core";


export const getDoorState = (setDoorState : (v:boolean)=>void)=>{
    axios.get(getServerUrl() + "lockstate",axiosConfig())
        .then((res)=>{
            setDoorState(res.data.state);
        })
        .catch((res)=>{
            navigate("/");
        })
};
export const openDoor = (setDoorState : (v:boolean)=>void) => {
    axios.post(getServerUrl() + "door/open",{},axiosConfig())
         .then(()=>{
            getDoorState(setDoorState);
         })
};
export const closeDoor = (setDoorState: (v:boolean)=>void) => {
    axios.post(getServerUrl() + "door/close",{},axiosConfig())
         .then(()=>{
            getDoorState(setDoorState);
         })
};

export const askForDoorToOpen = ()=>{
    axios.post(getServerUrl() + "opendoor",{},axiosConfig());
};
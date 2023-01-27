import axios from "axios";
import { navigate } from "svelte-routing";
import { axiosConfig, getServerUrl } from "./core";


export const getDoorState = (setDoorState : (v:boolean)=>void)=>{
    axios.get(getServerUrl() + "lock",axiosConfig())
         .then((res)=>{
            if(res.status === 403){
                navigate("/");
            }
            else{
                setDoorState(res.data.state);
            }
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
    axios.post(getServerUrl() + "opendoor",axiosConfig());
};
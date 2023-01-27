import axios from "axios";
import { navigate } from "svelte-routing";
import { axiosConfig, devMode, getAuthKey, getServerUrl, setAuthKey } from "./core";
import type { User} from "./Model/UserModel";
import {accounts} from "./Model/UserModel";

const url = "http://localhost:8001/login"

const getUser = (username: string,password: any) : User | undefined => accounts.find(user => user.username === username)

export const login = (username:string,password:string,setAccount:(usr:User)=>void) => {
    const user = {
        username:username,
        password:password
    }
    const res = null;
    if(devMode){
        setAccount(getUser(username,password));
    }
    else{
        axios.post(url,user,axiosConfig())
            .then((res)=>{
                if(res.status === 403){
                    setAccount(null);
                }
                else{
                    const u : User = res.data;
                    setAuthKey(u);
                    setAccount(u);
                    u.isAdmin ? navigate("/admin") : navigate("/visitor");
                }
            })
    }
}


export const logout = ()=>{
    console.log(getAuthKey());
    !devMode ? axios.post(getServerUrl() + "logout",{},axiosConfig())
        .finally(()=>{
            navigate("/");
        }) : ()=>{}
}
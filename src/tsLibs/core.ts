import axios from "axios";
import type { User } from "./Model/UserModel";

export function getRandomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const serverUrlBase = "http://localhost:"

export const getAuthKey = () : User => JSON.parse(localStorage.getItem('Auth'));
export const setAuthKey = (user:User) => localStorage.setItem("Auth",JSON.stringify(user));

export const getServerUrl = () => getAuthKey().isAdmin ? serverUrlBase + "8001/" : serverUrlBase + "8000/";

export const devMode = false;


export const axiosConfig = () => 
   { 
        return {
            headers:{
                'Auth':getAuthKey() ? getAuthKey().username : '',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }
    }
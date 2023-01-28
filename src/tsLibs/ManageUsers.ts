import axios from "axios"
import { navigate } from "svelte-routing"
import { axiosConfig, devMode, getServerUrl } from "./core"
import { accounts, makeUser, type User } from "./Model/UserModel"


const addUser = (username:string,users:Array<User>) : Array<User> => [...users,makeUser(users.length + 1,username,false)]
const updateUser = (user:User,users:Array<User>) : Array<User> => users.map((u) => u.Id === user.Id ? user : u)
function deleteUser(user: { Id: number} , users: Array<User>): Array<User> {
    return users.filter((u) => u.Id !== user.Id)
}
const getUsers = () => accounts


export const addUserAsync = (username:string,users:Array<User>,callback: (arg0: User[]) => void) => {
    const usr = {
        username:username,
        password:1111
    }
    devMode ? callback(addUser(username,users))
        : axios.post(getServerUrl() + "user",usr,axiosConfig())
            .then((res)=>{
                getUsersAsync(callback);
            })
            .catch(()=>navigate("/"))
} 

export const updateUserAsync = (user:User,users:Array<User>,callback: (arg0: User[]) => void) => {
    console.log(user);
    devMode ? callback(updateUser(user,users))
        : axios.put(getServerUrl() + "user",user,axiosConfig())
            .then((res)=>{
                getUsersAsync(callback);
            })
            .catch(()=>navigate("/"));
} 

export const deleteUserAsync = (user:{Id:number},users: User[],callback: (arg0: User[]) => void) => {
    devMode ? callback(deleteUser(user,users))
        : axios.delete(getServerUrl() + "user",{data:user,...axiosConfig()})
        .then((res)=>{
            getUsersAsync(callback);
        })
        .catch(()=>navigate("/"))
}

export const getUsersAsync = (callback: (arg0: User[]) => void) => {
    devMode ? callback(getUsers())
        : axios.get(getServerUrl() + "user",axiosConfig())
            .then((res)=>{
                console.log(res.data)
                callback(res.data)
            })
            .catch(()=>navigate("/"))
}
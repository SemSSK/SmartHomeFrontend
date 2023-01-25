import { accounts, makeUser, type User } from "./Model/UserModel"


const addUser = (username:string,users:Array<User>) : Array<User> => [...users,makeUser(users.length + 1,username,false)]
const updateUser = (user:User,users:Array<User>) : Array<User> => users.map((u) => u.id === user.id ? user : u)
function deleteUser(user: { id: number} , users: Array<User>): Array<User> {
    return users.filter((u) => u.id !== user.id)
}
const getUsers = () => accounts


export const addUserAsync = (username:string,users:Array<User>,callback: (arg0: User[]) => void) => {
    callback(addUser(username,users));
} 

export const updateUserAsync = (user:User,users:Array<User>,callback: (arg0: User[]) => void) => {
    callback(updateUser(user,users));
} 

export const deleteUserAsync = (user:{id:number},users: User[],callback: (arg0: User[]) => void) => {
    callback(deleteUser(user,users));
}

export const getUsersAsync = (callback: (arg0: User[]) => void) => {
    callback(getUsers())
}
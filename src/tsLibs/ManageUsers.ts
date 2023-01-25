import { accounts, makeUser, type User } from "./Model/UserModel"




export const addUser = (username:string,users:Array<User>) : Array<User> => [...users,makeUser(users.length + 1,username,false)]
export const updateUser = (user:User,users:Array<User>) : Array<User> => users.map((u) => u.id === user.id ? user : u)
export function deleteUser(user: { id: number} , users: Array<User>): Array<User> {
    return users.filter((u) => u.id !== user.id)
}
export const getUsers = () => accounts
import type { User} from "./Model/UserModel";
import {accounts} from "./Model/UserModel";

const getUser = (username: string,password: any) : User | undefined => accounts.find(user => user.username === username)

export const login = (username:string,password:string) => getUser(username,password)
export interface User{
    Id:number,
    username:string,
    isAdmin:boolean
}

export const makeUser = (id:number,username: string,isAdmin: boolean) : User => (
    {
        Id:id,
        username:username,
        isAdmin:isAdmin
    }
)

export const accounts = [
    makeUser(0,"sem",true),
    makeUser(1,"wassim",false)
]

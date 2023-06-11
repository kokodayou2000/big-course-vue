import instance from "@/apis/base";

export const login = (phone:string,pwd:string) =>{
    return instance.get("/user/login",{
        params:{
            phone,
            pwd
        }
    })
}

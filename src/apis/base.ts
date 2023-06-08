import axios from "axios/index";


const instance = axios.create({
    baseURL:'/api'
})

instance.interceptors.request.use((config)=>{
    console.log("execute request" + config)
    return config
})

instance.interceptors.response.use(
    (response)=> {
        const {data} = response

        // return  Promise.reject(response)
        return response
    },
    (err) =>{
        console.log("err")
        return err
    }
)

export default instance

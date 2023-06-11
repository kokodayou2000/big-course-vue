import axios from "axios";


const instance = axios.create({
    baseURL:"http://localhost:7777/api/v1"
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // console.log("request "+config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data=response.data;
    // console.log("response"+data)
    return data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// instance.interceptors.request.use((config)=>{
//     console.log("execute request" + config)
//     return config
// })
//
// instance.interceptors.response.use(
//     (response)=> {
//         const {data} = response
//
//         // return  Promise.reject(response)
//         return response
//     },
//     (err) =>{
//         console.log("err")
//         return err
//     }
// )

export default instance

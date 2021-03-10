import axios from "axios"
const Server = axios.create({
    baseURL: "",
    timeout:5000,
})

// 配置请求拦截器
Server.interceptors.request.use(function (config) {
    let token =JSON.parse(sessionStorage.getItem("yang_2021"))||[];
    if(token){
        config.headers['Authorization']=token;
        return config
    }else{
        return config
    }
    
}, (error) => {
    
});
// 响应拦截器
Server.interceptors.response.use((response) => {
    return response
}, (error) => {
   
})
export default Server
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import cookies from 'js-cookie'
import Vx from './Vx'
const apiUrl:string = '';
const create:any = Axios.create({
    baseURL:apiUrl??apiUrl,
    headers: Vx.state.RequsetMode,
    withCredentials:true,
    timeout:5000,
    transformRequest:((data)=>{
        data = qs.stringify(data)
        return data
    })
})

create.interface.request.use(async (config:AxiosRequestConfig) => {
    const token = Vx.state.stateToken;
    if(token) config.headers.Authorization = `${token}`; config.data = qs.stringify(config.data)
    cookies.get(token) ? config.headers.token = cookies.get(token) : config.headers.token = ''
    config.headers['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
    return config
},async error=>{
    return await Promise.resolve(error)
})

create.interface.response(async (Response:AxiosResponse)=>{
    const status = Response.status
    if(await (status != 200)){
        return new Error('Error UpData')
    }
},async error=>{
    return await Promise.resolve(error)
})

export default create
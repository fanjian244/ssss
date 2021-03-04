//axios
import axios from 'axios'
import {Message} from 'view-design'

//创建实例
const http = axios.create({
    //基础路径
    baseURL:'/api',
    //超时,过了就请求失败
    timeout: 10000
})

//响应拦截
http.interceptors.response.use(res => {
//请求拿到的结果直接就是要的数据
    return res.data
},err => {
 //请求失败的错误
 //根据状态码来判断
    let status =err.response && err.response.status
    if (status === 400){
        Message.error('请求参数错误')
    }
    if (status === 401){
        Message.error('没有权限')
    }
    if (status === 403){
        Message.error('登录过期')
    }
    if (status === 500){
        Message.error('服务器出错')
    }
    if (status === 503){
        Message.error('服务器在维护')
    }
    if (status === 404){
        Message.error('请求路径错误')
    }
    return Promise.reject(err)
})

export default http
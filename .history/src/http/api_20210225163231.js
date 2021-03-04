//封装所有的请求
import http from './index'
export default {
// 添加商品
addgoods(){
    return http.get('/goods/addgoods')
},
}

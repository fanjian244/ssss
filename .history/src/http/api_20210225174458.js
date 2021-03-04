//封装所有的请求
import http from './index'
export default {
// 添加商品
addgoods(name,img,price,promotion,classification,brand,description,cont,Sellers){
    return http.get('/goods/addgoods')
},
}

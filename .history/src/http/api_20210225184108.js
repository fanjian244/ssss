//封装所有的请求
import http from './index'
export default {
// 添加商品（名称，图片，价格，促销，分类，品牌，详情，数量，热卖）
addgoods({name,img,price,promotion,classification,brand,description,cont,Sellers}){
    return http.get('/goods/addgoods',{
        name,img,price,promotion,classification,brand,description,cont,Sellers
    })
},
}

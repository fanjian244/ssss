//封装所有的请求
import http from './index'

export default {
// 添加商品（名称，图片，价格，促销，分类，品牌，详情，数量，热卖）
addgoods({name,img,price,promotion,classification,brand,description,cont,Sellers}){
    return http.post('/goods/addgoods',{
        name:name,
        img:img,
        price:price,
        promotion:promotion,
        classification:classification,
        brand:brand,
        description:description,
        cont:cont,
        Sellers:Sellers
    })
},
login({username,password}){
    return http.post('/user/login',{
        username:'admin',
        password:123456
    })
}
}

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
// 获取商品列表
getGoods(){
    return http.get('/goods/getGoods')
},
// 删除商品
delGoods({id}){
    return http.post('/goods/delGoods',{id:id})
},
// 修改商品
changeGoods({id,name,price,cont}){
    return http.post('/goods/changeGoods',{
        id:id,
        name:name, 
        cont:cont,
        price:price,
    })
},
// 查询商品
findGoods({name}){
    return http.get('/goods/findGoods',{
        name:name
    })
},
}

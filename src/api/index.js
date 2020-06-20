// 包含项目中所有接口的ajax请求函数
// 函数的返回值是promise,函数内部调用ajax模块发请求

// 需要掌握一个能力，根据接口文档, 定义接口请求函数
import ajax from './ajax'
import mockAjax from './mockAjax'




// 获取首页的三级分类 
//    /api/product/getBaseCategoryList GET
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')

// export function reqCategoryList () {
//   return ajax('/product/getBaseCategoryList')
// }


/*
定义访问mock的接口请求函数
*/
// export const reqBanners = () => ajax('/mock/banners')
// export const reqFloors = () => ajax('/mock/floors')
// 需要重新复制一份ajax.js文件，将里面的基础路径改成baseURL: '/mock', 
// 在此文件中引入mockAjax.js
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
// 在App.vue中引入测试一下

/*
获取商品列表
options:包含所有需要传递的搜索请求参数的对象
*/

export const reqProductList = (options) => ajax.post('/list', options)

/* 
获取商品详情信息
*/
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)


/* 
获取购物车列表
/api/cart/cartList   GET
*/
export const reqShopCart = () => ajax.get('/cart/cartList')

/*
添加到购物车(对已有物品进行数量改动)
/api/cart/addToCart/{ skuId }/{ skuNum }     POST
skuId: 商品ID
skuNum: 商品数量, 正数代表增加, 负数代表减少
*/
export const reqAddToCart = (skuId,skuNum) => ajax.post(`/cart/addToCart/${ skuId }/${ skuNum }`)

/*
切换某个购物项的选中状态
skuId: 商品的ID
isChecked: 商品选中状态, '0'代表不选中, '1'代表选中
/api/cart/checkCart/{skuId}/{isChecked} GET
*/
export const reqCheckCartItem = (skuId,isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)


/* 
删除购物项商品
/api/cart/deleteCart/{skuId} DELETE
*/
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)


/* 
  请求登录 
  /api/user/passport/login
*/
export function reqLogin (mobile, password) {
  //  注意此处要返回promise，用的是axios语法，加上return
    // 将ajax作为函数使用
    // return ajax({
    //   url:"/user/passport/login",
    //   method:"POST",
    //   data:{mobile,password}
    // })
  
    // 将ajax作为对象使用
    return ajax.post('/user/passport/login', {mobile, password})
  }

/* 
请求注册
/api/user/passport/register  POST
userInfo{ 包含以下属性
    mobile
    password
    code
}
*/
export const reqRegister = (userInfo) => ajax.post('/user/passport/register',userInfo)


/* 
退出登陆
/api/user/passport/logout
*/
export const reqLogout = () => ajax('/user/passport/logout')

/* 
获取订单列表
/api/order/auth/{page}/{limit}   GET
page  页码     limit   每页的数量
*/
export const reqOrders = (page,limit) => ajax(`/order/auth/${page}/${limit}`)

/*
获取订单交易信息
/api/order/auth/trade   GET
*/
export const reqTradeInfo = () =>ajax('/order/auth/trade')

/*
提交订单
/api/order/auth/submitOrder?tradeNo={tradeNo}   POST
tradeNo  订单编号(拼接在路径中)，query参数
orderInfo  包含要提交的订单相关信息的对象

请求体数据
{
    "consignee": "admin",
    "consigneeTel": "15011111111",
    "deliveryAddress": "北京市昌平区2",
    "paymentWay": "ONLINE",
    "orderComment": "xxx",
    "orderDetailList": [ ]   // 商品列表

*/
export const reqSubmitOrder = (tradeNo,orderInfo) =>ajax({
  url:'/order/auth/submitOrder',
  method:'POST',
  query:{tradeNo},
  data: orderInfo   //请求体数据 
})

/**
 获取订单支付信息  GET
 /api/payment/weixin/createNative/{orderId}
 */
export const reqPayInfo = (orderId) => ajax(` /api/payment/weixin/createNative/${orderId}`)
/* 
使用mockjs来mock接口
*/
import Mock from 'mockjs'
import banners from './banners.json' // 引入的是json文件(文件内部json数组)
// 打包工具自动打包, 得到的是对应的js的数组
import floors from './floors.json'


// 返回的数据要有格式，有data，code
// 模拟返回banners接口
Mock.mock('/mock/banners',{code:200,data:banners})

// 模拟返回floors接口
Mock.mock('/mock/floors',{code:200,data:floors})

// 当前的这个模块不需要写暴露代码
// export default xxx

// 只要被加载运行一次，这两个接口就可以使用
console.log('mockserver...')
// 要在main.js入口文件引入

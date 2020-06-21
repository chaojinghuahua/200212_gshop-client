<template>
  <div>
    <h1>EventTest组件</h1>
  
  <!-- 
    原生DOM事件
    绑定原生DOM事件监听的2种情况
        在html标签上绑定DOM事件名的监听
        在组件标签上绑定DOM事件名的监听, 事件绑定在组件的根标签上
    当用户操作对应的界面时, 浏览器就会自动创建并封闭包含相关数据的事件对象, 分发对应的事件, 从而触发事件监听回调函数调用
    事件对象event, 本质是 "事件数据对象"
    event对象内的数据属性: target / offsetX / offsetY / keyCode等
    $event就是浏览器创建的event对象, 默认传递给事件监听回调函数的就是它
   -->
  <button @click="test1">测试原生事件</button>
  <button @click="test1($event)">测试原生事件2</button>
  <br><br>

  <Event1 @click.native="test2" />
  <br><br>

  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    methods: {
      test1(event){
        alert(event.target.innerHTML)
      },

      test2(event){
        alert('test2')
      }
    },

    components: {
      Event1,
      Event2,
    },

    methods: {
     
    }
  }
</script>

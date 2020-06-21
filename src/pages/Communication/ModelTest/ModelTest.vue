<template>
  <div>
    <h2>深入v-model</h2>
<!-- 
  原生标签上的v-model本质上：动态value属性和原生input事件监听
 -->
    <input type="text" v-model="name1">
    <span>{{name1}}</span>
    <br><br>
    <input type="text" :value="name2" @input="name2=$event.target.value">
    <span>{{name2}}</span>
     <br><br>
<!-- 
  组件标签上的v-model本质上：动态value属性和自定义input事件监听
    动态value属性：实现父组件向子组件通信，
    自定义input事件监听：实现子组件向父组件通信
 -->
    <CustomInput v-model="name3" />
    <span>{{name3}}</span>
    <br><br>

  <!-- 
    解析：
      $event：自定义事件数据($event)，赋值给变量(name4) ===> name4=$event
        这个数据从哪里来呢？？？(此处要分清$event的区别)
          --是子组件传递过来的
        那么子组件是怎么传的呢？？？


   -->
    <CustomInput :value="name4" @input="name4=$event" />
    <span>{{name4}}</span>
    <br><br>

  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data() {
      return {
        name1:'atguigu',
        name2:'atguigu222',
        name3:'atguigu333',
        name4:'atguigu444',
      }
    },
    components: {
      CustomInput
    }
  }
</script>

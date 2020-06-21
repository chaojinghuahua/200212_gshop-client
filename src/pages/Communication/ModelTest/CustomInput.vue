<template>
  <div style="background: #ccc; height: 50px;">
    <h2>input包装组件</h2>
    <!-- 
      父组件给子组件传递数据，子组件接收到数据之后将改变的数据传递给父组件，父子间相互通信
      把接收到的value作放在input显示
     -->
     <!-- 
       解析：
       子组件当中要能显示，父组件传递过来的value
       props:['value']  ==>  子组件声明接收value属性
       :value="value"   ==>  把接收到的value作为input的属性value，
       此时初始显示就可以了，但是子组件内部改变怎么影响父组件呢？？？

       

       $emit分发自定义的input事件
        绑定的是原生的事件监听 @input = ...
        $event.target.value ==> 原生的事件数据对象
        分发的是父组件中自定义的事件input  ==>   $emit('input',xxx)
        $emit('input',$event.target.value)  

        此时一分发，父组件的input自定义事件就会被调用，把传过来的数据($event)赋值给name4
      -->
    <input type="text" :value="value" @input="$emit('input',$event.target.value)" >  
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'CustomInput',
    props:['value']
  }
</script>

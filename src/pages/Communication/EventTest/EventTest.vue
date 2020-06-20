<template>
  <div>
    <h1>EventTest组件</h1>
  </div>
  <button @click="test1">测试原生事件</button>
  <button @click="test1($event)">测试原生事件2</button>
  <br><br>

  <Event1 @click.native="test2" />
  <br><br>

  
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

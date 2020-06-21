<template>
  <div style="background: #ccc; height: 50px;">
    <span>小明每次花100元</span>
    <!-- 下边这么写不会改变父组件 -->
    <!-- <button @click="money = money - 100" >花钱</button> -->
    <button @click="$emit('updata:money',money - 100)" >花钱</button>
    爸爸还剩 {{money}} 元
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['money'],
    name: 'Child'
  }
</script>

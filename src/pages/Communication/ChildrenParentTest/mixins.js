export const cpMixin = { //组建的配置对象
  methods: {
  /*
  花钱
  */
   spendMoney(count){
    this.money -= count
  },

 /*
 给父组件指定数量的钱
 */
  gaveMoney(count){
   //  更新自己的钱
   this.money -= count
   // 更新父组件的钱
   this.$parent.money += count
  }
  },
}
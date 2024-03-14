<template>
  <div :class="`card-item-type${idx%2}`"
    style="color: white; display: inline-grid;
      width: 480px;
      grid-template-rows: 90px;
      grid-template-columns: 100px 250px 100px">
    <input
        ref="checkbox"
        v-model="checked"
        @change="check_handler"
        type="checkbox" style="height: 70px; margin: 10px 0;
        border: 2px #cfd213;">
    <div style="margin: 10px 5px 10px 10px; display: grid;
      grid-template-rows: 40px 40px;">
      <p :style="`margin: 0; font-weight: bold; font-size: ${title.length > 10 ? 24 - title.length + 6 : 24}px; text-align: left;`"> {{title}} </p>
      <p style="margin: 0; font-size: 14px; text-align: left;"> {{description}} </p>
    </div>
    <div style="
      margin: 0;
      display: grid;
      grid-template-rows: 20px 33px 30px;">
      <img style="margin: 18px 0;" src="/public/trophy-prize-svgrepo.svg" >
      <p style="margin: 0; width: 100%; text-align: right;"> {{rate}} % </p>
      <progress style="margin: 0; width: 100%;" :max="100" :value="rate"></progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoteItem",
  props: {
    title: {
      type: String,
      default: "尘埃落定",
    },
    description: {
      type: String,
      default: "收到邮寄的大学录取通知书",
    },
    rate: {
      type: Number,
      default: 100.0,
    },
    idx: {
      type: Number,
      default: 0,
    },
    init_checked: {
      type: Boolean,
      default: false,
    },
    check_handler: {
      type: Function,
      default: () => {},
    }
  },
  data(){
    return {
      checked: this.init_checked
    }
  },
}
</script>

<style scoped>
.card-item-type0 {
  background: var(--color-purple-light);
}
.card-item-type1 {
  background: var(--color-purple-deep);
}
</style>
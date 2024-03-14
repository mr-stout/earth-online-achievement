<template>
  <div style="background-color: #3a2b62;">
    <h1 style="color: white;">校园成就</h1>
    <p style="color: white;">哈尔滨工业大学（威海校区）版</p>
    <p style="color: white; text-align: left;">注：静态页面，暂无统计功能，后面可能会做</p>
    <div v-for="(obj, idx) in item_list">
      <VoteItem :title="obj.title"
                :description="obj.description"
                :rate="obj.rate"
                :idx="idx"
                :check_handler="handleCheckboxChanged"
            />
    </div>
    <img style="margin-top: 20px; " src="https://badges.toozhao.com/badges/01HRY5G34JQNASRKFEDW94D439/green.svg" />
    <p style="color: white; text-align: center;"> 您的成就达成数为 {{num_checked}} / {{item_list.length}}，成就达成率 {{(num_checked * 100.0 / item_list.length).toFixed(2)}} %</p>
    <p style="color: white; text-align: left;">文案及创意来源：https://tieba.baidu.com/p/8933436316</p>
    <p style="color: white; text-align: left;">项目开源地址：https://github.com/mr-stout/earth-online-achievement</p>
  </div>
</template>

<script>
import {achievement_list} from "../constants.tsx";
import VoteItem from "./VoteItem.vue";

export default {
  name: "Vote",
  components: {VoteItem},
  computed: {
  },
  data: () => {
    return {
      item_list: achievement_list,
      num_checked: 0,
    }
  },
  methods: {
    handleCheckboxChanged(evt){
      const isChecked = evt.target.checked
      if (isChecked) {
        this.num_checked += 1
      } else {
        this.num_checked -= 1
      }
    }
  }
}
</script>

<style scoped>
</style>

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
            />
    </div>
    <p style="color: white; text-align: left;">文案及创意来源：https://tieba.baidu.com/p/8933436316</p>
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
      item_list: achievement_list
    }
  }
}
</script>

<style scoped>
</style>

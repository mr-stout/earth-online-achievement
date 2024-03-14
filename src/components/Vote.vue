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
                :init_checked="!!obj.initChecked"
                :check_handler="(evt) => handleCheckboxChanged(evt, idx)"
            />
    </div>
    <img style="margin-top: 20px; " src="https://badges.toozhao.com/badges/01HRY5G34JQNASRKFEDW94D439/green.svg" />
    <p style="color: white; text-align: center;"> 您的成就达成数为 {{num_checked}} / {{item_list.length}}，成就达成率 {{(num_checked * 100.0 / item_list.length).toFixed(2)}} %</p>
    <button @click="handleShareLink"> 分享结果 </button>
    <p style="color: white; text-align: left;">文案及创意来源：
      <a href="https://tieba.baidu.com/p/8933436316">https://tieba.baidu.com/p/8933436316</a>
    </p>
    <p style="color: white; text-align: left;">项目开源地址：
      <a href="https://github.com/mr-stout/earth-online-achievement">https://github.com/mr-stout/earth-online-achievement</a>
    </p>
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
      checked_list: achievement_list.map((val) => {val.initChecked}),
      init_data: window.location.href.split('='),
      num_checked: 0,
    }
  },
  beforeMount(){
    if (this.init_data.length < 2) {
      return;
    }

    const data = this.init_data[1]
    for (let i = 0 ; i < data.length ; i++){
      if (data[i] === '1') {
        this.item_list[i].initChecked = true;
        this.checked_list[i] = true;
        this.num_checked += 1
      }
    }
  },
  methods: {
    handleCheckboxChanged(evt, idx){
      const isChecked = evt.target.checked
      this.checked_list[idx] = isChecked

      if (isChecked) {
        this.num_checked += 1
      } else {
        this.num_checked -= 1
      }
    },
    getCurrentData(){
      let result = ""
      for(let i = 0 ; i < this.checked_list.length ; i++){
        if(this.checked_list[i]){
          result += "1"
        } else {
          result += "0"
        }
      }
      return result
    },
    handleShareLink(){
      const eventName = 'copy'
      let handler = (evt) => {
        let arr = window.location.href.split('/')
        let url = arr[0] + '//' + arr[2] + '?data=' + this.getCurrentData()

        let tmp = ""
        for(let i = url.length - 1 ; i >= 0 ; i--){
          if(url[i] === '0'){
            continue;
          }
          tmp = url.substring(0, i + 1)
          break
        }
        url = tmp



        evt.preventDefault()
        evt.clipboardData.setData('text/plain', url)
        document.removeEventListener(eventName, handler)

        alert("链接复制成功")
      }

      document.addEventListener(eventName, handler)
      document.execCommand('Copy')
    },
  }
}
</script>

<style scoped>
</style>

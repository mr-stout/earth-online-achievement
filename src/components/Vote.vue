<template>
  <div :style="`transition: 1s height; background-color: #808080; width: 80%; margin: 0 auto; height: ${is_connected ? 0 : 30}px; overflow: hidden; padding: ${is_connected ? 0: 20}px; text-align: left; display: flex; align-items: center;`">
    <img src="/public/info-circle-svgrepo-com.svg" width="32"  height="32"/>
    <span style="margin-left: 10px;"> 目前处于离线状态，可以查看示例数据 </span>
  </div>
  <div style="background-color: #3a2b62;">
    <h1 style="color: white;">校园成就</h1>
    <select name="lists" style="font-size: 24px; background: rgb(58,43,98); color: white; border: 0; margin-bottom: 20px;"
      @change="handleFormChanged">
      <!-- 注：value是数组下标，而不是list_id -->
      <option v-for="(item, idx) in form_list" :value="idx"
              style="color: white;"
      >{{item.name}}</option>
    </select>
    <br/>
    <div v-for="(obj, idx) in cur_item_list">
      <VoteItem :title="obj.title"
                :description="obj.desc"
                :rate="obj.rate"
                :title_font_size="obj.titleFontSize"
                :idx="idx"
                :init_checked="!!obj.initChecked"
                :check_handler="(evt) => handleCheckboxChanged(evt, idx)"
            />
    </div>
    <img style="margin-top: 20px; " src="https://badges.toozhao.com/badges/01HRY5G34JQNASRKFEDW94D439/green.svg" />
    <p style="color: white; text-align: center;"> 您的成就达成数为 {{ num_checked }} / {{ cur_item_list.length }}，成就达成率
      {{ (num_checked * 100.0 / cur_item_list.length).toFixed(2) }} %</p>
    <button @click="handleShareLink"> 分享结果 </button>
    <p style="color: white; text-align: left;">文案及创意来源：
      <a href="https://tieba.baidu.com/p/8933436316">https://tieba.baidu.com/p/8933436316</a>
    </p>
    <p style="color: white; text-align: left;">项目开源地址：
      <a href="https://github.com/mr-stout/earth-online-achievement">https://github.com/mr-stout/earth-online-achievement</a>
    </p>
  </div>
</template>

<script type="tsx">
import {demo_achievement_list, demo_achievement_name, url_base, url_get_all_list} from "../constants.tsx";
import VoteItem from "./VoteItem.vue";
import {wrappedFetch} from "../utils";

export default {
  name: "Vote",
  components: {VoteItem},
  computed: {
  },
  data: () => {
    return {
      is_connected: true,
      form_list: [{
        id: 1,
        name: demo_achievement_name,
        items: demo_achievement_list
      }],
      cur_item_list: demo_achievement_list,
      checked_list: demo_achievement_list.map((val) => {val.initChecked}),
      num_checked: 0,
    }
  },
  async mounted() {
    // 获取初始数据
    // - 获取所有工程
    await wrappedFetch(`${url_base}${url_get_all_list}`).then((data) => {
      console.log(data)
      if (!data || data.length === 0) {
        this.is_connected = false
        return
      }

      this.form_list = data
      this.cur_item_list = data[0].items
    }, () => {
      this.is_connected = false
    })

    if(!this.is_connected) {
      return
    }
  },
  beforeMount(){
  },
  methods: {
    reset(){
      this.num_checked = 0
      // noinspection TypeScriptValidateTypes
      this.checked_list = this.cur_item_list.map((val) => (val.initChecked))
    },
    handleFormChanged(evt){
      const idx = Number(evt.target.value)
      const cur_form_list = this.form_list[idx]
      this.cur_item_list = cur_form_list.items
    },
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
        let url = ''

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

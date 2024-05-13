<template>
  <div
      :style="`transition: 1s height; background-color: #808080; width: 80%; margin: 0 auto; height: ${is_connected ? 0 : 30}px; overflow: hidden; padding: ${is_connected ? 0: 20}px; text-align: left; display: flex; align-items: center;`">
    <img src="/public/info-circle-svgrepo-com.svg" width="32" height="32"/>
    <span style="margin-left: 10px;"> 目前处于离线状态，可以查看示例数据 </span>
  </div>
  <div style="background-color: #3a2b62;">
    <h1 style="color: white;">校园成就</h1>
    <select name="lists"
            @change="handleFormChanged">
      <!-- 注：value是数组下标，而不是list_id -->
      <option v-for="(item, idx) in form_list" :value="idx">
        {{ item.name }}
      </option>
    </select>
    <select name="orders"
            @change="handleOrderChanged">
      <!-- 注：value是id-->
      <option v-for="(item, _) in order_list" :value="item.id">
        {{ item.name }}
      </option>
    </select>
    <br/>
    <br/>
    <div style="color: white;" v-if="is_others">
      <p style="color: white; text-align: center;"> {{others_name}} 的成就达成数为 {{ num_checked }} / {{
          cur_item_list.length
        }}，成就达成率
        {{ (num_checked * 100.0 / cur_item_list.length).toFixed(2) }} %</p>
      <button @click="handleReplay"> 朕也要玩</button>
    </div>
    <br/>
    <div v-for="(obj, idx) in cur_item_list">
      <VoteItem :title="obj.title"
                :description="obj.desc"
                :rate="obj.rate"
                :title_font_size="obj.titleFontSize"
                :idx="idx"
                :init_checked="!!obj.initChecked"
                :check_handler="(evt: any) => handleCheckboxChanged(evt, idx)"
      />
    </div>
    <img style="margin-top: 20px; " src="https://badges.toozhao.com/badges/01HRY5G34JQNASRKFEDW94D439/green.svg"/>
    <div v-if="!is_others">
      <p style="color: white; text-align: center;"> 您的成就达成数为 {{ num_checked }} / {{
          cur_item_list.length
        }}，成就达成率
        {{ (num_checked * 100.0 / cur_item_list.length).toFixed(2) }} %</p>
      <div v-if="is_connected">
        <button @click="handleShareLink"> 提交并分享结果 </button>
      </div>
    </div>

    <p style="color: white; text-align: left;">文案及创意来源：
      <a href="https://tieba.baidu.com/p/8933436316">https://tieba.baidu.com/p/8933436316</a>
    </p>
    <p style="color: white; text-align: left;">项目开源地址：
      <a href="https://github.com/mr-stout/earth-online-achievement">https://github.com/mr-stout/earth-online-achievement</a>
    </p>
  </div>
</template>

<script lang="ts">
import {
  ApiArgsFillForm, ApiArgsGetFilledForm,
  demo_achievement_list,
  demo_achievement_name,
  url_base,
  url_fill_stat_form,
  url_get_all_list, url_get_filled_form
} from "../constants.tsx";
import VoteItem from "./VoteItem.vue";
import {cvtRate, isRateNumber, parseURLParams, wrappedFetch} from "../utils";

const PARAM_LIST_ID = "id"
const PARAM_USER_NAME = "name"

export default {
  name: "Vote",
  components: {VoteItem},
  computed: {},
  data: () => {
    return {
      is_connected: true,
      is_others: false,
      others_name: "",
      form_list: [{
        id: 1,
        name: demo_achievement_name,
        items: demo_achievement_list
      }],
      order_list: [{
        id: 1,
        name: "默认排序"
      }, {
        id: 2,
        name: "升序"
      }, {
        id: 3,
        name: "降序"
      }],
      cur_list_id: 1,
      cur_item_list: demo_achievement_list,
      checked_list: demo_achievement_list.map((val) => {
        val.initChecked
      }) as any,
      num_checked: 0,
    }
  },
  async mounted() {
    // 获取初始数据
    // - 获取所有工程
    await wrappedFetch(`${url_base}${url_get_all_list}`).then((data) => {
      if (!data || data.length === 0) {
        this.is_connected = false
        return
      }

      this.form_list = data
      this.cur_item_list = data[0].items
      this.cur_list_id = data[0].id
    }, () => {
      this.is_connected = false
    })

    if (!this.is_connected) {
      return
    }

    // 读取参数
    const params = parseURLParams() as any
    const list_id = params[PARAM_LIST_ID] as any
    const user_name = params[PARAM_USER_NAME] as any
    if (list_id && user_name && Number(user_name).toString() !== 'NaN') {
      this.is_others = true
      this.others_name = user_name

      await wrappedFetch(`${url_base}${url_get_filled_form}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          list_id: list_id,
          user_name: user_name
        } as ApiArgsGetFilledForm)
      } as RequestInit, true).then((result) => {
        let yes_item_ids = result.data
        if(!yes_item_ids) return
        let yes_item_ids_map = {} as any
        for(let i = 0 ; i < yes_item_ids.length ; i++) {
          yes_item_ids_map[yes_item_ids[i]] = 1
        }

        for(let i = 0 ; i < this.cur_item_list.length ; i++){
          const item = this.cur_item_list[i]
          if(!item.id || !(item.id in yes_item_ids_map)) continue
          // hacky, only for now
          const ele = document.querySelector(`#card-input-${i}`) as any
          if(!ele) continue
          ele.click()
        }
      })
    }

  },
  methods: {
    reset() {
      this.num_checked = 0
      // noinspection TypeScriptValidateTypes
      this.checked_list = this.cur_item_list.map((val) => (val.initChecked)) as any

      for(let i = 0 ; i < this.cur_item_list.length ; i++){
        const item = this.cur_item_list[i]
        if(!item.id) continue
        // hacky, only for now
        const ele = document.querySelector(`#card-input-${i}`) as any
        if(!ele || !ele.checked) continue
        ele.click()
      }
    },
    handleReplay(){
      window.location.href = window.location.href.split('?')[0]
    },
    handleOrderChanged(evt: any) {
      const id = Number(evt.target.value)
      const arr = [...this.cur_item_list]
      this.reset()
      // 升序
      if (id == 2) {
        arr.sort((a: any, b: any) => {
          const is_a = isRateNumber(a.rate)
          const is_b = isRateNumber(b.rate)
          if(is_a && !is_b) {
            return -1
          }
          if(!is_a && is_b) {
            return 1
          }
          if(!is_a && !is_b){
            return 0
          }
          return cvtRate(a.rate) - cvtRate(b.rate)
        })
        this.cur_item_list = arr
        return
      }
      // 降序
      if (id == 3) {
        arr.sort((a: any, b: any) => {
          const is_a = isRateNumber(a.rate)
          const is_b = isRateNumber(b.rate)
          if(is_a && !is_b) {
            return -1
          }
          if(!is_a && is_b) {
            return 1
          }
          if(!is_a && !is_b){
            return 0
          }
          return cvtRate(b.rate) - cvtRate(a.rate)
        })
        this.cur_item_list = arr
        return
      }
      // 按id排序
      arr.sort((a: any, b: any) => {
        return a.id - b.id;
      })
      this.cur_item_list = arr
      return
    },
    handleFormChanged(evt: any) {
      const idx = Number(evt.target.value)
      const cur_form_list = this.form_list[idx]
      this.cur_item_list = cur_form_list.items
      this.cur_list_id = cur_form_list.id
    },
    handleCheckboxChanged(evt: any, idx: number) {
      const isChecked = evt.target.checked
      this.checked_list[idx] = isChecked

      if (isChecked) {
        this.num_checked += 1
      } else {
        this.num_checked -= 1
      }
    },
    async handleShareLink() {
      // 收集数据
      const yes_item_ids = []
      for (let i = 0; i < this.checked_list.length; i++) {
        if (!this.checked_list[i]) {
          continue
        }
        const item_id = this.cur_item_list[i].id
        if (!item_id) {
          continue
        }
        yes_item_ids.push(item_id)
      }
      // 起个名字吧
      const username = Date.now().toString()
      let send_ok = false
      await wrappedFetch(`${url_base}${url_fill_stat_form}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          list_id: this.cur_list_id,
          user_name: username,
          data: yes_item_ids,
        } as ApiArgsFillForm)
      } as RequestInit, true).then((data) => {
        console.log(data)
        send_ok = true
      }, () => {
        send_ok = false
      })
      if (!send_ok) {
        return
      }

      // 复制到剪贴板
      const eventName = 'copy'
      let handler = (evt: any) => {
        let arr = window.location.href.split('/')
        let url = `${arr[0]}//${arr[2]}?${PARAM_LIST_ID}=${this.cur_list_id}&${PARAM_USER_NAME}=${username}`

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
select {
  font-size: 24px;
  background: rgb(58,43,98);
  color: white;
  border: 0;
  margin-bottom: 20px;
}

option {
  color: white;
}
</style>

export type ApiRespGetAllList = {
    id: number,
    name: string,
    items: Achievement[]
}[]

export type ApiArgsGetSpecificStat = {
    list_id: number,
}

export type ApiRespGetSpecificStat = {
    id: number,
    name: string,
    items: Achievement[]
}

export type ApiArgsFillForm = {
    list_id: number,
    user_name: string,
    data: number[]
}

export type ApiRespFillForm = {
}

export type ApiArgsGetFilledForm = {
    list_id: number,
    user_name: string,
}

export type ApiRespGetFilledForm = {
    data: number[]
}

export type ApiResp = {
    status: number,
    msg: string,
    data: any,
}

export const url_base = 'http://127.0.0.1:8868/'
export const url_get_all_list = 'api/user/get_all_list'
export const url_get_specific_stat = 'api/user/get_stat'
export const url_fill_stat_form = 'api/user/fill_form'
export const url_get_filled_form = 'api/user/get_filled_form'

type Achievement = {
    title: string,
    desc: string,
    rate: string,
    id?: number,
    iconURL?: string,
    initChecked?: boolean
    titleFontSize?: string,
}

export const demo_achievement_name = '哈尔滨工业大学（威海校区）'
const raw_demo_achievement_list : Achievement[] = [
    {
        title: "尘埃落定",
        desc: "收到邮寄的大学录取通知书",
        rate: "99.2 %",
    },
    {
        title: "全还给老师了!",
        desc: "在高三暑假期间总学习时间小于5分钟",
        rate: "87.1 %",
    },
    {
        title: "新的开始",
        desc: "抵达哈工大(威海)南门并与之合影",
        rate: "75.4 %",
    },
    {
        title: "报告，我鞋带开了",
        desc: "在军训时间以任意借口规避一次训练",
        rate: "37.8 %",
    },
    {
        title: "浅尝..…..辄止",
        desc: "首次品尝学子食堂",
        rate: "98.9 %",
    },
    {
        title: "一，二，三，四!",
        desc: "完成军训结业典礼",
        rate: "99.5 %",
    },
    {
        title: "饭呢??",
        desc: "11点45以后前往食堂并未成功打上饭",
        rate: "97.0 %",
    },
    {
        title: "万恶的雨水",
        desc: "由于下雨主动翘掉一节早八",
        rate: "87.3 %",
    },
    {
        title: "新鲜出炉",
        desc: "在大学生服务区进行第一次打印",
        rate: "92.6 %",
    },
    {
        title: "上档次了!",
        desc: '首次品尝“欧雅轩”餐厅',
        rate: "89.9 %",
    },
    {
        title: "这课上不了一点",
        desc: "在任意一门课的第一节抢到最后一排",
        rate: "77.7 %",
    },
    {
        title: "我来组成头部!",
        desc: "在任意一门课的第一节抢到第一排",
        rate: "64.1 %",
    },
    {
        title: "有点震手……",
        desc: "首次使用校园共享单车",
        rate: "83.9 %",
    },
    {
        title: "飞驰人生重置版",
        desc: "首次使用校园共享电动车",
        rate: "62.1 %",
    },
    {
        title: "有点...小贵 ?",
        desc: "在大学生服务区进行一次消费",
        rate: "97.3 %",
    },
    {
        title: "到底在哪里",
        desc: "首次丢失校园卡",
        rate: "92.6 %",
    },
    {
        title: "就这样吧?",
        desc: "在任意一门课上因迟到决定直接缺勤",
        rate: "89.9 %",
    },
    {
        title: "原来大学还有作业吗 ?",
        desc: "忘记提交一次作业",
        rate: "97.7 %",
    },
    {
        title: "是不是不太健康....?",
        desc: "由于晚起连续跳过三次早饭",
        rate: "64.1 %",
    },
    {
        title: "老师?真不熟好吧",
        desc: "在任意一门的考试中忘记任课老师姓名",
        rate: "53.9 %",
    },
    {
        title: "大梦谁先觉……",
        desc: "睡过一整节课",
        rate: "72.1 %",
    },
    {
        title: "探索者的好奇",
        desc: "探索3栋不同的学校建筑",
        rate: "99.2 %",
    },
    {
        title: "冒险家的决心",
        desc: "探索10栋不同的学校建筑、任意一座公园",
        rate: "86.4 %",
    },
    {
        title: "开拓者的勋章",
        desc: "探索校园内每一栋建筑与公园",
        rate: "11.9 %",
    },
    {
        title: "来不及了!",
        desc: "在课堂开始前15分钟内购买简餐",
        rate: "92.0 %",
    },
    {
        title: "吧唧吧哪",
        desc: "一天内连续在学子和学苑食堂消费",
        rate: "89.2 %",
    },
    {
        title: "孤独的美食家",
        desc: "品尝过学子和学苑食堂内每一个窗口",
        rate: "42.4 %",
    },
    {
        title: "华莱士品鉴官",
        desc: "品尝过学校内所有食物窗口",
        rate: "11.3 %",
    },
    {
        title: "开卷!",
        desc: "在一整节课上不听课并坚持学习",
        rate: "94.1 %",
    },
    {
        title: "焦虑贩卖者",
        desc: "连续4节课不听课并坚持学习",
        rate: "67.8 %",
    },
    {
        title: "这样就能保研吗...?",
        desc: "连续一星期不听课并持续坚持学习",
        rate: "33.4 %",
    },
    {
        title: "卷王传说",
        desc: "连续一个月不听课并在课余坚持学习",
        rate: "4.9 %",
    },
    {
        title: "梦想中的社团生活",
        desc: "加入任意一个社团或兴趣协会",
        rate: "78.5 %",
    },
    {
        title: "大显身手",
        desc: "参与一次大型社团活动并担任重要角色",
        rate: "51.0 %",
    },
    {
        title: '“前辈”?',
        desc: "担任社团职位或协会骨干",
        rate: "24.9 %",
    },
    {
        title: "看着挺好看就买了",
        desc: "为宿舍购买一件装饰品",
        rate: "97.4 %",
    },
    {
        title: "物流集散站",
        desc: "为宿舍购买10件以上装饰品/实用工具",
        rate: "92.0 %",
    },
    {
        title: "装扮模式",
        desc: "为宿舍购买30件以上装饰品/实用工具",
        rate: "23.5 %",
    },
    {
        title: "学长!别跑!",
        desc: "在校园任意一处碰见野猫后失去其踪迹",
        rate: "89.2 %",
    },
    {
        title: "鹅，鹅，鹅",
        desc: "在学校人工湖遇见排成队的三只黑天鹅",
        rate: "78.9 %",
    },
    {
        title: "我可没有薯条",
        desc: "在校门口的海水浴场遇见海鸥",
        rate: "28.1 %",
    },
    {
        title: "第三?类接触",
        desc: "在学校后山遇见蛇",
        rate: "0.8 %",
    },
    {
        title: "千里冰封...?",
        desc: "遭遇威海特色冰冻天气",
        rate: "78.2 %",
    },
    {
        title: "万里雪飘!",
        desc: "遭遇威海特色暴风雪",
        rate: "69.9 %",
    },
    {
        title: "面朝大海，春暖花开",
        desc: "前往校门口的金海滩海水浴场",
        rate: "97.0 %",
    },
    {
        title: "好羡慕他们山大……",
        desc: "班级女生比例小于10%",
        rate: "31.8 %",
    },
    {
        title: "我来，我见，我到处睡觉",
        desc: "在校园内每一栋教学楼都有过入眠经历",
        rate: "44.9 %",
    },
    {
        title: "+0.5",
        desc: "转发一条个性发展分说说",
        rate: "61.5 %",
    },
    {
        title: "雷锋精神",
        desc: "参加一次学校组织的社会实践",
        rate: "37.7 %",
    },
    {
        title: "你是现充 ?",
        desc: "在任意夜晚经历舍友夜不归宿",
        rate: "90.4 %",
    },
    {
        title: "原来只有我不是现充",
        desc: "在任意夜晚只有自己在宿舍",
        rate: "61.2 %",
    },
    {
        title: "这样很酷，不是吗",
        desc: "在整个大学期间没有恋爱经历",
        rate: "33.7 %",
    },
    {
        title: "会接受的!对吧?",
        desc: "实施或收到一次精心策划的表白",
        rate: "29.5 %",
    },
    {
        title: "请不要污染我的眼睛",
        desc: "在宿舍门口偶遇拥吻的情侣",
        rate: "89.0 %",
    },
    {
        title: "奏响彻夜之歌",
        desc: "因为社交活动夜不归宿",
        rate: "69.7 %",
    },
    {
        title: "怎么会变成这样呢 ?",
        desc: "通宵撰写论文或报告",
        rate: "81.1 %",
    },
    {
        title: "噪音制造者",
        desc: "在宿舍进行一次连麦",
        rate: "98.5 %",
    },
    {
        title: "/召唤溺尸",
        desc: "在洗衣机洗完衣服后遗忘一天以上",
        rate: "21.1 %",
    },
    {
        title: "生物入侵",
        desc: "因为潮湿原因经历物品严重发霉",
        rate: "19.8 %",
    },
    {
        title: "拿来吧你",
        desc: "使用舍友多余的校园网坑位上网",
        rate: "14.1 %",
    },
    {
        title: "电光火石",
        desc: "因为违规使用电器导致跳闸",
        rate: "4.3 %",
    },
    {
        title: "偷渡客....",
        desc: "连续偷渡通过正南门与宿舍楼的两重门禁",
        rate: "54.4 %",
    },
    {
        title: "阿姨帮忙开下门呗",
        desc: "不使用校园卡进入3栋不同的宿舍楼",
        rate: "33.6 %",
    },
    {
        title: "落叶捎来讯息",
        desc: "收到来自朋友的信件或包裹",
        rate: "64.5 %",
    },
    {
        title: "例行公事",
        desc: "连续每周给家人打电话一学期",
        rate: "88.1 %",
    },
    {
        title: "嘉奖函",
        desc: "拿到学校任意一项奖学金",
        rate: "41.4 %",
    },
    {
        title: '“特别关注“',
        desc: "由于学业问题被导员约谈",
        rate: "39.8 %",
    },
    {
        title: "秋名山车神",
        desc: "在校内主干道上达到35km以上的时速",
        rate: "74.2 %",
    },
    {
        title: "阿——姨——",
        desc: "在宿舍楼停电后前往宿管室询问",
        rate: "39.4 %",
    },
    {
        title: "金牌导游",
        desc: "带领前来参观的外校朋友游览学校",
        rate: "62.1 %",
    },
    {
        title: "原来这里可以走啊",
        desc: "首次穿过远遥路从背面前往山上公寓",
        rate: "18.9 %",
    },
    {
        title: "这里没有门禁 ?",
        desc: "首次通过小铁门进出学校",
        rate: "92.4 %",
    },
    {
        title: "别有洞天",
        desc: "首次发现隐藏的动漫社",
        rate: "78.5 %",
    },
    {
        title: "Y.M.C.A",
        desc: "首次发现隐藏的健身房",
        rate: "61.1 %",
    },
    {
        title: "隐世修所",
        desc: "首次发现隐藏的哈工大1号桩",
        rate: "40.8 %",
    },
    {
        title: "真的名副其实吗.... ?",
        desc: '首次发现人迹罕至的“双创园”',
        rate: "88.2 %",
    },
    {
        title: "你什么工大?",
        desc: "首次发现航服教学楼",
        rate: "67.5 %",
    },
    {
        title: "你是 ?",
        desc: "本科期间累计翘课节数超过500节",
        rate: "2.6 %",
    },
    {
        title: "老师好",
        desc: "本科期间累计缺勤及请假次数不超过10次",
        rate: "4.9 %",
    },
    {
        title: "远走高飞",
        desc: "本科期间与世界前100的学校签约并出国",
        rate: "2.8 %",
    },
    {
        title: "功成..名就?",
        desc: "本科期间创办公司并盈利超过2w元",
        rate: "1.5 %",
    },
    {
        title: "栋梁之材",
        desc: "本科期间发表学术期刊论文超过10篇",
        rate: "1.3 %",
    },
    {
        title: "不学有术",
        desc: "本科期间辍学经营事业，月收入超过2w元",
        rate: "1.1 %",
    },
    {
        title: "学运亨通",
        desc: "本科期间与更好的学校签约，直升博士生",
        rate: "1.9 %",
    },
    {
        title: "巴别塔",
        desc: '在厕所遭遇"无法攻克的堡垒”',
        rate: "51.6 %",
    },
    {
        title: "平移运动",
        desc: "在轮滑场滑一次旱冰",
        rate: "13.0 %",
    },
    {
        title: "平抛运动",
        desc: "从滑板上飞出去一次",
        rate: "5.9 %",
    },
    {
        title: "翻山越野",
        desc: "骑行通过整个后山",
        rate: "39.4 %",
    },
    {
        title: "神行太保",
        desc: "单日步数超过30000步",
        rate: "19.8 %",
    },
    {
        title: "古校夜游神",
        desc: "24:00 后因无法进入宿舍而在学校游荡",
        rate: "11.3 %",
    },
    {
        title: "博德之门",
        desc: "在考场上丢橡皮决定答案",
        rate: "43.4 %",
    },
    {
        title: "足不出户……?",
        desc: "在校内配送平台上点一次外卖",
        rate: "98.2 %",
    },
    {
        title: "踢两脚就好了",
        desc: "在教学楼的自动售卖机购买饮料并卡住",
        rate: "27.7 %",
    },
    {
        title: "樱木滑倒",
        desc: "在大服的澡堂滑倒一次",
        rate: "45.0 %",
    },
    {
        title: "回来路上都吹干了...",
        desc: "前往一次山上澡堂并步行返回",
        rate: "82.3 %",
    },
    {
        title: "眼镜蛇机动!",
        desc: "连续三门课程分别在 H N 和 M 楼",
        rate: "69.1 %",
    },
    {
        title: "斑羚飞渡",
        desc: "以超过30km/h的速度经过减速带",
        rate: "87.5 %",
    },
    {
        title: "I AM THE STORM THAT IS APPROACHING",
        desc: "在暴风雪天气下不穿袜子前往山上澡堂",
        rate: "44.1 %",
        titleFontSize: "12px",
    },
    {
        title: "抱歉，今天不行",
        desc: "在腹泻时被厕所隔间拒之门外",
        rate: "90.8 %",
    },
    {
        title: "我是?",
        desc: "在扫脸设备上连续三次被识别为陌生人",
        rate: "81.3 %",
    },
    {
        title: "魔女的夜宴",
        desc: "从小亭子购买一次夜宵",
        rate: "77.6 %",
    },
    {
        title: "不吃这套，谢谢",
        desc: "拒绝一次学长/学姐的推销",
        rate: "42.8 %",
    },
    {
        title: "义父!",
        desc: "同时携带三份以上不同的外卖返回宿舍",
        rate: "19.7 %",
    },
    {
        title: "攻占山威",
        desc: "进入山东大学(威海)",
        rate: "69.2 %",
    },
    {
        title: "傲慢的鉴赏家",
        desc: "在课堂上全屏打开群友的涩图",
        rate: "58.1 %",
    },
    {
        title: "more more need",
        desc: "在课堂上抚摸舍友的大腿",
        rate: "78.9 %",
    },
    {
        title: "拾荒.…者?",
        desc: "在纸张储备小于两张的条件下如厕",
        rate: "0.0 %",
    },
    {
        title: "你猜我为什么要充电?",
        desc: "连续两次遭遇充电桩停电后推往下一个",
        rate: "24.1 %",
    },
    {
        title: "新鲜的垃圾...",
        desc: "拥有一项6个月以上未使用的全新宿舍物品",
        rate: "59.6 %",
    },
    {
        title: "学长，好大胆!",
        desc: "在学校内偶遇……猫片",
        rate: "12.7 %",
    },
    {
        title: "无底之胃",
        desc: "一天内用餐4次以上",
        rate: "87.2 %",
    },
    {
        title: "洪荒饕餮",
        desc: "一天内用餐6次以上",
        rate: "11.8 %",
    },
    {
        title: "寝不语",
        desc: "在10:30之前宿舍进入静默状态",
        rate: "73.5 %",
    },
    {
        title: "逐日之民",
        desc: "熬夜至第二天太阳升起",
        rate: "69.9 %",
    },
    {
        title: "送你离开千里之外",
        desc: "在大风天气中丢失晾晒的衣物",
        rate: "81.4 %",
    },
    {
        title: "同学，挂挂，该该",
        desc: "在任意一门课程上获得59分",
        rate: "7.8 %",
    },
    {
        title: "维修费比车还贵...",
        desc: "累计在非机动车维修上花费500元",
        rate: "19.2 %",
    },
    {
        title: "焕然一新",
        desc: "对生锈发响的合页使用除锈剂",
        rate: "9.4 %",
    },
    {
        title: "没长眼睛?",
        desc: "走夜路玩手机，并在掉进日月湖里之前刹车",
        rate: "6.5 %",
    },
    {
        title: "自力更生",
        desc: "加入勤工俭学组织",
        rate: "24.6 %",
    },
    {
        title: "挥金如土",
        desc: "连续三个月花销在生活费标准的150%以上",
        rate: "33.1 %",
    },
    {
        title: "死宅的钱真好骗",
        desc: "在[二次元周边]方面花销超过3000元",
        rate: "18.7 %",
    },
    {
        title: "用金创造快乐",
        desc: "在[游戏氪金]方面花销超过5000元",
        rate: "12.8 %",
    },
    {
        title: "没钱玩你麻痹",
        desc: "在月初时活动资金低于800元",
        rate: "39.6 %",
    },
    {
        title: "我是帕鲁",
        desc: "在校招中成功找到工作",
        rate: "11.2 %",
    },
    {
        title: "古希腊掌管打工的神",
        desc: "同时拥有两门以上兼职",
        rate: "6.8 %",
    },
    {
        title: "兄弟，你饭好香",
        desc: "被野猫偷吃一顿外卖",
        rate: "9.4 %",
    },
    {
        title: "褪色者",
        desc: "累计挂科学分达到20分以上",
        rate: "0.0 %",
    },
    {
        title: "空间移动?",
        desc: "在与朋友qq聊天的2分钟内抵达其身边",
        rate: "35.0 %",
    },
    {
        title: "拾金不昧",
        desc: "交还一张捡到的校园卡",
        rate: "11.2 %",
    },
    {
        title: "丑八怪↑↓↑↓↑↑↓",
        desc: "用卡套遮盖自己过于丑陋的校园卡照片",
        rate: "64.7 %",
        titleFontSize: "20px",
    },
    {
        title: "滑融道",
        desc: "在雪天的学子路上滑倒并滑行2m以上",
        rate: "29.8 %",
    },
    {
        title: "潘多拉之盒",
        desc: "连续开启五次以上厕所隔间并大受震撼",
        rate: "17.4 %",
    },
    {
        title: "昏睡者",
        desc: "于20:00之后起床",
        rate: "18.3 %",
    },
    {
        title: "智械危机",
        desc: "操作电子实验器材时因器材损坏而失败",
        rate: "22.5 %",
    },
    {
        title: "好想回归天空……",
        desc: "在研究院天井旁眺望",
        rate: "87.6 %",
    },
    {
        title: "中古店",
        desc: "偶遇校内旧书摊并消费超过20元",
        rate: "58.5 %",
    },
    {
        title: "这不巧了吗!",
        desc: "在大服手机店门口摔碎手机屏幕",
        rate: "4.1 %",
    },
    {
        title: "古迹……?",
        desc: "在课桌上发现4年以前的“考研占座”字样",
        rate: "92.8 %",
    },
    {
        title: "直通地心!",
        desc: "在上课时座椅横梁意外断裂",
        rate: "9.4 %",
    },
    {
        title: "规格严格",
        desc: "收到学校下发的纸质学业预警通知书",
        rate: "18.8 %",
    },
    {
        title: "功夫·到·家",
        desc: "被学校劝退后抵达家里",
        rate: "0.1 %",
    },
    {
        title: "魔女的滋味真不错啊",
        desc: "第一次购买异性装扮",
        rate: "1.2 %",
    },
    {
        title: "没关就是开了 ?",
        desc: "精准出勤一门课的所有每一次点名",
        rate: "2.6 %",
    },
    {
        title: "也许我来的不是时候...",
        desc: "走错教室并坚持上完一节课",
        rate: "34.1 %",
    },
    {
        title: "一校?三区!",
        desc: "错用本部的登录网站后怎么也登不上去",
        rate: "55.8 %",
    },
    {
        title: "cosplay",
        desc: "cos一名角色出现在校园里",
        rate: "1.9 %",
    },
    {
        title: "勇闯天涯",
        desc: "从M楼1层出发并在一分钟内抵达顶层",
        rate: "70.5 %",
    },
    {
        title: "理直气壮",
        desc: "在课堂开始30分钟后进入教室",
        rate: "45.8 %",
    },
    {
        title: "清一色",
        desc: "班级内没有女生",
        rate: "11.6 %",
    },
    {
        title: "绿一色",
        desc: "大学期间谈恋爱不少于三次，并均被截胡",
        rate: "1.0 %",
    },
    {
        title: "大三元",
        desc: "连续挂科三门考试课",
        rate: "0.2 %",
    },
    {
        title: "国士无双",
        desc: "在每个教室的第一排和最后一排都上过课",
        rate: "0.8 %",
    },
    {
        title: "大七星",
        desc: "选择七门及以上1学分的文化素质课",
        rate: "30.4 %",
    },
    {
        title: "网速与激情",
        desc: "在开始选课的3秒内选课成功",
        rate: "8.8 %",
    },
    {
        title: "HTTP 503",
        desc: "在开始选课的15分钟后依然无法进入页面",
        rate: "36.4 %",
    },
    {
        title: "热热闹闹",
        desc: "参与一次班级团建活动",
        rate: "55.1 %",
    },
    {
        title: "我超，盒!",
        desc: "在表白墙上被人开盒",
        rate: "11.3 %",
    },
    {
        title: "风云人物",
        desc: "被挂在表白墙超过一次",
        rate: "5.0 %",
    },
    {
        title: "全新无损!",
        desc: "期末结束后拥有至少一本全新的教科书",
        rate: "20.5 %",
    },
    {
        title: "没有中间商赚差价",
        desc: "出售一次二手商品",
        rate: "37.4 %",
    },
    {
        title: "这是哪里 ?",
        desc: "发现隐藏的校史馆",
        rate: "4.0 %",
    },
    {
        title: "海的那边……",
        desc: "发现隐藏的探海楼",
        rate: "8.2 %",
    },
    {
        title: "正版极限国度",
        desc: "发现隐藏的拓展基地",
        rate: "16.5 %",
    },
    {
        title: "观..麻不语 ?",
        desc: "在三元亭偶遇麻将局",
        rate: "19.4 %",
    },
    {
        title: "吟游歌手",
        desc: "在大服广场偶遇路演队伍",
        rate: "32.6 %",
    },
    {
        title: "隐藏楼层 ?",
        desc: "抵达学子餐厅四楼",
        rate: "21.8 %",
    },
    {
        title: "稳如老狗",
        desc: "大学期间所有课程均未挂科",
        rate: "50.4 %",
    },
    {
        title: "你什么工大2.0",
        desc: "至少一次被亲戚朋友问到哈尔滨冷不冷",
        rate: "73.2 %",
    },
    {
        title: "我的朋友很少",
        desc: "大学期间结交的朋友不超过10个",
        rate: "25.6 %",
    },
    {
        title: "前辈！这个也拜托了！",
        desc: "大学期间结交的朋友超过30个",
        rate: "20.7 %",
        titleFontSize: "20px",
    },
]
export const demo_achievement_list : Achievement[] = []
for (let i = 0 ; i < raw_demo_achievement_list.length ; i++) {
    const item = raw_demo_achievement_list[i]
    item["id"] = i
    demo_achievement_list.push(item)
}

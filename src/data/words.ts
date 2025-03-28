export interface Word {
  chinese: string;
  pinyin: string;
  english: string;
}

export const words: Word[] = [
  // Basic Greetings
  {
    chinese: "你好",
    pinyin: "nǐ hǎo",
    english: "Hello"
  },
  {
    chinese: "早上好",
    pinyin: "zǎo shang hǎo",
    english: "Good morning"
  },
  {
    chinese: "晚上好",
    pinyin: "wǎn shang hǎo",
    english: "Good evening"
  },
  {
    chinese: "再见",
    pinyin: "zài jiàn",
    english: "Goodbye"
  },
  {
    chinese: "晚安",
    pinyin: "wǎn ān",
    english: "Good night"
  },

  // Basic Courtesy
  {
    chinese: "谢谢",
    pinyin: "xiè xiè",
    english: "Thank you"
  },
  {
    chinese: "不客气",
    pinyin: "bù kè qi",
    english: "You're welcome"
  },
  {
    chinese: "对不起",
    pinyin: "duì bù qǐ",
    english: "Sorry"
  },
  {
    chinese: "没关系",
    pinyin: "méi guān xi",
    english: "It's okay"
  },
  {
    chinese: "请",
    pinyin: "qǐng",
    english: "Please"
  },

  // Basic Questions
  {
    chinese: "什么",
    pinyin: "shén me",
    english: "What"
  },
  {
    chinese: "谁",
    pinyin: "shéi",
    english: "Who"
  },
  {
    chinese: "哪里",
    pinyin: "nǎ lǐ",
    english: "Where"
  },
  {
    chinese: "什么时候",
    pinyin: "shén me shí hòu",
    english: "When"
  },
  {
    chinese: "为什么",
    pinyin: "wèi shén me",
    english: "Why"
  },

  // Numbers
  {
    chinese: "一",
    pinyin: "yī",
    english: "One"
  },
  {
    chinese: "二",
    pinyin: "èr",
    english: "Two"
  },
  {
    chinese: "三",
    pinyin: "sān",
    english: "Three"
  },
  {
    chinese: "四",
    pinyin: "sì",
    english: "Four"
  },
  {
    chinese: "五",
    pinyin: "wǔ",
    english: "Five"
  },

  // Additional Numbers
  {
    chinese: "六",
    pinyin: "liù",
    english: "Six"
  },
  {
    chinese: "七",
    pinyin: "qī",
    english: "Seven"
  },
  {
    chinese: "八",
    pinyin: "bā",
    english: "Eight"
  },
  {
    chinese: "九",
    pinyin: "jiǔ",
    english: "Nine"
  },
  {
    chinese: "十",
    pinyin: "shí",
    english: "Ten"
  },

  // Common Actions
  {
    chinese: "吃",
    pinyin: "chī",
    english: "Eat"
  },
  {
    chinese: "喝",
    pinyin: "hē",
    english: "Drink"
  },
  {
    chinese: "走",
    pinyin: "zǒu",
    english: "Walk"
  },
  {
    chinese: "跑",
    pinyin: "pǎo",
    english: "Run"
  },
  {
    chinese: "看",
    pinyin: "kàn",
    english: "Look/See"
  },

  // More Common Actions
  {
    chinese: "说",
    pinyin: "shuō",
    english: "Speak"
  },
  {
    chinese: "听",
    pinyin: "tīng",
    english: "Listen"
  },
  {
    chinese: "写",
    pinyin: "xiě",
    english: "Write"
  },
  {
    chinese: "读",
    pinyin: "dú",
    english: "Read"
  },
  {
    chinese: "学习",
    pinyin: "xué xí",
    english: "Study"
  },
  {
    chinese: "工作",
    pinyin: "gōng zuò",
    english: "Work"
  },
  {
    chinese: "睡觉",
    pinyin: "shuì jiào",
    english: "Sleep"
  },
  {
    chinese: "起床",
    pinyin: "qǐ chuáng",
    english: "Get up"
  },
  {
    chinese: "洗澡",
    pinyin: "xǐ zǎo",
    english: "Take a shower"
  },
  {
    chinese: "做饭",
    pinyin: "zuò fàn",
    english: "Cook"
  },

  // Common Objects
  {
    chinese: "水",
    pinyin: "shuǐ",
    english: "Water"
  },
  {
    chinese: "茶",
    pinyin: "chá",
    english: "Tea"
  },
  {
    chinese: "饭",
    pinyin: "fàn",
    english: "Rice/Meal"
  },
  {
    chinese: "书",
    pinyin: "shū",
    english: "Book"
  },
  {
    chinese: "手机",
    pinyin: "shǒu jī",
    english: "Mobile phone"
  },

  // More Common Objects
  {
    chinese: "电脑",
    pinyin: "diàn nǎo",
    english: "Computer"
  },
  {
    chinese: "电视",
    pinyin: "diàn shì",
    english: "TV"
  },
  {
    chinese: "桌子",
    pinyin: "zhuō zi",
    english: "Table"
  },
  {
    chinese: "椅子",
    pinyin: "yǐ zi",
    english: "Chair"
  },
  {
    chinese: "床",
    pinyin: "chuáng",
    english: "Bed"
  },
  {
    chinese: "门",
    pinyin: "mén",
    english: "Door"
  },
  {
    chinese: "窗户",
    pinyin: "chuāng hu",
    english: "Window"
  },
  {
    chinese: "灯",
    pinyin: "dēng",
    english: "Light"
  },
  {
    chinese: "钟",
    pinyin: "zhōng",
    english: "Clock"
  },
  {
    chinese: "钥匙",
    pinyin: "yào shi",
    english: "Key"
  },

  // Food and Drinks
  {
    chinese: "面包",
    pinyin: "miàn bāo",
    english: "Bread"
  },
  {
    chinese: "牛奶",
    pinyin: "niú nǎi",
    english: "Milk"
  },
  {
    chinese: "咖啡",
    pinyin: "kā fēi",
    english: "Coffee"
  },
  {
    chinese: "果汁",
    pinyin: "guǒ zhī",
    english: "Juice"
  },
  {
    chinese: "水果",
    pinyin: "shuǐ guǒ",
    english: "Fruit"
  },
  {
    chinese: "蔬菜",
    pinyin: "shū cài",
    english: "Vegetables"
  },
  {
    chinese: "肉",
    pinyin: "ròu",
    english: "Meat"
  },
  {
    chinese: "鱼",
    pinyin: "yú",
    english: "Fish"
  },
  {
    chinese: "鸡蛋",
    pinyin: "jī dàn",
    english: "Egg"
  },
  {
    chinese: "米饭",
    pinyin: "mǐ fàn",
    english: "Rice"
  },

  // Clothing
  {
    chinese: "衣服",
    pinyin: "yī fu",
    english: "Clothes"
  },
  {
    chinese: "裤子",
    pinyin: "kù zi",
    english: "Pants"
  },
  {
    chinese: "鞋子",
    pinyin: "xié zi",
    english: "Shoes"
  },
  {
    chinese: "帽子",
    pinyin: "mào zi",
    english: "Hat"
  },
  {
    chinese: "袜子",
    pinyin: "wà zi",
    english: "Socks"
  },
  {
    chinese: "衬衫",
    pinyin: "chèn shān",
    english: "Shirt"
  },
  {
    chinese: "裙子",
    pinyin: "qún zi",
    english: "Skirt"
  },
  {
    chinese: "外套",
    pinyin: "wài tào",
    english: "Coat"
  },
  {
    chinese: "手套",
    pinyin: "shǒu tào",
    english: "Gloves"
  },
  {
    chinese: "围巾",
    pinyin: "wéi jīn",
    english: "Scarf"
  },

  // Transportation
  {
    chinese: "汽车",
    pinyin: "qì chē",
    english: "Car"
  },
  {
    chinese: "自行车",
    pinyin: "zì xíng chē",
    english: "Bicycle"
  },
  {
    chinese: "公交车",
    pinyin: "gōng jiāo chē",
    english: "Bus"
  },
  {
    chinese: "地铁",
    pinyin: "dì tiě",
    english: "Subway"
  },
  {
    chinese: "火车",
    pinyin: "huǒ chē",
    english: "Train"
  },
  {
    chinese: "飞机",
    pinyin: "fēi jī",
    english: "Airplane"
  },
  {
    chinese: "船",
    pinyin: "chuán",
    english: "Boat"
  },
  {
    chinese: "出租车",
    pinyin: "chū zū chē",
    english: "Taxi"
  },
  {
    chinese: "摩托车",
    pinyin: "mó tuō chē",
    english: "Motorcycle"
  },
  {
    chinese: "电梯",
    pinyin: "diàn tī",
    english: "Elevator"
  },

  // Weather
  {
    chinese: "天气",
    pinyin: "tiān qì",
    english: "Weather"
  },
  {
    chinese: "太阳",
    pinyin: "tài yáng",
    english: "Sun"
  },
  {
    chinese: "月亮",
    pinyin: "yuè liang",
    english: "Moon"
  },
  {
    chinese: "星星",
    pinyin: "xīng xing",
    english: "Star"
  },
  {
    chinese: "云",
    pinyin: "yún",
    english: "Cloud"
  },
  {
    chinese: "雨",
    pinyin: "yǔ",
    english: "Rain"
  },
  {
    chinese: "雪",
    pinyin: "xuě",
    english: "Snow"
  },
  {
    chinese: "风",
    pinyin: "fēng",
    english: "Wind"
  },
  {
    chinese: "雾",
    pinyin: "wù",
    english: "Fog"
  },
  {
    chinese: "雷",
    pinyin: "léi",
    english: "Thunder"
  },

  // Colors
  {
    chinese: "红色",
    pinyin: "hóng sè",
    english: "Red"
  },
  {
    chinese: "蓝色",
    pinyin: "lán sè",
    english: "Blue"
  },
  {
    chinese: "绿色",
    pinyin: "lǜ sè",
    english: "Green"
  },
  {
    chinese: "黄色",
    pinyin: "huáng sè",
    english: "Yellow"
  },
  {
    chinese: "白色",
    pinyin: "bái sè",
    english: "White"
  },
  {
    chinese: "黑色",
    pinyin: "hēi sè",
    english: "Black"
  },
  {
    chinese: "紫色",
    pinyin: "zǐ sè",
    english: "Purple"
  },
  {
    chinese: "橙色",
    pinyin: "chéng sè",
    english: "Orange"
  },
  {
    chinese: "灰色",
    pinyin: "huī sè",
    english: "Gray"
  },
  {
    chinese: "棕色",
    pinyin: "zōng sè",
    english: "Brown"
  },

  // Emotions
  {
    chinese: "开心",
    pinyin: "kāi xīn",
    english: "Happy"
  },
  {
    chinese: "难过",
    pinyin: "nán guò",
    english: "Sad"
  },
  {
    chinese: "生气",
    pinyin: "shēng qì",
    english: "Angry"
  },
  {
    chinese: "害怕",
    pinyin: "hài pà",
    english: "Afraid"
  },
  {
    chinese: "惊讶",
    pinyin: "jīng yà",
    english: "Surprised"
  },
  {
    chinese: "紧张",
    pinyin: "jǐn zhāng",
    english: "Nervous"
  },
  {
    chinese: "放松",
    pinyin: "fàng sōng",
    english: "Relaxed"
  },
  {
    chinese: "兴奋",
    pinyin: "xīng fèn",
    english: "Excited"
  },
  {
    chinese: "无聊",
    pinyin: "wú liáo",
    english: "Bored"
  },
  {
    chinese: "担心",
    pinyin: "dān xīn",
    english: "Worried"
  },

  // Hobbies
  {
    chinese: "运动",
    pinyin: "yùn dòng",
    english: "Sports"
  },
  {
    chinese: "音乐",
    pinyin: "yīn yuè",
    english: "Music"
  },
  {
    chinese: "电影",
    pinyin: "diàn yǐng",
    english: "Movie"
  },
  {
    chinese: "游戏",
    pinyin: "yóu xì",
    english: "Game"
  },
  {
    chinese: "画画",
    pinyin: "huà huà",
    english: "Drawing"
  },
  {
    chinese: "唱歌",
    pinyin: "chàng gē",
    english: "Singing"
  },
  {
    chinese: "跳舞",
    pinyin: "tiào wǔ",
    english: "Dancing"
  },
  {
    chinese: "游泳",
    pinyin: "yóu yǒng",
    english: "Swimming"
  },
  {
    chinese: "跑步",
    pinyin: "pǎo bù",
    english: "Running"
  },
  {
    chinese: "旅游",
    pinyin: "lǚ yóu",
    english: "Traveling"
  },

  // School
  {
    chinese: "老师",
    pinyin: "lǎo shī",
    english: "Teacher"
  },
  {
    chinese: "学生",
    pinyin: "xué shēng",
    english: "Student"
  },
  {
    chinese: "教室",
    pinyin: "jiào shì",
    english: "Classroom"
  },
  {
    chinese: "图书馆",
    pinyin: "tú shū guǎn",
    english: "Library"
  },
  {
    chinese: "操场",
    pinyin: "cāo chǎng",
    english: "Playground"
  },
  {
    chinese: "黑板",
    pinyin: "hēi bǎn",
    english: "Blackboard"
  },
  {
    chinese: "铅笔",
    pinyin: "qiān bǐ",
    english: "Pencil"
  },
  {
    chinese: "橡皮",
    pinyin: "xiàng pí",
    english: "Eraser"
  },
  {
    chinese: "书包",
    pinyin: "shū bāo",
    english: "Schoolbag"
  },
  {
    chinese: "作业",
    pinyin: "zuò yè",
    english: "Homework"
  },

  // Shopping
  {
    chinese: "超市",
    pinyin: "chāo shì",
    english: "Supermarket"
  },
  {
    chinese: "商场",
    pinyin: "shāng chǎng",
    english: "Shopping mall"
  },
  {
    chinese: "价格",
    pinyin: "jià gé",
    english: "Price"
  },
  {
    chinese: "便宜",
    pinyin: "pián yi",
    english: "Cheap"
  },
  {
    chinese: "贵",
    pinyin: "guì",
    english: "Expensive"
  },
  {
    chinese: "打折",
    pinyin: "dǎ zhé",
    english: "Discount"
  },
  {
    chinese: "现金",
    pinyin: "xiàn jīn",
    english: "Cash"
  },
  {
    chinese: "信用卡",
    pinyin: "xìn yòng kǎ",
    english: "Credit card"
  },
  {
    chinese: "收据",
    pinyin: "shōu jù",
    english: "Receipt"
  },
  {
    chinese: "找零",
    pinyin: "zhǎo líng",
    english: "Change"
  },

  // Health
  {
    chinese: "医生",
    pinyin: "yī shēng",
    english: "Doctor"
  },
  {
    chinese: "护士",
    pinyin: "hù shi",
    english: "Nurse"
  },
  {
    chinese: "药",
    pinyin: "yào",
    english: "Medicine"
  },
  {
    chinese: "感冒",
    pinyin: "gǎn mào",
    english: "Cold"
  },
  {
    chinese: "发烧",
    pinyin: "fā shāo",
    english: "Fever"
  },
  {
    chinese: "头痛",
    pinyin: "tóu tòng",
    english: "Headache"
  },
  {
    chinese: "咳嗽",
    pinyin: "ké sou",
    english: "Cough"
  },
  {
    chinese: "牙痛",
    pinyin: "yá tòng",
    english: "Toothache"
  },
  {
    chinese: "检查",
    pinyin: "jiǎn chá",
    english: "Check-up"
  },
  {
    chinese: "休息",
    pinyin: "xiū xi",
    english: "Rest"
  },

  // Time Expressions
  {
    chinese: "分钟",
    pinyin: "fēn zhōng",
    english: "Minute"
  },
  {
    chinese: "小时",
    pinyin: "xiǎo shí",
    english: "Hour"
  },
  {
    chinese: "天",
    pinyin: "tiān",
    english: "Day"
  },
  {
    chinese: "星期",
    pinyin: "xīng qī",
    english: "Week"
  },
  {
    chinese: "月",
    pinyin: "yuè",
    english: "Month"
  },
  {
    chinese: "年",
    pinyin: "nián",
    english: "Year"
  },
  {
    chinese: "现在",
    pinyin: "xiàn zài",
    english: "Now"
  },
  {
    chinese: "以后",
    pinyin: "yǐ hòu",
    english: "Later"
  },
  {
    chinese: "以前",
    pinyin: "yǐ qián",
    english: "Before"
  },
  {
    chinese: "马上",
    pinyin: "mǎ shàng",
    english: "Right away"
  }
]; 
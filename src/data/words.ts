export interface Word {
  chinese: string;
  pinyin: string;
  english: string;
  difficulty: number; // 1-5，表示难度等级
}

// 第一批：基础词汇（HSK1-2水平）
const basicWords: Word[] = [
  // 数字
  { chinese: "一", pinyin: "yī", english: "One", difficulty: 1 },
  { chinese: "二", pinyin: "èr", english: "Two", difficulty: 1 },
  { chinese: "三", pinyin: "sān", english: "Three", difficulty: 1 },
  { chinese: "四", pinyin: "sì", english: "Four", difficulty: 1 },
  { chinese: "五", pinyin: "wǔ", english: "Five", difficulty: 1 },
  { chinese: "六", pinyin: "liù", english: "Six", difficulty: 1 },
  { chinese: "七", pinyin: "qī", english: "Seven", difficulty: 1 },
  { chinese: "八", pinyin: "bā", english: "Eight", difficulty: 1 },
  { chinese: "九", pinyin: "jiǔ", english: "Nine", difficulty: 1 },
  { chinese: "十", pinyin: "shí", english: "Ten", difficulty: 1 },

  // 基本问候
  { chinese: "你好", pinyin: "nǐ hǎo", english: "Hello", difficulty: 1 },
  { chinese: "早上好", pinyin: "zǎo shang hǎo", english: "Good morning", difficulty: 1 },
  { chinese: "晚上好", pinyin: "wǎn shang hǎo", english: "Good evening", difficulty: 1 },
  { chinese: "再见", pinyin: "zài jiàn", english: "Goodbye", difficulty: 1 },
  { chinese: "晚安", pinyin: "wǎn ān", english: "Good night", difficulty: 1 },

  // 基本礼貌用语
  { chinese: "谢谢", pinyin: "xiè xiè", english: "Thank you", difficulty: 1 },
  { chinese: "不客气", pinyin: "bù kè qi", english: "You're welcome", difficulty: 1 },
  { chinese: "对不起", pinyin: "duì bù qǐ", english: "Sorry", difficulty: 1 },
  { chinese: "没关系", pinyin: "méi guān xi", english: "It's okay", difficulty: 1 },
  { chinese: "请", pinyin: "qǐng", english: "Please", difficulty: 1 },

  // 基本问题词
  { chinese: "什么", pinyin: "shén me", english: "What", difficulty: 1 },
  { chinese: "谁", pinyin: "shéi", english: "Who", difficulty: 1 },
  { chinese: "哪里", pinyin: "nǎ lǐ", english: "Where", difficulty: 1 },
  { chinese: "什么时候", pinyin: "shén me shí hòu", english: "When", difficulty: 1 },
  { chinese: "为什么", pinyin: "wèi shén me", english: "Why", difficulty: 1 },

  // 基本动作
  { chinese: "吃", pinyin: "chī", english: "Eat", difficulty: 1 },
  { chinese: "喝", pinyin: "hē", english: "Drink", difficulty: 1 },
  { chinese: "走", pinyin: "zǒu", english: "Walk", difficulty: 1 },
  { chinese: "跑", pinyin: "pǎo", english: "Run", difficulty: 1 },
  { chinese: "看", pinyin: "kàn", english: "Look/See", difficulty: 1 },

  // 基本物品
  { chinese: "水", pinyin: "shuǐ", english: "Water", difficulty: 1 },
  { chinese: "茶", pinyin: "chá", english: "Tea", difficulty: 1 },
  { chinese: "饭", pinyin: "fàn", english: "Rice/Meal", difficulty: 1 },
  { chinese: "书", pinyin: "shū", english: "Book", difficulty: 1 },
  { chinese: "手机", pinyin: "shǒu jī", english: "Mobile phone", difficulty: 1 },

  // 时间词
  { chinese: "今天", pinyin: "jīn tiān", english: "Today", difficulty: 1 },
  { chinese: "明天", pinyin: "míng tiān", english: "Tomorrow", difficulty: 1 },
  { chinese: "昨天", pinyin: "zuó tiān", english: "Yesterday", difficulty: 1 },
  { chinese: "早上", pinyin: "zǎo shang", english: "Morning", difficulty: 1 },
  { chinese: "晚上", pinyin: "wǎn shang", english: "Evening", difficulty: 1 },

  // 基本形容词
  { chinese: "大", pinyin: "dà", english: "Big", difficulty: 1 },
  { chinese: "小", pinyin: "xiǎo", english: "Small", difficulty: 1 },
  { chinese: "好", pinyin: "hǎo", english: "Good", difficulty: 1 },
  { chinese: "坏", pinyin: "huài", english: "Bad", difficulty: 1 },
  { chinese: "热", pinyin: "rè", english: "Hot", difficulty: 1 },

  // 基本地点
  { chinese: "家", pinyin: "jiā", english: "Home", difficulty: 1 },
  { chinese: "学校", pinyin: "xué xiào", english: "School", difficulty: 1 },
  { chinese: "医院", pinyin: "yī yuàn", english: "Hospital", difficulty: 1 },
  { chinese: "商店", pinyin: "shāng diàn", english: "Shop", difficulty: 1 },
  { chinese: "公园", pinyin: "gōng yuán", english: "Park", difficulty: 1 },

  // 家庭成员
  { chinese: "爸爸", pinyin: "bà ba", english: "Father", difficulty: 1 },
  { chinese: "妈妈", pinyin: "mā ma", english: "Mother", difficulty: 1 },
  { chinese: "哥哥", pinyin: "gē ge", english: "Older brother", difficulty: 1 },
  { chinese: "姐姐", pinyin: "jiě jie", english: "Older sister", difficulty: 1 },
  { chinese: "朋友", pinyin: "péng you", english: "Friend", difficulty: 1 },

  // 更多基础词汇...
  { chinese: "电脑", pinyin: "diàn nǎo", english: "Computer", difficulty: 1 },
  { chinese: "电视", pinyin: "diàn shì", english: "TV", difficulty: 1 },
  { chinese: "桌子", pinyin: "zhuō zi", english: "Table", difficulty: 1 },
  { chinese: "椅子", pinyin: "yǐ zi", english: "Chair", difficulty: 1 },
  { chinese: "床", pinyin: "chuáng", english: "Bed", difficulty: 1 },
  { chinese: "门", pinyin: "mén", english: "Door", difficulty: 1 },
  { chinese: "窗户", pinyin: "chuāng hu", english: "Window", difficulty: 1 },
  { chinese: "灯", pinyin: "dēng", english: "Light", difficulty: 1 },
  { chinese: "钟", pinyin: "zhōng", english: "Clock", difficulty: 1 },
  { chinese: "钥匙", pinyin: "yào shi", english: "Key", difficulty: 1 },
  // ... 继续添加更多基础词汇直到200个
];

// 第二批：常用词汇（HSK2-3水平）
const commonWords: Word[] = [
  // 常用动词
  { chinese: "学习", pinyin: "xué xí", english: "Study", difficulty: 2 },
  { chinese: "工作", pinyin: "gōng zuò", english: "Work", difficulty: 2 },
  { chinese: "睡觉", pinyin: "shuì jiào", english: "Sleep", difficulty: 2 },
  { chinese: "起床", pinyin: "qǐ chuáng", english: "Get up", difficulty: 2 },
  { chinese: "洗澡", pinyin: "xǐ zǎo", english: "Take a shower", difficulty: 2 },
  { chinese: "做饭", pinyin: "zuò fàn", english: "Cook", difficulty: 2 },
  { chinese: "购物", pinyin: "gòu wù", english: "Shopping", difficulty: 2 },
  { chinese: "运动", pinyin: "yùn dòng", english: "Exercise", difficulty: 2 },
  { chinese: "旅游", pinyin: "lǚ yóu", english: "Travel", difficulty: 2 },
  { chinese: "休息", pinyin: "xiū xi", english: "Rest", difficulty: 2 },

  // 常用形容词
  { chinese: "漂亮", pinyin: "piào liang", english: "Beautiful", difficulty: 2 },
  { chinese: "聪明", pinyin: "cōng ming", english: "Smart", difficulty: 2 },
  { chinese: "快乐", pinyin: "kuài lè", english: "Happy", difficulty: 2 },
  { chinese: "难过", pinyin: "nán guò", english: "Sad", difficulty: 2 },
  { chinese: "生气", pinyin: "shēng qì", english: "Angry", difficulty: 2 },
  { chinese: "紧张", pinyin: "jǐn zhāng", english: "Nervous", difficulty: 2 },
  { chinese: "放松", pinyin: "fàng sōng", english: "Relaxed", difficulty: 2 },
  { chinese: "兴奋", pinyin: "xīng fèn", english: "Excited", difficulty: 2 },
  { chinese: "无聊", pinyin: "wú liáo", english: "Bored", difficulty: 2 },
  { chinese: "担心", pinyin: "dān xīn", english: "Worried", difficulty: 2 },

  // 常用名词
  { chinese: "天气", pinyin: "tiān qì", english: "Weather", difficulty: 2 },
  { chinese: "季节", pinyin: "jì jié", english: "Season", difficulty: 2 },
  { chinese: "节日", pinyin: "jié rì", english: "Festival", difficulty: 2 },
  { chinese: "周末", pinyin: "zhōu mò", english: "Weekend", difficulty: 2 },
  { chinese: "假期", pinyin: "jià qī", english: "Holiday", difficulty: 2 },
  { chinese: "电影", pinyin: "diàn yǐng", english: "Movie", difficulty: 2 },
  { chinese: "音乐", pinyin: "yīn yuè", english: "Music", difficulty: 2 },
  { chinese: "游戏", pinyin: "yóu xì", english: "Game", difficulty: 2 },
  { chinese: "运动", pinyin: "yùn dòng", english: "Sports", difficulty: 2 },
  { chinese: "爱好", pinyin: "ài hào", english: "Hobby", difficulty: 2 },

  // 常用副词
  { chinese: "非常", pinyin: "fēi cháng", english: "Very", difficulty: 2 },
  { chinese: "特别", pinyin: "tè bié", english: "Especially", difficulty: 2 },
  { chinese: "一定", pinyin: "yí dìng", english: "Definitely", difficulty: 2 },
  { chinese: "可能", pinyin: "kě néng", english: "Maybe", difficulty: 2 },
  { chinese: "大概", pinyin: "dà gài", english: "Probably", difficulty: 2 },
  { chinese: "马上", pinyin: "mǎ shàng", english: "Right away", difficulty: 2 },
  { chinese: "立刻", pinyin: "lì kè", english: "Immediately", difficulty: 2 },
  { chinese: "终于", pinyin: "zhōng yú", english: "Finally", difficulty: 2 },
  { chinese: "突然", pinyin: "tū rán", english: "Suddenly", difficulty: 2 },
  { chinese: "经常", pinyin: "jīng cháng", english: "Often", difficulty: 2 },

  // 常用连词
  { chinese: "因为", pinyin: "yīn wèi", english: "Because", difficulty: 2 },
  { chinese: "所以", pinyin: "suǒ yǐ", english: "So", difficulty: 2 },
  { chinese: "但是", pinyin: "dàn shì", english: "But", difficulty: 2 },
  { chinese: "如果", pinyin: "rú guǒ", english: "If", difficulty: 2 },
  { chinese: "虽然", pinyin: "suī rán", english: "Although", difficulty: 2 },
  { chinese: "而且", pinyin: "ér qiě", english: "Moreover", difficulty: 2 },
  { chinese: "或者", pinyin: "huò zhě", english: "Or", difficulty: 2 },
  { chinese: "并且", pinyin: "bìng qiě", english: "And", difficulty: 2 },
  { chinese: "因此", pinyin: "yīn cǐ", english: "Therefore", difficulty: 2 },
  { chinese: "不过", pinyin: "bú guò", english: "However", difficulty: 2 },

  // ... 继续添加更多常用词汇直到200个
];

// 第三批：进阶词汇（HSK3-4水平）
const intermediateWords: Word[] = [
  // 抽象概念
  { chinese: "理想", pinyin: "lǐ xiǎng", english: "Ideal", difficulty: 3 },
  { chinese: "梦想", pinyin: "mèng xiǎng", english: "Dream", difficulty: 3 },
  { chinese: "目标", pinyin: "mù biāo", english: "Goal", difficulty: 3 },
  { chinese: "计划", pinyin: "jì huà", english: "Plan", difficulty: 3 },
  { chinese: "未来", pinyin: "wèi lái", english: "Future", difficulty: 3 },
  { chinese: "过去", pinyin: "guò qù", english: "Past", difficulty: 3 },
  { chinese: "现在", pinyin: "xiàn zài", english: "Present", difficulty: 3 },
  { chinese: "时间", pinyin: "shí jiān", english: "Time", difficulty: 3 },
  { chinese: "空间", pinyin: "kōng jiān", english: "Space", difficulty: 3 },
  { chinese: "距离", pinyin: "jù lí", english: "Distance", difficulty: 3 },

  // 情感表达
  { chinese: "感动", pinyin: "gǎn dòng", english: "Touched", difficulty: 3 },
  { chinese: "感激", pinyin: "gǎn jī", english: "Grateful", difficulty: 3 },
  { chinese: "怀念", pinyin: "huái niàn", english: "Miss", difficulty: 3 },
  { chinese: "期待", pinyin: "qī dài", english: "Expect", difficulty: 3 },
  { chinese: "失望", pinyin: "shī wàng", english: "Disappointed", difficulty: 3 },
  { chinese: "后悔", pinyin: "hòu huǐ", english: "Regret", difficulty: 3 },
  { chinese: "骄傲", pinyin: "jiāo ào", english: "Proud", difficulty: 3 },
  { chinese: "谦虚", pinyin: "qiān xū", english: "Modest", difficulty: 3 },
  { chinese: "耐心", pinyin: "nài xīn", english: "Patient", difficulty: 3 },
  { chinese: "细心", pinyin: "xì xīn", english: "Careful", difficulty: 3 },

  // 社会关系
  { chinese: "同事", pinyin: "tóng shì", english: "Colleague", difficulty: 3 },
  { chinese: "邻居", pinyin: "lín jū", english: "Neighbor", difficulty: 3 },
  { chinese: "亲戚", pinyin: "qīn qi", english: "Relative", difficulty: 3 },
  { chinese: "同学", pinyin: "tóng xué", english: "Classmate", difficulty: 3 },
  { chinese: "朋友", pinyin: "péng you", english: "Friend", difficulty: 3 },
  { chinese: "伙伴", pinyin: "huǒ bàn", english: "Partner", difficulty: 3 },
  { chinese: "对手", pinyin: "duì shǒu", english: "Opponent", difficulty: 3 },
  { chinese: "领导", pinyin: "lǐng dǎo", english: "Leader", difficulty: 3 },
  { chinese: "下属", pinyin: "xià shǔ", english: "Subordinate", difficulty: 3 },
  { chinese: "客户", pinyin: "kè hù", english: "Client", difficulty: 3 },

  // 工作相关
  { chinese: "职业", pinyin: "zhí yè", english: "Profession", difficulty: 3 },
  { chinese: "工作", pinyin: "gōng zuò", english: "Work", difficulty: 3 },
  { chinese: "事业", pinyin: "shì yè", english: "Career", difficulty: 3 },
  { chinese: "成功", pinyin: "chéng gōng", english: "Success", difficulty: 3 },
  { chinese: "失败", pinyin: "shī bài", english: "Failure", difficulty: 3 },
  { chinese: "经验", pinyin: "jīng yàn", english: "Experience", difficulty: 3 },
  { chinese: "能力", pinyin: "néng lì", english: "Ability", difficulty: 3 },
  { chinese: "技能", pinyin: "jì néng", english: "Skill", difficulty: 3 },
  { chinese: "知识", pinyin: "zhī shi", english: "Knowledge", difficulty: 3 },
  { chinese: "教育", pinyin: "jiào yù", english: "Education", difficulty: 3 },

  // 生活品质
  { chinese: "健康", pinyin: "jiàn kāng", english: "Health", difficulty: 3 },
  { chinese: "幸福", pinyin: "xìng fú", english: "Happiness", difficulty: 3 },
  { chinese: "快乐", pinyin: "kuài lè", english: "Joy", difficulty: 3 },
  { chinese: "满足", pinyin: "mǎn zú", english: "Satisfied", difficulty: 3 },
  { chinese: "舒适", pinyin: "shū shì", english: "Comfortable", difficulty: 3 },
  { chinese: "方便", pinyin: "fāng biàn", english: "Convenient", difficulty: 3 },
  { chinese: "安全", pinyin: "ān quán", english: "Safe", difficulty: 3 },
  { chinese: "稳定", pinyin: "wěn dìng", english: "Stable", difficulty: 3 },
  { chinese: "自由", pinyin: "zì yóu", english: "Free", difficulty: 3 },
  { chinese: "平等", pinyin: "píng děng", english: "Equal", difficulty: 3 },

  // ... 继续添加更多进阶词汇直到200个
];

// 第四批：中高级词汇（HSK4-5水平）
const advancedWords: Word[] = [
  // 文化相关
  { chinese: "传统", pinyin: "chuán tǒng", english: "Tradition", difficulty: 4 },
  { chinese: "文化", pinyin: "wén huà", english: "Culture", difficulty: 4 },
  { chinese: "历史", pinyin: "lì shǐ", english: "History", difficulty: 4 },
  { chinese: "艺术", pinyin: "yì shù", english: "Art", difficulty: 4 },
  { chinese: "文学", pinyin: "wén xué", english: "Literature", difficulty: 4 },
  { chinese: "哲学", pinyin: "zhé xué", english: "Philosophy", difficulty: 4 },
  { chinese: "宗教", pinyin: "zōng jiào", english: "Religion", difficulty: 4 },
  { chinese: "信仰", pinyin: "xìn yǎng", english: "Faith", difficulty: 4 },
  { chinese: "道德", pinyin: "dào dé", english: "Morality", difficulty: 4 },
  { chinese: "价值", pinyin: "jià zhí", english: "Value", difficulty: 4 },

  // 社会现象
  { chinese: "现象", pinyin: "xiàn xiàng", english: "Phenomenon", difficulty: 4 },
  { chinese: "趋势", pinyin: "qū shì", english: "Trend", difficulty: 4 },
  { chinese: "发展", pinyin: "fā zhǎn", english: "Development", difficulty: 4 },
  { chinese: "进步", pinyin: "jìn bù", english: "Progress", difficulty: 4 },
  { chinese: "改革", pinyin: "gǎi gé", english: "Reform", difficulty: 4 },
  { chinese: "创新", pinyin: "chuàng xīn", english: "Innovation", difficulty: 4 },
  { chinese: "竞争", pinyin: "jìng zhēng", english: "Competition", difficulty: 4 },
  { chinese: "合作", pinyin: "hé zuò", english: "Cooperation", difficulty: 4 },
  { chinese: "交流", pinyin: "jiāo liú", english: "Communication", difficulty: 4 },
  { chinese: "影响", pinyin: "yǐng xiǎng", english: "Influence", difficulty: 4 },

  // 经济相关
  { chinese: "经济", pinyin: "jīng jì", english: "Economy", difficulty: 4 },
  { chinese: "市场", pinyin: "shì chǎng", english: "Market", difficulty: 4 },
  { chinese: "投资", pinyin: "tóu zī", english: "Investment", difficulty: 4 },
  { chinese: "消费", pinyin: "xiāo fèi", english: "Consumption", difficulty: 4 },
  { chinese: "贸易", pinyin: "mào yì", english: "Trade", difficulty: 4 },
  { chinese: "金融", pinyin: "jīn róng", english: "Finance", difficulty: 4 },
  { chinese: "股票", pinyin: "gǔ piào", english: "Stock", difficulty: 4 },
  { chinese: "基金", pinyin: "jī jīn", english: "Fund", difficulty: 4 },
  { chinese: "保险", pinyin: "bǎo xiǎn", english: "Insurance", difficulty: 4 },
  { chinese: "税收", pinyin: "shuì shōu", english: "Tax", difficulty: 4 },

  // 科技相关
  { chinese: "科技", pinyin: "kē jì", english: "Technology", difficulty: 4 },
  { chinese: "网络", pinyin: "wǎng luò", english: "Network", difficulty: 4 },
  { chinese: "软件", pinyin: "ruǎn jiàn", english: "Software", difficulty: 4 },
  { chinese: "硬件", pinyin: "yìng jiàn", english: "Hardware", difficulty: 4 },
  { chinese: "数据", pinyin: "shù jù", english: "Data", difficulty: 4 },
  { chinese: "信息", pinyin: "xìn xī", english: "Information", difficulty: 4 },
  { chinese: "系统", pinyin: "xì tǒng", english: "System", difficulty: 4 },
  { chinese: "程序", pinyin: "chéng xù", english: "Program", difficulty: 4 },
  { chinese: "算法", pinyin: "suàn fǎ", english: "Algorithm", difficulty: 4 },
  { chinese: "人工智能", pinyin: "rén gōng zhì néng", english: "Artificial Intelligence", difficulty: 4 },

  // 环境相关
  { chinese: "环境", pinyin: "huán jìng", english: "Environment", difficulty: 4 },
  { chinese: "污染", pinyin: "wū rǎn", english: "Pollution", difficulty: 4 },
  { chinese: "能源", pinyin: "néng yuán", english: "Energy", difficulty: 4 },
  { chinese: "资源", pinyin: "zī yuán", english: "Resource", difficulty: 4 },
  { chinese: "生态", pinyin: "shēng tài", english: "Ecology", difficulty: 4 },
  { chinese: "气候", pinyin: "qì hòu", english: "Climate", difficulty: 4 },
  { chinese: "温度", pinyin: "wēn dù", english: "Temperature", difficulty: 4 },
  { chinese: "湿度", pinyin: "shī dù", english: "Humidity", difficulty: 4 },
  { chinese: "压力", pinyin: "yā lì", english: "Pressure", difficulty: 4 },
  { chinese: "平衡", pinyin: "píng héng", english: "Balance", difficulty: 4 },

  // ... 继续添加更多中高级词汇直到200个
];

// 第五批：高级词汇（HSK5-6水平）
const expertWords: Word[] = [
  // 学术相关
  { chinese: "研究", pinyin: "yán jiū", english: "Research", difficulty: 5 },
  { chinese: "分析", pinyin: "fēn xī", english: "Analysis", difficulty: 5 },
  { chinese: "理论", pinyin: "lǐ lùn", english: "Theory", difficulty: 5 },
  { chinese: "实践", pinyin: "shí jiàn", english: "Practice", difficulty: 5 },
  { chinese: "方法", pinyin: "fāng fǎ", english: "Method", difficulty: 5 },
  { chinese: "原理", pinyin: "yuán lǐ", english: "Principle", difficulty: 5 },
  { chinese: "概念", pinyin: "gài niàn", english: "Concept", difficulty: 5 },
  { chinese: "定义", pinyin: "dìng yì", english: "Definition", difficulty: 5 },
  { chinese: "论证", pinyin: "lùn zhèng", english: "Argument", difficulty: 5 },
  { chinese: "结论", pinyin: "jié lùn", english: "Conclusion", difficulty: 5 },

  // 政治相关
  { chinese: "政治", pinyin: "zhèng zhì", english: "Politics", difficulty: 5 },
  { chinese: "政策", pinyin: "zhèng cè", english: "Policy", difficulty: 5 },
  { chinese: "制度", pinyin: "zhì dù", english: "System", difficulty: 5 },
  { chinese: "法律", pinyin: "fǎ lǜ", english: "Law", difficulty: 5 },
  { chinese: "权利", pinyin: "quán lì", english: "Right", difficulty: 5 },
  { chinese: "义务", pinyin: "yì wù", english: "Duty", difficulty: 5 },
  { chinese: "民主", pinyin: "mín zhǔ", english: "Democracy", difficulty: 5 },
  { chinese: "自由", pinyin: "zì yóu", english: "Freedom", difficulty: 5 },
  { chinese: "平等", pinyin: "píng děng", english: "Equality", difficulty: 5 },
  { chinese: "公平", pinyin: "gōng píng", english: "Fairness", difficulty: 5 },

  // 心理相关
  { chinese: "心理", pinyin: "xīn lǐ", english: "Psychology", difficulty: 5 },
  { chinese: "意识", pinyin: "yì shí", english: "Consciousness", difficulty: 5 },
  { chinese: "思维", pinyin: "sī wéi", english: "Thinking", difficulty: 5 },
  { chinese: "记忆", pinyin: "jì yì", english: "Memory", difficulty: 5 },
  { chinese: "想象", pinyin: "xiǎng xiàng", english: "Imagination", difficulty: 5 },
  { chinese: "感觉", pinyin: "gǎn jué", english: "Feeling", difficulty: 5 },
  { chinese: "情绪", pinyin: "qíng xù", english: "Emotion", difficulty: 5 },
  { chinese: "态度", pinyin: "tài dù", english: "Attitude", difficulty: 5 },
  { chinese: "性格", pinyin: "xìng gé", english: "Personality", difficulty: 5 },
  { chinese: "行为", pinyin: "xíng wéi", english: "Behavior", difficulty: 5 },

  // 艺术相关
  { chinese: "艺术", pinyin: "yì shù", english: "Art", difficulty: 5 },
  { chinese: "创作", pinyin: "chuàng zuò", english: "Creation", difficulty: 5 },
  { chinese: "表现", pinyin: "biǎo xiàn", english: "Expression", difficulty: 5 },
  { chinese: "风格", pinyin: "fēng gé", english: "Style", difficulty: 5 },
  { chinese: "技巧", pinyin: "jì qiǎo", english: "Technique", difficulty: 5 },
  { chinese: "灵感", pinyin: "líng gǎn", english: "Inspiration", difficulty: 5 },
  { chinese: "审美", pinyin: "shěn měi", english: "Aesthetic", difficulty: 5 },
  { chinese: "欣赏", pinyin: "xīn shǎng", english: "Appreciate", difficulty: 5 },
  { chinese: "评价", pinyin: "píng jià", english: "Evaluation", difficulty: 5 },
  { chinese: "批评", pinyin: "pī píng", english: "Criticism", difficulty: 5 },

  // 哲学相关
  { chinese: "哲学", pinyin: "zhé xué", english: "Philosophy", difficulty: 5 },
  { chinese: "思想", pinyin: "sī xiǎng", english: "Thought", difficulty: 5 },
  { chinese: "观念", pinyin: "guān niàn", english: "Concept", difficulty: 5 },
  { chinese: "价值", pinyin: "jià zhí", english: "Value", difficulty: 5 },
  { chinese: "意义", pinyin: "yì yì", english: "Meaning", difficulty: 5 },
  { chinese: "真理", pinyin: "zhēn lǐ", english: "Truth", difficulty: 5 },
  { chinese: "道德", pinyin: "dào dé", english: "Morality", difficulty: 5 },
  { chinese: "伦理", pinyin: "lún lǐ", english: "Ethics", difficulty: 5 },
  { chinese: "信仰", pinyin: "xìn yǎng", english: "Faith", difficulty: 5 },
  { chinese: "智慧", pinyin: "zhì huì", english: "Wisdom", difficulty: 5 },

  // ... 继续添加更多高级词汇直到200个
];

// 合并所有词汇
export const words: Word[] = [
  ...basicWords,
  ...commonWords,
  ...intermediateWords,
  ...advancedWords,
  ...expertWords
]; 
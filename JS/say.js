// code by 文心一言

const stringsList = [
    "你也要过饭?", 
    "偶尔看看脚下的风景不也挺好吗", 
    "看我干嘛?", 
    "哇!是活人哎!",
    "我已经完全爱上沃玛了！", 
    "海内存知己，天涯若比邻",
    "衬衫的价格是九磅十五便士",
    "在满地都是六便士的街上，他抬起头看到了月亮。‌",
    "圣人不死，大盗不至",
    "再一次谈到自己的年龄，是「我才」还是「我已经」",
    "When the night begins",
    "言语的悲伤就忘了吧",
    "我最后还是知道了方法 继续面对吧",
    "不停地追逐着温柔月光 奔跑下去吧",
    "你是这世界上独一无二的光",
    "潮汐来时 注定抹去",
    "以笔替干戈，以纸为沙场，所向披靡，护我所爱",
    "我们的笔下从来没有过黑夜",
    "我的笔下是我的整个世界",
    "心火永不熄灭！",
    "敬文学，敬热爱，敬自由",
    "啊？",
    "你在干什么呢？(盯)",
    "这里有一句话",
	"丢掉幻想 准备斗争",
    "循此苦旅 直抵群星",
    "前进！前进！不择手段的前进！",
	"那片蓝色 向上无限高 向下无限深 像死亡一般 矗立在面前",
    "除却巫山不是云",
    "我誓死为这些而存在着",
    "",
    
    ];

// 获取<div>元素
const saysDiv = document.querySelector('.says');

// 定义一个函数来执行动画和文本更新
function updateDiv() {
  // 将opacity在一秒内递减到0
  saysDiv.style.opacity = '0';
  
  // 使用setTimeout等待一秒（1000毫秒）以确保opacity过渡完成
  setTimeout(() => {
    // 随机选择list中的一个字符串
    const randomString = stringsList[Math.floor(Math.random() * stringsList.length)];
    
    // 修改<div>的文本内容
    saysDiv.textContent = randomString;
    
    // 将opacity在一秒内递增到1
    saysDiv.style.opacity = '1';
    
    // 再次等待五秒然后重复整个过程
    setTimeout(updateDiv, 5000);
  }, 1000); // 与CSS中的transition时间相匹配
}

// 初始调用函数来开始循环
updateDiv();

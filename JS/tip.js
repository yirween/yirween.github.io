window.onload = function() {
    var numbers = ["tip: 每次打开的tip都是随机的！","tip: 每隔一段时间来就会改变一点东西哦！", "tip: tip功能chatGPT帮繄溦写的", "tip: 这是一条tip。", "tip: 如果网页有排班错乱、点击按钮无响应等情况说明繄溦在测试，过一会再来吧！<br>（很久没修复说明是bug，请B站私信告诉我）","tip: 如果我哪里写错了或者那里有bug请B站私信告诉我qwq", "tip: 繄溦是个天才！","tip: 水的沸点是100度，是钝角。","tip: !?","tip: tip都是废话","rip: 打错字了！","tip: js全都是GPT写的！"];
    var randomNumber = Math.floor(Math.random() * numbers.length);
    var randomNum = numbers[randomNumber];
    document.getElementById("randomNumber").innerHTML = randomNum;
}
window.onload = function() {
    var numbers = ["tip: 我不喜欢活人。","tip: 每隔一段时间来就会改变一点东西哦！", "tip: 快去学习！！！", "tip: 这是一条tip。", "tip: tip: tip: tip: tip: tip: tip: tip: tip: ","tip: 如果我哪里写错了或者那里有bug请B站私信告诉我qwq", "tip: 繄溦是个天才！","tip: 水的沸点是100度，是钝角。","tip: !?","tip: tip都是废话","rip: 打错字了！","tip: 什么？这是tip！","tip: 当你看到这条tip时网页就变长了许多<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"];
    var randomNumber = Math.floor(Math.random() * numbers.length);
    var randomNum = numbers[randomNumber];
    document.getElementById("randomNumber").innerHTML = randomNum;
}
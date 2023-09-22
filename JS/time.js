window.onload = function() {
  // 目标日期时间
  const targetDate = new Date("2026-06-07T09:00:00");

  function updateTimer() {
    // 当前日期时间
    const currentDate = new Date();

    // 计算剩余时间（毫秒）
    const timeLeft = targetDate - currentDate;

    // 计算剩余天数、小时、分钟和秒数
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 更新页面显示
    document.getElementById("timer").innerHTML = days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";

    // 每隔1秒更新一次倒计时
    setTimeout(updateTimer, 1000);
  }

  // 启动倒计时
  updateTimer();
};

function paintToday(){
const todayClock = document.querySelector(".today-clock");
const todayDate = document.querySelector(".today-date");

const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
const day = dayArr[today.getDay()];
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

todayClock.innerText = `${hour}:${minute}:${second}`;
todayDate.innerText = `${month}월 ${date}일 ${day}요일`;
}

paintToday();
setInterval(paintToday, 1000);













const body = document.body;
const backgroundArr = [
    "https://t1.daumcdn.net/cfile/tistory/2214CD4D53F89D7305",
    "http://san.chosun.com/site/data/img_dir/2020/08/21/2020082103276_0.jpg",
    "http://san.chosun.com/site/data/img_dir/2020/08/21/2020082103276_1.jpg",
    "http://san.chosun.com/site/data/img_dir/2020/08/21/2020082103276_3.jpg",
    "http://san.chosun.com/site/data/img_dir/2020/08/21/2020082103276_4.jpg",

]
const randomNumber = Math.floor(Math.random() * backgroundArr.length);
body.style.backgroundImage = "url('" + backgroundArr[randomNumber] + "')";

body.style.backgroundSize = "cover";

const body = document.body;
const backgroundArr = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Meerkat_%28Suricata_suricatta%29_Tswalu.jpg/728px-Meerkat_%28Suricata_suricatta%29_Tswalu.jpg",
]
const randomNumber = Math.floor(Math.random() * backgroundArr.length);
body.style.backgroundImage = "url('" + backgroundArr[randomNumber] + "')";


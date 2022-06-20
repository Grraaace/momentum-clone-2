const bible = [
    {
        verse : "지혜는 그 얻은 자에게 생명 나무라. 지혜를 가진 자는 복되도다",
        index : "잠언서 3장 18절",
    },
    {
        verse : "여호와는 네게 행복을 주시고 너를 지키시기를 원하며",
        index : "민수기 6장 24절",
    },
    {
        verse : "구하라 그리하면 너희에게 주실 것이요 찾으라 찾아낼 것이요 두드리라 열릴것이니",
        index : "마태복음 7장 7절",
    },
    {
        verse : "누구든지 주의 이름을 부르는 자는 구원을 받으리라",
        index : "로마서 10장 13절",
    },
    {
        verse : "오늘 내가 네게 명하는 이 말씀을 너는 마음에 새기고",
        index : "신명기 6장 6절",
    },
]

const bibleArrRandomNumber = Math.floor(Math.random() * bible.length);
const RandomBible = bible[bibleArrRandomNumber];

const bibleVerse = document.querySelector(".bible-verse");
const bibleIndex = document.querySelector(".bible-index");

bibleVerse.innerText = RandomBible.verse;
bibleIndex.innerText = RandomBible.index;


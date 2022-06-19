const bible = [
    {
        verse : "가나다라",
        index : "요한복음 5:5",
    },
    {
        verse : "마바사아",
        index : "마가복음 10:10",
    }
]

const bibleArrRandomNumber = Math.floor(Math.random() * bible.length);
const RandomBible = bible[bibleArrRandomNumber];

const bibleVerse = document.querySelector(".bible-verse");
const bibleIndex = document.querySelector(".bible-index");

bibleVerse.innerText = RandomBible.verse;
bibleIndex.innerText = RandomBible.index;


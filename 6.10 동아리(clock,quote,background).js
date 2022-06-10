const clock = document.querySelector("h2#clock")
// interval: 매번 일어나야 하는 무언가
function getClock() {
    const date = new Date();
    const hours =  String(date.getHours(2)).padStart(2, "0"); //date.getHours()엔 padStart()를 쓸 수 없다. getHours()는 string아니고 number이기 때문이다.
    const minutes = String(date.getMinutes(2)).padStart(2, "0");
    const seconds = String(date.getSeconds(2)).padStart(2, "0");
// String(--) --부분을 string으로 바꾼다. ex. 19(number) -> "19"(string). 주의사항: 쓸때 string(x) String(o). Date도 마찬가지. 소문자면 함수로 받아들여짐.
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
// 1회차: setInterval(sayHello, 5000);
// 첫번째 argument: 내가 실행하고자 하는 function, 두번째 argument: 호출되는 function 간격을 몇ms로 할지 쓰는것
// 1회차: setTimeout(sayHello, 5000);//argument는 순서 동일. 근데 여기서는 몇초 '기다릴지'가 2번쨰의 의미
getClock();//뒤 setInterval만 보면 그냥 1초 후에 시계 작동하는거임. 이거 있으면 바로 작동.
setInterval(getClock, 1000)
//padStart : "1".padStart(2, "0") -> 1이란 값을 2개의 문자로 표현하고자 하는데, 2개의 문자가 아니면 0을 앞에 추가.
// 물론 애초에 2개문자면 아무것도 안해줌 비슷한거로 padEnd도 있는데, 이건 뒤에다 이 예시의 경우에는 "0"붙이는거.

// ****************** 여기까지가 clock부분 *******************

const quotes = [{
    quote: "부민은 씹덕이다",
    author: "- 기병주",
},
{
    quote: "탈세일은 진리다",
    author: "- 세일고 갤러리",
},
{
    quote: "정시는 승리한다",
    author: "- 이준",
},
{
    quote: "나는 정시를 선언한다",
    author: "- 조부민",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// Math Module 참고 : 6.0 Quotes 강의 부분 참고
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
// (array).length 면 array의 길이를 반환해준다.
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;

// ************** 여기까지가 quote부분 ****************
const images = ["6.10_동아리(사진1)", "6.10_동아리(사진2)", "6.10_동아리(사진3)"];
const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);//body에 html 추가할거임
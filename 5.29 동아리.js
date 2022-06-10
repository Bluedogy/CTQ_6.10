// 1번째: const loginForm = document.getElementById("login-form");
// HTML에서 form을 찾은거임 JS가 이걸 찾았으면 loginForm은 HTML 내에 있는 element라는 뜻이다(div부분 전체부분)
const loginForm = document.querySelector("#login-form"); // 1번쨰: const loginInput = loginForm.querySelector("input");
const loginInput = document.querySelector("#login-form input");// 1번쨰: const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
// 처음 쓴 loginForm에서 찾을 수 있음. 즉 HTML element를 바로 쓰기 가능
// 그리고 그 안에서 input과 button을 찾음
// 참고로 처음 줄 지우고 3번째 줄을 const loginInput = document.loginForm.querySelector("#login-form input");하면 (4번쨰도 동일한 방식으로)
// 더 코드를 줄일 수 있다.

const HIDDEN_CLASSNAME = "hidden"; // 대문자로 쓴건 관습임. string만 포함된 변수는 대문자로 표기하고 string을 사용하고 싶을 때 사용한다.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {// 1번째: function handleLoginBtnClick() { // html form부분은 직접 강의 4.1 Form Submission 참고
  event.preventDefault();// preventDefault는 기본 행동(function에 대해 브라우저가 기본적으로 수행하는 동작 - 이경우 form을 submit하면 기본적으로 페이지를 새로고침하는것)이든지 발생 안되게 하는것 // 2번쨰: const username = loginInput.value;
     // 1번쨰: if(username === ""){
     // 1번쨰:   alert("이름 쓰세여")
    // 1번쨰: } else if(username.length > 15) { // .length는 string의 길이를 구할 수 있다. 
    // 1번쨰:    alert("이름이 너무 긴데?") } }
 // 1번쨰: loginButton.addEventListener("click", handleLoginBtnClick);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username) // 우선 저장될 값의 이름(key)를 정해주고, 그 다음에는 값인 username을 적어주면 된다.
   paintGreetings(username);
   // 1회차: loginForm.classList.add(HIDDEN_CLASSNAME);
   // 1회차: greeting.innerText = `Hello ${username}`;  //   greeting.innerText = "Hello " + username;과 같다. 
   // 규칙1: 변수와 string을 결합하고 싶으면 ${변수명}이렇게 표현. 그리고, 쓸때 ''(따옴표) ""(쌍따옴표) 가 아닌, ``(백틱)이다.
   greeting.classList.remove(HIDDEN_CLASSNAME)
} 
loginForm.addEventListener("submit", onLoginSubmit);
// 브라우저는 onLoginSubmit function을 호출하고 브라우저가 function을 실행시키고 있지만
// ()안에다 나에게 정보를 주고 있다. 

const link = document.querySelector("a");

function handleLinkClick(event) {
   event.preventDefault(); //이것땜에 링크가 안되는거임
   console.log(event);
   alert("clicked!"); // alert는 실행 될떄 모든 동작을 임시 멈춤 가능
}

link.addEventListener("click", handleLinkClick);
// (개발자 도구에서)setItem: 이거 활용해서 local storage에 정보를 저장할 수 있다. 관련대용 3.5 saving username

function paintGreetings(){
   greeting.innerText = `Hello ${savedUsername}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// getItem(정보를 불러오는것)-> 없으면 null이라 할거임 이제 아래 조건문으로 활용
console.log(savedUsername);

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);// form 보여주기
} else {
   paintGreetings(savedUsername);
   // 1회차: greeting.innerText = `Hello ${savedUsername}`;
   // 1회차: greeting.classList.remove(HIDDEN_CLASSNAME)// greeting 보여주기
}

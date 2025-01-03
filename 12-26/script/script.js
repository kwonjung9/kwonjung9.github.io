const USER_KEY = "username";
const FormElem = document.querySelector("#ioginForm");
const inputElem = document.querySelector("input"); //document 대신에 FormELem 써도됨
//자식을 가져오는 방법
//console.log(FormElem.children); //Node는 각각 가져오는 거 , children은 묶음=(HTMLCollection)

const saveStorage =(item)=>{ //인자의 순서 중요
  localStorage.setItem(USER_KEY,item);
}
const removeStorage = ()=>{
  localStorage.removeItem(USER_KEY);
}
const handlerInput = (event)=>{
  event.preventDefault(); //모든 기능을 없애고 초기화 (원래 기능은 전송시키고 초기화 해버리는건데 초기화 못하게 하는 거)
  const inputElem = FormElem.querySelector("input"); //document 대신에 FormELem 써도됨
  saveStorage(inputElem.value);
  inputElem.value = null;
  //
  const outbtnElem =document.querySelector(".logout");
  // outbtnElem.style.display = "block";
  // console.log(outbtnElem.className);
  // console.log(outbtnElem.classList[0]);
  // outbtnElem.className = "logout";
  outbtnElem.classList.remove("hide");
}
const init = ()=>{
  const btnElem = document.querySelector("button");
  // console.log("처음실행");
  // 1. HTML에서 정보 가져오기 >객체선택.querySelctor
  FormElem.addEventListener('submit',(event)=>{
    event.preventDefault(); //모든 기능을 없애고 초기화 (원래 기능은 전송시키고 초기화 해버리는건데 초기화 못하게 하는 거)
    handlerInput(event);
  });
  btnElem.addEventListener("click",(event)=>{
    handlerInput(event);
  });
  //1. 로그아웃을 클릭을 하면
  const outbtnElem = document.querySelector(".logout");
  outbtnElem.addEventListener("click",()=>{
    //로그아웃 버튼 클릭
    removeStorage();
    //로그아웃 보이지 않게
  });
  // outbtnElem.style.display = "none";
}
window.onload = init;
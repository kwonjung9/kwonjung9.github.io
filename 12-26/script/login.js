const loginForm = document.querySelector('#loginForm');
const logoutForm = document.querySelector ('.logout');
const loginElem =document.querySelector('.login');
const pElem = document.querySelector('.hello>p');
const inputElem=document.querySelector('#loginForm>input');
const outbtnElem=document.querySelector('.logout-btn');
const LOGIN_KEY = 'loginname';

const saveStorage =(item)=>{
  localStorage.setItem(LOGIN_KEY, item);
}
const loadLoginName = ()=>{
  return localStorage.getItem(LOGIN_KEY);
}
const removeStorage = ()=>{
  localStorage.removeItem(LOGIN_KEY);
}

outbtnElem.addEventListener("click",(event)=>{
  event.preventDefault();
  logoutForm.classList.add("hiden");
  loginElem.classList.remove("hiden");
  removeStorage();
});

const init=()=>{
  loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    saveStorage(inputElem.value);
    loginElem.classList.add("hiden");
    logoutForm.classList.remove("hiden");
    pElem.textContent=`안녕하세요 ${inputElem.value} 님`;
    inputElem.value=null;
  }); 
}
window.onload = init;

/// 가져오는 거 처리해야됨 제출까지는 됐음.
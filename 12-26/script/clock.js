const time = document.querySelector('.time');
const clock = document.querySelector('.clock');

const setTodayAsDefault = ()=>{
/**현재 날짜 설정 */
const today = new Date();   
const year = today.getFullYear(); // 년
const month = today.getMonth() + 1;  // 월
const date = today.getDate();  // 날짜
time.textContent=`${year}년${month}월${date}일`;
}

/*현재 시간 설정*/

const getClock = ()=>{
  //시계설정
  const today = new Date();  //현재시간
  //시,분,초 가져오기
  //주요: 시,분,초는 두자리씩
  const hour = String(today.getHours()).padStart(2,'0'); /***padStart (글자 수/ 글자 비었을때 나오는 문자) */
  const minute = String(today.getMinutes()).padStart(2,'0');
  const second = String(today.getSeconds()).padStart(2,'0');
  //class = 'clock'인 객체의 텍스트를 변경
  clock.textContent = `${hour}:${minute}:${second}`;
  // console.log(today);
}
getClock();
setInterval(getClock,1000);

const init = ()=>{
  setTodayAsDefault();
}
window.onload = init;
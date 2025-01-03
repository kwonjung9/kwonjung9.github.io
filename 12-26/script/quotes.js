const quotes = [
  {
    quote : '실패는 새로운 시작이다',
    auther : '헨리 포드'
  },
  {
    quote : '네 자신을 믿어라',
    auther : '브레이크'
  },
  {
    quote : '시작이 반이다',
    auther : '아리스토텔리스'
  },
  {
    quote : '당신의 미래는 당신이 만든다',
    auther : '파블로 피카소'
  },
  {
    quote : '행동은 기대 이상의 많은 것을 만든다',
    auther : '아인슈타인'
  }
];
//랜덤: Math.random(): 0~1 사이의 값으로 출력
const num = Math.floor(Math.random()*quotes.length);
// console.log(num);
const today = quotes[num];
// quote와 auther 각각 객체 가져오기
//span1 안에 quote를 저장, span2 안에 auther를 저장 (.textContent)
const quoteElem = document.querySelector('.quote>span:nth-of-type(1)');
quoteElem.textContent = today.quote;
const autherElem = document.querySelector('.quote>span:nth-of-type(2)');
autherElem.textContent = today.auther;
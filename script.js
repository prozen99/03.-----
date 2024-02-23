//안전한 합성에 관하여.
// 1. map 으로 합성하기.
const f = x => x + 10;
const g = x => x - 5;
const fg = x => f(g(x));

_.go(
  10, // 10이란 값을 f g 함수에 넣어주는거임 
  fg, //연속적으로 f , g 함수에  10을 넣어주는 절차라고 생각하면됨. 
      // 
  console.log);

_.go(
  [10,20], // 값으로 배열을 받겠다는 의미임. go 니까 코드를 읽는것은 
  // 앞에서 부터 지만 실제로 함수가 작동되는 것은  뒤에서 부터임 그래서 
  // 결론은 20을 넣은 => 25    10넣은 =>15가 출력됨 
  L.map(fg), //map으로 이 함수를 감싸고 lazy loading
  _.each(console.log)); // console.log로 각각의 요소가 출력되게 하니까

_.go(
  [10],
  L.map(fg),
  _.each(console.log));





  // 2. find 대신 L.filter 써보기.


  const users = [
    { name: 'AA', age: 35 },
    // { name: 'BB', age: 26 },
    { name: 'CC', age: 28 },
    { name: 'CC', age: 34 },
    { name: 'EE', age: 23 }
  ];
  
  const user = _.find(u => u.name == 'BB', users); 
  //  u .name bb인사람을 찾고 아니면 반환.
  if (user) {
    console.log(user.age);
  }
  
  // _.each(console.log,
  //   L.take(1,
  //     L.filter(u => u.name == 'BB', users)));
  // 코드가 한결 깔끔해지고 괜찮아짐.
  
  _.go(users,
    L.filter(u => u.name == 'AA'),
    L.map(u => u.age),
    L.take(1),
    _.each(console.log)); //fliter map each 라고 생각해야함 . 즐겁게
    

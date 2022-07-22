// let message = [
//    { text: 'Hello', from: 'alex' },
//    { text: 'Hi', from: 'bob' },
//    { text: 'Good', from: 'dima' }
// ];

// let readMessages = new WeakSet();

// readMessages.add(message[0]);
// // readMessages.add(message[1]);
// message.shift();
// console.log(readMessages.has(message[0]));

const start = new Date();

for (let i = 1; i < 10000000; i++){
   let some = i **3;

}
const end = new Date();
console.log(`Закончлся за ${end - start} миллисекунд`);


// 'use strict';
// let user = { name: 'ivan' };

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;
// console.log(map);
// const btn = document.querySelector('.btn');
// let timer,
//    i = 0;


// function myAnimation() {
//    const elem = document.querySelector('.box');
//    let pos = 0;


//    const id = setInterval(frame, 10);
//    function frame() {
//       if (pos == 300) {
//          clearInterval(id);
//       } else {
//          pos++;
//          elem.style.top = pos + 'px';
//          elem.style.left = pos + 'px';
//       }
//    }
// }
// btn.addEventListener("click", myAnimation);

// function logger() {
//    if (i === 3) {
//       clearInterval(timer);
//    }
//    console.log('asd');
//    i++;
// }
// let id = setTimeout(function log() {
//    console.log('asdasd');
//    id = setTimeout(log, 500);
// }, 500);


// const btns = document.querySelectorAll('button'),
//    wrapper = document.querySelector('.btn-block');

// // console.log(btns[1].classList.add('blue'));
// // console.log(btns[0].classList.add('red'));


// // if (btns[0].classList.contains('red')) {
// //    console.log('red');
// // }
// btns[0].addEventListener('click', () => {
//    if (!btns[1].classList.contains('red')) {
//       btns[1].classList.add('red');
//    } else {
//       btns[1].classList.remove('red');
//    }
// });


// wrapper.addEventListener('click', (event) => {

//    if (event.target && event.target.matches('button.red')) {
//       console.log('yes');
//    }
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);
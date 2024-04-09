
// setTimeout(()=>{console.log('timeout 1...')},10);
// console.log('start');
// setTimeout(()=>{console.log('timeout 2...')},9);
// console.log('intermediate');
// console.log('end');
// first the content of gec completes then miscrotask queue and then callback queue will run.

// function createOrder(x,fn){
//     console.log(x);
//     setTimeout(()=>fn('pratham123'),1000);
//     setTimeout(()=>fn('pratham123'),1000);
//     //inversion of control.
// }

// function makePayment(orderID){
//     console.log(orderID);
// }
// createOrder('soap',makePayment);

// const pr= new Promise((resolve, reject) => {
//     // // if(true){
//         // setTimeout(()=>resolve("done-123"),1000);
//         setTimeout(()=>reject("items are out of stock"),0);
        
//         // else{
//             //     reject();
//             // }
//         });
//         setTimeout(() => {
//             console.log("first timeout..")}, (0));
// console.log(pr);
// // setTimeout(() => {
// //     console.log(pr);
// // }, 2000);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })
// micro tasking queue m fetchapi and promises.

setTimeout(function abc() {
    console.log('i am one');
}, 0);

const pr= new Promise((resolve, reject) => {
    setTimeout(()=>resolve("done"),0);
});
pr.then(function b(res){
    console.log("promise completed")
});

setTimeout(function xyz() {
    console.log('i am two');
}, 0);
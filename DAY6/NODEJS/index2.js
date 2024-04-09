// let figlet = require("figlet");
// figlet('PRATHAM DHINGRA',(err,data)=>{
//     console.log(data);
// })
//async await
// console.log('start');
// async function getAPI(){
//     console.log('api calling...')
//     const pr=await fetch('https://api.github.com/users/deepak3440');
//     console.log('json making...')
//     const data=await pr.json();
//     // console.log(data);
//     console.log('....fetcheddata....');
// }
// getAPI();

console.log('start');

async function callAPI(){
  const pr= await new Promise((res,rej)=>{
    console.log('promise 1....');
    setTimeout(()=>{
    //   console.log('timeout1...');
    res('done');
    },10000);
  })
  console.log('promise 1 completed');
}
callAPI()
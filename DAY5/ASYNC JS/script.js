// console.log('GEC START');

// function printPretty(){
//     console.log('prettystart');
//     let ans=2+5;
//     console.log(ans);
//     console.log('prettyend');
// }

// // setTimeout(printPretty,10000);
// // console.log('GEC ENDS');
// const btn2 =document.getElementById('btn');
// btn2.addEventListener('click',printPretty);

// console.log('start');
// const req=fetch("https://api.github.com/users/deepak3440");
// console.log(req);
// req.then(()=>console.log('fetched'));
// console.log('end');


// console.log('start');
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
// console.log('end');


// console.log('start');
// const req=fetch('https://dummyjson.com/products/1')
// const res= req.then(res => res.json())
// res.then((data) => console.log(data))
// console.log('end');

fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch((err)=>{
        console.log('error')
    });
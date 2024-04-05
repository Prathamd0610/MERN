// let a = new String("hello");
// let b= "hello";
// if (a==b)
//  console.log('yes');
// else 
// console.log(no);

// const obj ={
//     name:'ajay',
//     lastName:'kumar'}
// console.log(obj);
// document.write(obj);
// const obj={
//     "name":"ajay",
//     "lastName":"kumar",
// }
// console.log(obj);
// // const str= JSON.stringify(obj);
// document.write(obj);

// const obj={
//     'name':'pratham',
//     'lastname':'dhingra',
// }
// // obj.age=20;
// obj.name="ajay";
// console.log(obj);
// const arr=[1,2,3,4];
// arr=[2,3,4];
// console.log(arr);
const arr=[2,'pratham',4,'sam'];
arr.push('aakriti');
// arr[10]=5;
const obj={
        'name':'pratham',
        'lastname':'dhingra',
        1:'hello'
    }
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
// console.log(typeof(null));
// console.log(typeof(undefined));

// function checkIfObject(x){
//     if(Array.isArray(x))
//         console.log('false');
//     else if(typeof(x)=='object')
//         console.log(true);
//     else
//         console.log('false');

// }
// checkIfObject(obj);

// for(let i=0;i<6;i++)
// {
//     console.log(obj[i]);
// }
// for(let i of arr)
// {
//     console.log(i)
// }
// for(let i in arr)
// {
//     console.log(i)
// }
for(let i in obj)
{
    console.log(i)
}
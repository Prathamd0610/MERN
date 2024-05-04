// console.log("hello world!");

// const parent=document.getElementById('root');

// const root = ReactDOM.createRoot(parent);
// parent.innerText='Hello world from JS DOM';
// parent.innerHTML=`<div>
// <h1>hello from js dom</h1>
//         <ul>
//             <li>item1</li>
//             <li>item2</li>
//         </ul>
// </div>`

// const heading =document.createElement('h1');
// heading.innerText='hello from js dom';
// parent.appendChild(heading);

// const list=document.createElement('ul');
// const listitem1= document.createElement('li');
// listitem1.innerHTML='Item1';
// const listitem2= document.createElement('li');
// listitem2.innerHTML='Item2';
// list.appendChild(listitem1);
// list.appendChild(listitem2);

// parent.appendChild(list);

// console.log(React);

// const heading= React.createElement('h1',{},"hello from React");
// const li1= React.createElement('li',{
//     key:'li1',
//     className:'li-c-1',
//     name:'pratham',
//     style:{
//         backgroundColor:"lightgreen",
//     }

// },"item1");
// const li2= React.createElement('li',{key:'li2',className:'li-c-2'},"item2");
// const list= React.createElement('ul',{},[li1,li2]);
// root.render(list);
// console.log(heading);


const parent= document.getElementById('root');
const root= ReactDOM.createRoot(parent);

// const heading= React.createElement('h1',{},"hello from React");

const str= 'hello from React';
const heading= <h1>{str}</h1>
const s1={
    backgroundColor:'lightgreen',
    color:'white',
    fontSize:'20px',
    fontWeight:'bold',
    padding:'10px',
    margin:'10px',
};

const obj={
    name:'pratham',
    lastName:'dhingra',
    age:20,
}
const li1= <li className="ul-li-c-1" name={obj} style={s1} >item 1</li>
const li2= <li>item 2</li>
const arr=[li1,li2];
const list = <ul>{
    arr.map((elem)=>{return elem;})
    } </ul>
root.render(list);
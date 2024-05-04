// const ReactDOM = require('react-dom/client');
// const React = require('react');
import ReactDOM from 'react-dom/client';
import React from 'react'

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const heading= <h1>hello from React</h1>;
// console.log("pratham");
// const heading1= React.createElement('h1',{},"hello from React");
// root.render(heading1);   

// const Heading = ()=>{
//     return <h1>hello from React2</h1>
// }

root.render(heading);
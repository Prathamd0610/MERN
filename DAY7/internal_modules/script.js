// const data=fs.readFileSync("./myreadme.txt",{encoding:"utf-8"});
// console.log(data);
// console.log(data.toString());
// fs.writeFileSync("./myFile.txt","10th April 2024");

//SYNCHRONOUS SYSTEM
// const fs= require("fs");
// const data=fs.readFileSync("./myreadme.txt",{encoding:"utf-8"});
// console.log(data);

//PROMISES ASYNC
// console.log('start');
// const fsPromises= require('fs/promises');
// const pr=fsPromises.readFile('./myreadme.txt',{encoding:'utf-8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })
// console.log('end');

//CALLBACK IN FILE SYSTEM
// const fs=require('fs');
// fs.readFile('./myreadme.txt',{encoding:'utf-8'},(err,data)=>{
//     console.log(data);
// });

// const http = require('http');
// const app= http.createServer((req,res)=>{
//     console.log('request recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html',
//     })
//     res.end("<h2>hello</h2>"); 
// });
// // http://localhost:1400/
// app.listen(1400,()=>{
//     console.log("...............server started..................");
// });
const http = require('http');
const fs= require("fs");

const data= fs.readFileSync("./data.json","utf-8");
const dataObject= JSON.parse(data);
// console.log(dataObject);
const product= dataObject.products;
console.log(product);
const htmlTemplate= `
<!DOCTYPE HTML>
<HTML lang="en-US">
    <head>
    <style>
        .product-card{
            max-width:500px;
            margin:20px auto;
            border: 5px double black;
            border-radius:8px;
            padding:15px;
            background-color:white;
            color: brown;
        }
        // img:hover{
        //     transform:scale(1.2);
        // }
        .title{
            font-size:1.3rem;
            text-align:center;
        }
    </style>
    </head>
    <body>
        _PRODUCTS_CARDS_
    </body>
</html>`
const cardTemplate=`
<div class='product-card'>
    <h4 class='title'> _TITLE</h4>
    <p>Rating : RATING</p>
    <p>Price : PRICE</p>
    <p>_INFO_</p>
    <a href="?id=#link">Read More</a>
    <img src="_img1">
</div>
`  
// const card1= cardTemplate
//                 .replace('_TITLE',product[0].title)
//                 .replace('_INFO_',product[0].description);
// const card2= cardTemplate
//                 .replace('_TITLE',product[1].title)
//                 .replace('_INFO_',product[1].description);
// const card3= cardTemplate
//                 .replace('_TITLE',product[2].title)
//                 .replace('_INFO_',product[2].description);

// const allcards=card1+card2+card3;
const allcards=product.map((elem)=>{
    let newcard=cardTemplate;
    newcard=newcard.replace('_TITLE',elem.title);
    newcard=newcard.replace('PRICE',elem.price);
    newcard=newcard.replace('RATING',elem.rating);
    newcard=newcard.replace('link',elem.id);
    newcard=newcard.replace('_INFO_',elem.description);
    newcard=newcard.replace('_img1',elem.images[0]);
    return newcard;
});
const page =htmlTemplate.replace('_PRODUCTS_CARDS_',allcards); 
const app= http.createServer((req,res)=>{
    console.log('request recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html', 
    })
    res.end(page);  
});
// http://localhost:1400/
app.listen(1400,()=>{
    console.log("...............server started..................");
}); 
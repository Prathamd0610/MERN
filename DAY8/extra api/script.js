const fs= require('fs');
const data= fs.readFileSync("./dummy.json","utf-8");
const obj= JSON.parse(data).carts;

const htmlTemplate= `
<!DOCTYPE HTML>
<HTML lang="en-US">
    <head>
    <style>
        .carts{
            max-width:500px;
            margin:20px auto;
            border: 5px double black;
            border-radius:8px;
            padding:15px;
            background-color: lightgreen;
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

const cardTemplate= `
<div class="carts" >
// <h2>ID</h2>
<p class=title>pTitle</p>
<p>pPrice</p>
<p>pTotal</p>
<a href="/product?id=link">more info</a>
<img src="Thumbnail" alt=" "></p> 
</div>
`
let result=[];
for(let i=0;i<obj.length;i++){
    let product= obj[i].products;
    temp=cardTemplate.replace('ID',obj[i].id);
    for(let j=0;j<product.length;j++){
        // const extra= product[j];
        let temp =cardTemplate;
        // console.log(product[j]);
        temp =temp.replace('pTitle',product[j].title);
        temp =temp.replace('pPrice',product[j].price);
        temp =temp.replace('pTotal',product[j].total);
        temp =temp.replace('link',product[j].id);
        temp =temp.replace('Thumbnail',product[j].thumbnail);
        result.push(temp);
    }
    // temp=temp.replace('product2',obj[i].products[1]);
    // temp=temp.replace('product3',obj[i].products[2]);
    // temp=temp.replace('product4',obj[i].products[3]);
}
result= result.join(' ');
const page =htmlTemplate.replace('_PRODUCTS_CARDS_',result);
// console.log(result);

const http= require('http');
const server = http.createServer((req,res)=>{
    // const route= req.url;
    // console.log(route,'\n')
    
    const url = require('url');
    // const {pathname}= url.parse(req.url);
    const path= url.parse(req.url,true);
    const pathname= path.pathname;
    const q = path.query;
    console.log(pathname,'\n');
    if(pathname==='/home'){
        res.end(page);
    }
    else if(pathname==='/product'){
        const qid= q.id;
        const temp = [];
        obj.forEach(({products})=>{
            products.forEach((item)=>{
                temp.push(item);
            })
        })
        const searchItem = temp.filter(({id})=>{
            return (id==qid);
        });
        res.end('product page'+searchItem[0].title);
    }
    else{
        res.end('404 not found')
    }
    // res.end(result);
});

server.listen(1400,()=>{
    console.log("......................server started.......................")
}) 
;
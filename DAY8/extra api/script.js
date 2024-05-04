const fs= require('fs');
const data= fs.readFileSync("./dummy.json","utf-8");
const obj= JSON.parse(data).carts;

const inputElement= `
    <input type="search" name="productName">
`

const htmlTemplate= `
<!DOCTYPE HTML>
<HTML lang="en-US">
    <head>
    <style>
        .product-carts{
            max-width:300px;
            margin:20px auto;
            border: 5px double black;
            border-radius:10px;
            padding:10px;
            background-color: purple;
            color: white;
        }
        a{
            color:white;
        }
        a:visited{
            color:lightcoral;
        }
        .carts{
            max-width:500px;
            margin:20px auto;
            border: 5px double black;
            border-radius:8px;
            padding:15px;
            background-color: purple;
            color: white;
        }
        img{
            max-height:40%;
            max-width:90%; 
            border: 4px solid white;
            border-radius:10px;
            cursor:pointer;
        }
        .title{
            font-size:1.3rem;
            text-align:center;
        }
    </style> 
    </head>
    <body>
            <form action="/product">
            <input type="search" name="id">
            <button type="submit">Search</button>
            </form>
        _PRODUCTS_CARDS_
}); 
    </body> 
</html>`

const cardTemplate= `
<div class="carts" > 
<h2>Cart=ID</h2>
<p class=title>pTitle</p>
<p>ID=pID</p>
<p>Quantity=pQuan</p>
<p>Price=$pPrice</p>
<a href="/product?id=link">more info</a>
</div>`
const carts= `
<div class="product-carts" >
<p class=title>pTitle</p>
<p>ID=pID</p>
<p>Price=$pPrice</p>
<p>Quantity=pQuan</p>
<p>Total=pTotal</p>
<img src="Thumbnail" alt=" "></p> 
<a href="/home"> back..</a>
</div>`

let result=[];
for(let i=0;i<obj.length;i++){
    let product= obj[i].products;
    for(let j=0;j<product.length;j++){
        // const extra= product[j];
        let temp =cardTemplate;
        // console.log(product[j]);
        temp=cardTemplate.replace('ID',obj[i].id);
        temp =temp.replace('pTitle',product[j].title);
        temp =temp.replace('pID',product[j].id); 
        temp =temp.replace('pPrice',product[j].price);
        // temp =temp.replace('pTotal',product[j].total);
        temp =temp.replace('pQuan',product[j].quantity);
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
        let next=[];
        let temp2 =carts;
        // console.log(product[j]);
        temp2 =carts.replace('pTitle',searchItem[0].title);
        temp2 =temp2.replace('pPrice',searchItem[0].price);
        temp2 =temp2.replace('pTotal',searchItem[0].total);
        temp2 =temp2.replace('pID',searchItem[0].id);
        temp2 =temp2.replace('pQuan',searchItem[0].quantity);
        temp2 =temp2.replace('link',searchItem[0].id);
        temp2 =temp2.replace('Thumbnail',searchItem[0].thumbnail);
        next.push(temp2);
        const page2= htmlTemplate.replace("_PRODUCTS_CARDS_",next);
        res.end(page2);
    }
    else{
        res.end('404 not found');
    }
    // res.end(result);
});

server.listen(1400,()=>{
    console.log("......................server started.......................")
});
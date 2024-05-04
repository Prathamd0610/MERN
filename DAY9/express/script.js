const express = require('express');
const fs= require('fs/promises');
const app= express();

app.get('/api/product',async(req,res)=>{
    const data= await fs.readFile('./data.json',"utf-8");
    const obj = JSON.parse(data);
    const arr=JSON.parse(data);
    res.json({
        status:'success',
        results:arr.length,
        data:{
            products:arr,
        }
    })
});

app.use(express.json());
app.post('/api/product',async(req,res)=>{
    // console.log(Object.keys(req));
    // console.log(req.body)
    // const data= req.body;
    // data.id=121;
    // console.log(data);

    // const db=await fs.readFile('./data.json',"utf-8");
    // const arr= JSON.parse(db);
    // const len=arr.length;
    // if(len==0){
    //     data.id=1;
    //     console.log(arr)
    //     arr.push(data);
    //     console.log(arr)
    // }
    // else{
    //     const newID=db[len-1];
    // }
    // res.send('work in progress');
const data = req.body;
const db= await fs.readFile("./data.json","utf-8");
const arr= JSON.parse(db);
const len= arr.length;
const newProduct= data;
if(len==0){
    newProduct.id=1;  
}
else{ 
    newProduct.id=(arr[len-1].id)+1;
    // console.log(newProduct);
}
arr.push(newProduct);
// console.log(arr);
fs.writeFile("./data.json",JSON.stringify(arr));
res.json({
    status:'success',
    results:1,
    data:{
        newProduct:newProduct,
    }
})
});

app.put('/product/:id',async(req,res)=>{
    const arr=JSON.parse(await fs.readFile("./data.json","utf-8"));
    // res.send("work in progress.....");
    const reqID=req.params.id;
    const data= req.body;
    data.id=reqID;
    const newArr= arr.map((elem)=>{
        if(elem.id==reqID)return data;
        else return elem;
    });
    fs.writeFile("./data.json",JSON.stringify(newArr));
    // console.log(data);
    res.json({
        status:'success',
        result:1,
        data:{
            newProduct:newArr
        }
    })

})
app.listen(1800);

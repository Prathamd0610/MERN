const express = require('express');
const fs= require('fs/promises');
const app= express();
app.use(express.json());
// const productController=require('../controllers/productsController.js');
const productRouter=require('./routers/productRoute.js');
app.use('/api/product',productRouter);

app.listen(1800);

// const productRouter =express.Router();


// productRouter.route('')
// .get(productController.getAllProducts) 
// .post(productController.replaceProduct);

// productRouter.route('/:id')
// .put(productController.addProduct)
// .delete();

// app.get('/api/product',productController.getAllProducts);

// app.use((req,res,next)=>{
//     const time=new Date().toLocaleString();
//     fs.appendFile('./log.txt',req.url+'\t'+time+'\n');
//     next(); 
// })
// app.post('/api/product',productController.replaceProduct);

// app.put('/api/product/:id',productController.addProduct);




console.log("APP STARTED...");

function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=1c2d9caeebbe42fb9c0c704848273a44")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
        renderUI(data);
    })
}
callAPI();
function renderUI(data){
    //got srticles from data
    const articles= data.articles;
    //single article from all article array
    for(let i=0;i<articles.length;i++){
    const ar=articles[i];

    // console.log(ar);
    //created a parent div
    const root = document.getElementById("root");
    const div = document.createElement("div");
    div.setAttribute('class','newscard')
    root.appendChild(div);
    const img=document.createElement("img");
    img.src= ar.urlToImage;
    const h3= document.createElement("h3");
    h3.innerHTML=ar.title;
    div.appendChild(h3);
    div.appendChild(img);
    // console.log(ar);
    const div2=document.createElement("div");
    div2.innerHTML=ar.description;
    div.appendChild(div2);

    }
}
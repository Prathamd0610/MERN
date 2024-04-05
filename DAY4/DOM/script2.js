const res=
document.querySelector('div');
console.log(res);
// res.innerHTML="hello";
// res[0].remove();
const r=document.querySelector('p:nth-of-type(2)');
// res.removeChild(r);

function getInfo(e)
{
    console.log("button clicked");
    // const d=document.querySelector("div");
    // const e=document.createElement('p');
    // e.innerHTML='pratham dhingra';
    // d.append(e);
    // r.innerHTML="hello"
    // document.body.appendChild(r);
    console.log(e);
    // e.target.class='abc';
    // e.target.setAttribute('style','color:red');
    // e.target.setAttribute('style','background-color:red');
    e.target.style.color='white';
    e.target.style.backgroundColor='blue'
     
}
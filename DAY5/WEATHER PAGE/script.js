console.log("...WEATHER PAGE...");

function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=LHDSC3BZ7BM582CRZ3VJWFCDQ";
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data)
        renderUI(data);
    });
}
fetchAPI();

function renderUI(data){

    const allDays = data.days;
    // for(let i=0;i<data.length;i++){
    console.log(allDays);
    const root= document.getElementById('root');
    const caption=document.createElement('caption');
    caption.innerHTML=(data.address);
    caption.setAttribute('class','caption');
    root.appendChild(caption);
    const row= document.createElement('tr');
    root.appendChild(row);
    
    const cell1 = document.createElement('th');
    cell1.innerHTML="Date";
    row.appendChild(cell1);
    
    const cell2 = document.createElement('th');
    cell2.innerHTML="Maximum Temperature";
    row.appendChild(cell2);
    
    const cell3 = document.createElement('th');
    cell3.innerHTML="Minimum Temperature";
    row.appendChild(cell3);

    const cell4 = document.createElement('th');
    cell4.innerHTML="Description";
    row.appendChild(cell4);
    const cell5 = document.createElement('th');
    cell5.innerHTML="SunRise";
    row.appendChild(cell5);
    const cell6 = document.createElement('th');
    cell6.innerHTML="SunSet";
    row.appendChild(cell6);
    
    for(let i=0;i<allDays.length;i++){
        const days=allDays[i];
        
        //creating child row 
    const Childrow= document.createElement('tr');
    root.appendChild(Childrow);
    // root.appendChild(row);
    
    const c1 = document.createElement('td');
    c1.innerHTML=days.datetime;
    Childrow.appendChild(c1);
    
    const c2 = document.createElement('td');
    c2.innerHTML=days.tempmax;
    Childrow.appendChild(c2);
    
    const c3 = document.createElement('td');
    c3.innerHTML=days.tempmin;
    Childrow.appendChild(c3);

    const c4 = document.createElement('td');
    c4.innerHTML=days.description;
    c4.setAttribute('class','des')
    Childrow.appendChild(c4);
    const c5 = document.createElement('td');
    c5.innerHTML=days.sunrise;
    Childrow.appendChild(c5);
    const c6 = document.createElement('td');
    c6.innerHTML=days.sunset;
    Childrow.appendChild(c6);
    }
}
// renderUI();
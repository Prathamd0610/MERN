console.log("...WEATHER PAGE...");

function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=LHDSC3BZ7BM582CRZ3VJWFCDQ";
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    });
}
fetchAPI();

function renderUI(){
    const root= document.getElementById('root');
    const days = days.datetime;
    console.log(days);

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


    const Childrow= document.createElement('tr');
    root.appendChild(Childrow);
    // root.appendChild(row);
    
    const c1 = document.createElement('td');
    c1.innerHTML="Date";
    Childrow.appendChild(c1);
    
    const c2 = document.createElement('td');
    c2.innerHTML="Maximum Temperature";
    Childrow.appendChild(c2);
    
    const c3 = document.createElement('td');
    c3.innerHTML="Minimum Temperature";
    Childrow.appendChild(c3);
    


}
renderUI();
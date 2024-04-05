const fnameChange=(e)=>{
    const val=e.target.value;
    // console.log(e.target.value);
    if(val.length>3)
        console.log("correct")
}

const submitForm=(e)=>{
    e.preventDefault();
    const t =e.target;
    const res={
        hobbies:[],
    };
    for(let i=0;i<t.length;i++){
        console.log(t[i].value);
        const ty=t[i].type;
        const val=t[i].value
        const nm= t[i].name;
        // console.log(nm,ty,val);
         if(ty!='submit')
        {
            if(ty=='checkbox' && t[i].checked)
                res.hobbies.push(val);
            if(ty!='checkbox')
                res[nm]=val;

        }
    }
    console.log(res);
}
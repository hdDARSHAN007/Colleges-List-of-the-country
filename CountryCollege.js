let btn = document.querySelector('button');
let url = "http://universities.hipolabs.com/search?name=";

async function getColleges(country){
    try{
        let name = await axios.get(url+country);
        return name.data;
        
    }catch(e){
        console.log("error = ",e);
        return [];
    }

}
btn.addEventListener("click",async ()=>{
    console.log("btn is clicked");
    let country = document.querySelector("input").value;
    // let state = document.querySelector("input").value;
    console.log("colleges of counntry =>",country);
    let collArr= await getColleges(country);//country->state;
    // console.log(collArr);
    show(collArr);
});

function show(collArr){
    let list = document.querySelector('#add');
    list.innerText = "";
    
    for(col of collArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

// btn.addEventListener('click',async ()=>{
//     let input = document.querySelector('input');
//      console.log(input);

//     let list= document.querySelector("#add");
//     console.log(list);
// })

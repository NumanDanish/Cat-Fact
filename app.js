let url = "https://catfact.ninja/fact";


let btn = document.querySelector('button');

btn.addEventListener("click",async ()=>{  //async means it won’t block the browser UI, even if something takes time inside it (like API call).
    let randFact = await getdata();
    let para = document.querySelector('#result');
    para.innerText = randFact;
})

async function getdata() 
{
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "Error: No Fact Found";
    }
}
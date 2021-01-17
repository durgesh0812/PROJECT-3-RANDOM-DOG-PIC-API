



let searchbtn=document.querySelector("#search1")
searchbtn.addEventListener("click",()=>{
    console.log("button pressed")
    sendapirequest()
}) 

async function sendapirequest(){
   	
    let response=await fetch(`https://dog.ceo/api/breeds/image/random`)

console.log(response)
let data=await response.json();
console.log(data)
useapidata(data)
}

function useapidata(data)

{
     document.querySelector("#content").innerHTML=`
     
     <div class="card" style="width: 30rem;">
     <img src="${data.message}" class="card-img-top" alt="..."></div>
     
   </div>
    
    `
}

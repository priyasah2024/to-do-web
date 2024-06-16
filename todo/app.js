let input=document.querySelector("input");
let ul=document.querySelector("ul");
let btn= document.querySelector("button");
// let body=document.querySelector("body");
btn.addEventListener("click",()=>{
    let list=document.createElement("li");
    list.innerText=input.value;
    let dltbtn=document.createElement("button");
    dltbtn.classList.add("delete");
    dltbtn.innerText="done";
    list.appendChild(dltbtn);
ul.append(list);
input.value="";

});
ul.addEventListener("click",()=>{
   if(event.target.nodeName=="BUTTON"){
  let item= event.target.parentElement;

  item.remove();
   }
})

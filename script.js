const container=document.querySelector("#container");
document.querySelector('#clear').addEventListener('click',()=>document.querySelectorAll('.created').forEach(el=>el.setAttribute('style','background-color:#ededed;')));
const omg=(n,color)=>{
    if(n>=0 && n<=240){
        for(let i=1;i<=n**2;i++) {
            let box=document.createElement("div");
            box.addEventListener("mouseover",()=>{
                box.setAttribute('style',`background-color:${color};`)
            })
            box.setAttribute("class","created");
            container.appendChild(box); 
        }
    } 
}
document.querySelector('#click').addEventListener("click",()=>{
    let n=Number(prompt("Enter Size(between 1 and 240): "));
    let c=document.querySelector('#color').value
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    omg(n,c);
});



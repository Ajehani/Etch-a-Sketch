const container=document.querySelector("#container");
const slider=document.querySelector('#slider');
slider.addEventListener("click",function(e){
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
};
    let n = e.target.value
    console.log(n)

    for (i=1;i<=n**2;i++) {
        let box=document.createElement("div");
        box.setAttribute("id","created");
        container.appendChild(box); 
}})

let items=document.querySelectorAll("#created");

items.forEach(item =>item.addEventListener("mouseover",function(){
    item.style="backgroundColor:gold;";
    console.log("yay")
}))
const clear=document.querySelector('#clear')
clear.addEventListener('click',function(){
    items.forEach(item =>item.style="background-color:white;")
})



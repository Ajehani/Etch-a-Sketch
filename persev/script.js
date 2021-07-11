const c=document.querySelector("#container");
//  const convert = function(element){
//    element.target.style.backgroundColor="gold"
// };

for (i=1;i<=256;i++) {
    let p=document.createElement("div");
    p.setAttribute("id","created");
    c.appendChild(p); 
}
let items=document.querySelectorAll("#created");

items.forEach(item =>item.addEventListener("mouseover",function(){
    item.style='background-color:gold;';
}))
const clear=document.querySelector('#clear')
clear.addEventListener('click',function(){
    items.forEach(item =>item.style='background-color:white;'
    )})



// function grid(el) {
//   var container = document.createElement("div");
//   container.id = "main";
//   container.className = "container";

//   for (i=0; i<16; i+=1) {
//       var row = document.createElement("div");
//       row.className = "row";
//       row.id = "row" + i;
    
//       for (k=0; k<16; k+=1) {
//           var box = document.createElement("div"); 
//           box.className = "box";
//           row.appendChild(box);
//       };
    
//       container.appendChild(row);      
//   };

//   el.appendChild(container);
// };

// grid(document.body);

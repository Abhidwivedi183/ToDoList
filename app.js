const entry = document.querySelector('#inputbox');
const listcontainer = document.querySelector('#listcontainer');
const butn = document.querySelector('.btn');


function addnewli(val){
  let nl = document.createElement('li');
  nl.appendChild(document.createTextNode(val));
  listcontainer.appendChild(nl);

let x = document.createElement('span');
x.innerHTML = "\u00d7";
nl.appendChild(x);

}


butn.addEventListener('click',function(e){
  e.preventDefault();
const value = entry.value;
addnewli(value);
entry.value = '';
savedata();
})
listcontainer.addEventListener('click',function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
}
},false);
function savedata(){
  localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
  listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();
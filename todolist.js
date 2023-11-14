 /*const todolist=[];
function addtodo(){
   const inputelement= document.querySelector('.input')
   const name=inputelement.value;
   todolist.push(name);
   console.log(todolist)

    
}*/
const todolist=['make dinner','wash dishes'];
function abc(){
let todolisthtml='';
for(i=0;i<todolist.length;i++){
    const todo=todolist[i]
    const html=`<p>${todo}</p>`
    todolisthtml+=html
}
document.querySelector('.todolist1')
.innerHTML=todolisthtml;
}
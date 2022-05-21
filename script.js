
function addmore(){
    let task=document.getElementById("task")
    let  list=document.getElementById("list")
    let li=document.createElement("li")
    if(task.value==""){
        alert("please enter something");
    }else{
        li.textContent=task.value;
        list.appendChild(li);
        const deleteButton=document.createElement("button")
        deleteButton.innerHTML="delete"
        list.appendChild(deleteButton)
         deleteButton.addEventListener("click",()=>{
             li.remove();
             deleteButton.remove();
             doneButton.remove();
            });
  
   
       
  
    const doneButton=document.createElement("button")
            doneButton.innerHTML="done"
            task.value=" ";
            list.appendChild(doneButton)
            doneButton.addEventListener("click",()=>{
                li.classList.add("done")
                doneButton.remove();
            })

}  }


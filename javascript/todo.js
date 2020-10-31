const input = document.getElementsByClassName("text")[0];
const items_list= document.getElementsByClassName("items")[0];
const clear = document.getElementsByClassName("clear")[0];
const valid = document.getElementById("validation");
const modal = document.getElementsByClassName("modal")[0];
const item_counter = (()=>
{
    let count=0;
    return{
        add: ()=>
    {
        return ++count;
    },
    get: ()=>{return count;}
    } 
})()
const add = ()=> {
    if(input.value.length===0)
    {
        
        if(!input.classList.contains("notVALID"))
        {
            input.classList.add("notVALID");
            valid.style.display="block";
            
        }
    }
    else{
      const newItem = document.createElement("li");
      const remove = document.createElement("img");
      const edit = document.createElement("img");
      const container = document.createElement("div")
      const textTODO = document.createElement("textarea");
      edit.src="../assest/writing.svg";
      remove.src="../assest/remove.svg";
      edit.style.width="40px"
      remove.style.width="40px"
      remove.classList.add("remove")
      edit.classList.add("edit")
      newItem.classList.add("items-li")
    textTODO.value = input.value;
    textTODO.readOnly="true"
    textTODO.classList.add("todo-item")
    localStorage.setItem(`todo-${item_counter.add()}`,textTODO.value)
    newItem.name  =`todo-${item_counter.get()}` ;
    container.classList.add("operation")
    container.appendChild(edit)
    container.appendChild(remove)
    newItem.appendChild(container)
    newItem.append(textTODO)
    
    remove.addEventListener("click",()=>
    {
        
        localStorage.removeItem(newItem.name)
        items_list.removeChild(newItem);
    })
    edit.addEventListener("click",()=>
    {
     
        newItem.children[1].readOnly =false
        newItem.children[1].focus();
    })
    textTODO.addEventListener("focusout",()=>
    {
        textTODO.readOnly="true"
    })
    items_list.appendChild(newItem);
    input.value ='';  
    input.classList.remove("notVALID");
    valid.style.display="none"
    input.focus();
    }
    
    
}
const clearListHandler = ()=>
{
    modal.style.visibility="visible";
}
const _clear= ()=>
{
    let i=0;
    while(items_list.children.length )
    {
        
items_list.children[i].children[0].children[1].click()
        //.click();  
    }
    localStorage.clear();
    dontClear()
}
const dontClear = ()=>
{
    modal.style.visibility="hidden";  
}
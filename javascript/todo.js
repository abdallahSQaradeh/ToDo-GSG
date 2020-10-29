const input = document.getElementById("text");
const items_list= document.getElementsByClassName("items")[0];
const clear = document.getElementsByClassName("clear")[0];
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
    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    localStorage.setItem(`item-${item_counter.add()}`,newItem.textContent)
    newItem.name  =`item-${item_counter.get()}` ;
    newItem.addEventListener("click",()=>
    {
        
        localStorage.removeItem(newItem.name)
        items_list.removeChild(newItem);
    })
    items_list.appendChild(newItem);
    
}
const clearList = ()=>
{
    
    let i=0;
    while(i< items_list.children.length)
    {
        items_list.children[i].click();
        i++;
        
    }
    localStorage.clear();
    
}
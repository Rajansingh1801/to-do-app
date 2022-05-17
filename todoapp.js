let inputitem=document.querySelector(".text");
inputitem.onkeyup=function(e){
if(e.keyCode===13){          //13 is come from browser console
    if(inputitem.value){    //this line is only for not addd empty notes;
        additem();          //function call
    }
    };
function additem(item){    //function declare
    let ul=document.querySelector("#list");
    let li=document.createElement("li");

    //for creating new net in li
    
    let textnote=document.createTextNode(inputitem.value);
    li.appendChild(textnote);
    ul.appendChild(li);
    inputitem.value="";    //used to remove item when lsit is add;
    li.onclick=function(e){
        e.target.remove();          //used to remove the value;
    }
};
}
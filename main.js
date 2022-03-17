  const input_el = document.querySelector("#input1");
  const add = document.querySelector("#add");
    add.addEventListener("click",(e)=>
    {
      e.preventDefault();
        let list_el = input_el.value;
      if(!list_el)
      {
        alert("Please Enter an task to continue");
      }   
      else
      {
        var div3 = document.querySelector(".list");
      
        let task_el = document.createElement("div");
        task_el.setAttribute("id","list_in");
        div3.appendChild(task_el);

        //ckeck functionality
        let dun= document.createElement("input");
        dun.type='checkbox';
        dun.setAttribute("id","dun");
        dun.onclick=()=>
        {
          
          let edit= dun.parentElement;
          edit.classList.toggle('completed');
        }
        task_el.appendChild(dun);
       
        //input functionality
        let redirect= document.createElement("p");
        redirect.setAttribute("id","show");
        redirect.textContent=list_el;
        document.querySelector('#input1').value=null;
        task_el.appendChild(redirect);
        
        //delet functionality
        let delete_el= document.createElement("button");
        delete_el.setAttribute("id","delete");
        delete_el.innerHTML="Delete";  
        task_el.appendChild(delete_el);
        delete_el.onclick=()=>
        {
          let dels = delete_el.parentElement;
          dels.style.display="none";
        }
      }
    });
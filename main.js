  const input_el = document.querySelector("#input1");
  const add = document.querySelector("#add");
  const total_el = document.querySelector("#list_in");
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
      
        let redirect= document.createElement("p");
        redirect.setAttribute("id","show");
        redirect.textContent=list_el;
        task_el.appendChild(redirect);

        let delete_el= document.createElement("p");
        delete_el.setAttribute("id","delete");
        delete_el.textContent="Delete";  
        task_el.appendChild(delete_el);
        delete_el.onclick=()=>
        {
          let dels = delete_el.parentElement;
          dels.style.display="none";
        }
      }
    });
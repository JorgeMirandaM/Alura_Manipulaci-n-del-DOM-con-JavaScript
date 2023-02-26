const deleteIcon= ()=>{
    const i = document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-trash-alt");
    i.classList.add("trashIcon");
    i.classList.add("icon");
    i.addEventListener("click",(deleteTask))
    return i;
  }

  const deleteTask=(evento)=>{
    const parent = evento.target.parentElement;
    parent.remove();
  }


  export default deleteIcon;
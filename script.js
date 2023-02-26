const btn=document.querySelector("[data-form-btn]");
const input= document.querySelector("[data-form-input]")

const createTask= (evento)=>{
    evento.preventDefault();
    console.log("crear tarea")
    console.log(input.value)
}

btn.addEventListener("click",createTask)
const form = document.querySelector(".login-form");


function formHandler(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let {email,password} = event.currentTarget.elements;

    if(email.value !== "" && password.value !== ""){
        formData.forEach((value,key) => {
            console.log(`${key} :${value}`);
        })
        event.currentTarget.reset()
    }
    else{
        alert('All fields must be filled in!')
    }
}


form.addEventListener("submit",formHandler)
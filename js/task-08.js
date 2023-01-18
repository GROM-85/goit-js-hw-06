const form = document.querySelector(".login-form");


function formHandler(event){
    event.preventDefault();
    let formData = {};
    let {email,password} = event.currentTarget.elements;

    if(email && password){
        // variant 1 to collect form data from new FormData()
        for(let [key,value] of new FormData(event.currentTarget).entries()){
            formData[key] = value;
        }
        //variant 2 via pseudo array event.currentTarget.elements and reduce
        formData = [...event.currentTarget.elements].reduce((obj,curr) => {
            if(curr.name){
                obj[curr.name] = curr.value;
            }  
            return obj;
        },{});

        event.currentTarget.reset();
        console.log(formData);
    }
    else{
        alert('All fields must be filled in!')
    }
}


form.addEventListener("submit",formHandler)
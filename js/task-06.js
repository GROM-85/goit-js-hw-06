const input = document.querySelector("#validation-input");

input.addEventListener("blur",() => {
    input.value.length == input.dataset.length ?
    input.classList.add('valid') :
    input.classList.add('invalid');
})

input.addEventListener("focus",() =>{
    let re = /(in){0,1}valid/g;
    if(re.test(input.className)){
        input.className = input.className.replace(re,"");
    }
})
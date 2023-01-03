const input = document.querySelector("#validation-input");

input.addEventListener("blur",() => {
    console.log(input.value.length);
    console.log(input.dataset.length)
    input.value.length == input.dataset.length ?
    input.classList.add('valid') :
    input.classList.add('invalid');
})

input.addEventListener("focus",() =>{
    let re = /in{0,1}valid/g;

    if(re.test(input.className)){
        input.className = input.className.replace(re,"");
        console.log("Class name after clean up:",input.className);
    }
})
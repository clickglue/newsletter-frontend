const submitButton=document.getElementById('submit');
const dismiss=document.getElementById('dismiss');
const input=document.getElementById("input");
const errorMessage=document.getElementById("error-message");
const mobile=document.getElementById('mobile');
const mobileSuccess=document.getElementById('mobile-success');

const showError=(e)=>{
    input.classList.add('error')
    errorMessage.classList.add('error')
    input.value="";
}

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if (!input.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        return showError();
    }
    input.classList.remove('error')
    errorMessage.classList.remove('error')
    input.value="";
    mobile.classList.add('success')
    mobileSuccess.classList.add('success')
})

dismiss.addEventListener('click', (e)=>{
    e.preventDefault;
    mobile.classList.remove('success')
    mobileSuccess.classList.remove('success')
})
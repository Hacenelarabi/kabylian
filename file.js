const distination = document.getElementById('distination');
const fdist = document.getElementById('fdist');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const date = document.getElementById('date');
const dateA = document.getElementById('datea');
 const message = document.getElementById('message');



form.addEventListener('submit', function(e) {
   e.preventDefault();
    if(distination.value === '' || fdist.value === ""){
    alert('the form should be filled out');
    } 
    var error = []

    if(distination.value === ''){
        error.push('please enter the airport');
    } else
     if(fdist.value === ''){
        error.push('please enter the distination');
    } 
    else
    if(date.value === ''){
        error.push('please enter the departure date');
    } else 
    if(dateA.value === ''){
        error.push('please select the arrival date');
    } 
    message.innerText = error
    if(distination.value && fdist.value && date.value && dateA.value){
    alert('form is submitted')
    }
   
    
 });
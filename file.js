const distination = document.getElementById('distination');
const fdist = document.getElementById('fdist');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const date = document.getElementById('date');
const dateA = document.getElementById('datea');
 const message = document.getElementById('message');



class tarveler () {
    constructor(distination, fdist, date, dateA){
        this.distination = distination;
        this.fdist = fdist;
        this.date = date;
        this.dateA = dateA;
    }
}
class UI {
    static displayTraveler(){ 
     displayTraveler.forEach
    }
}





















 

/*function myFunct(){
    var distination = document.getElementById('distination').value;
    var fdist = document.getElementById('fdist').value;
    var date = document.getElementById('date').value;
    var dateA = document.getElementById('datea').value;

    var distinationa = localStorage.setItem("distination", distination);
    var fdista = localStorage.setItem("fdist", fdist);
    var datea = localStorage.setItem("date", date);
    var dateaa = localStorage.setItem("dateA", dateA);
    
}
form.addEventListener('submit', myFunct)*/
























/*form.addEventListener('submit', function(e) {
  
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
    if(distination.value && fdist.value && date.value && datea.value){
        error.push("thank you for submitting the form")
    }
message.innerText = error
 });




 /*function show(e){
    e.preventDefault();
    submit.innerText = 'please fill out this feild';
    submit.style.color= 'red';
    submit.style.backgroundColor = "blue";
 }
 submit.addEventListener('click', show);*/
 

 /*function showInfo(e){
    e.preventDefault();
    var error = []
    if(distination.value === "" && fdist.value === '' && date.value === "" && dateA.value === ""){
        error.push( 'please fill out all the feilds');
   
    }  else
    if(distination.value === "" || fdist.value === '' || date.value === "" || datea.value === ""){
        error.push("fill out the rest of the feilds");
    }
    message.innerText = error
    if(distination.value && fdist.value && date.value && datea.value){
        alert('your form has been submitted')
    }
 }
 form.addEventListener('submit', showInfo);*/



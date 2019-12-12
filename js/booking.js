function Booking(){

  var BtngoBack = document.getElementById('BtngoBack');
  var BtnConfirmDet = document.getElementById('BtnConfirmDet');

  /*middle DIV for Summary*/
  var reservationDetails = document.querySelector('#reservationDetails p');
  var reservationSummary = document.getElementById('reservationSummary');

  //restaurant Details
  var resReserv = document.forms[0];
  //resReserv[0] = location
  //resReserv[1] = guest
  //resReserv[2] = date
  //resReserv[3] = time
  //resReserv[4] = submit
  var dateReserv;
  var custReserv = document.forms[1];
  //custReserv[0] = FName
  //custReserv[1] = LName
  //custReserv[2] = Phone
  //custReserv[3] = Email
  //custReserv[4] = Occasion
  //custReserv[5] = Request
  //custReserv[6] = submit
  

  // // Function to go Back
  var carosel = document.querySelector('.carosel');
  
 
  //Validation
  //var LocValid = /^[a-zA-Z]{1,}$/;
  var nameValid = /^[a-zA-Z ]{2,30}$/;
  //Validation from Adeel Ahmed on Dec 30, 2012 with https://stackoverflow.com/questions/14088714/regular-expression-for-name-field-in-javascript-validation
  var emailValid =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //Source Validation by Sachin Kainth April 23 2013 https://stackoverflow.com/questions/16167983/best-regular-expression-for-email-validation-in-c-sharp/16168118
  var phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  //telephone Validation by https://www.w3resource.com/javascript/form/phone-no-validation.php Nov 09,2019

  //Creating an Array of Validation
  var custValid = [nameValid,nameValid,phoneValid,emailValid];
  var errorMsg = document.getElementsByClassName('errorMsg');
  //This variable will be used to determined which step are we
  var step;
 
  var showForm = document.getElementsByClassName('showForm');
  var dots = document.getElementsByClassName('dot');

  function hideForm(){
    for(let i = 0; i<showForm.length; i++){
      showForm[i].style.display = "none";   
    }
    for(let i=0; i<dots.length; i++){
      dots[i].style.background = "#FB8C94";
      dots[i].style.color = "#000000";
    }
    for(let i=0; i<errorMsg.length; i++){
      errorMsg[i].style.display = "none";
    }
  }

  //Initial Values
  function Initialize(){
    step=0;
    hideForm();
    showForm[step].style.display = "block";
    dots[step].style.background = "#7e94a9";
    dots[step].style.color = "#FFFFFF";
    BtngoBack.style.display="none";
    
  }
  

  //Find Table is click 1st click
  resReserv.onsubmit = function(){   
    //Required Validation
    for(let i=0; i<resReserv.length-1; i++){
      if(resReserv[i].value == ""){
        resReserv[i].style.border = "1px solid red";
        return false;
      }
      else{
        resReserv[i].style.border = "none"
      }
    }
  
  
    dateReserv = (new Date(resReserv[2].value)).toDateString();
    step=1;

    console.log("SUCCESS");
    hideForm();
    showForm[step].style.display="block";
    dots[step].style.background = "#7e94a9";
    dots[step].style.color = "#ffffff";
    BtngoBack.style.display="inline-block";

    reservationDetails.innerHTML = "We have an available table for "+resReserv[1].value+ " at ";
    reservationDetails.innerHTML += resReserv[0].value + " on " +dateReserv;
    reservationDetails.innerHTML += " at " +resReserv[3].value;
  
    
    return false;
   
  }

  //Make a Reservation is click 2nd click
  BtnConfirmDet.onclick = function(){
    step=2;
    hideForm();
    showForm[step].style.display="block";
    dots[step].style.background = "#7e94a9";
    dots[step].style.color = "#ffffff";  
    restaurantDetailsSummary.innerHTML = "<div> Guests <span>"+resReserv[1].value+"</span></div>";
    restaurantDetailsSummary.innerHTML +="<div> Date <span>"+dateReserv+"</span></div>";
    restaurantDetailsSummary.innerHTML +="<div> Time <span>"+resReserv[3].value+"</span></div>";
    restaurantDetailsSummary.innerHTML +="<div> Bakery Location<span>"+resReserv[0].value+"</span></div>";

  }

  //Complete Reservation is click 3rd click
  custReserv.onsubmit = function(){
    step=3;   
    //Validation for empty and Regular Expression
    for(let i=0; i<custReserv.length-3; i++){
      if(custReserv[i].value == ""){
        custReserv[i].style.border = "1px solid red";
        return false;
      }
      else if(!custReserv[i].value.match(custValid[i]))
      {    
        errorMsg[i].style.display = "inline-block";
        return false;
      }
      else{
        custReserv[i].style.border = "none"
        errorMsg[i].style.display = "none";
      }
    }

    reservationSummary.innerHTML = "Congratulation " +  custReserv[0].value +custReserv[1].value+ "!";
    reservationSummary.innerHTML += "Your Reservation on " +resReserv[0].value+ " for "+ resReserv[1].value;
    reservationSummary.innerHTML += " on "+dateReserv +" at " +resReserv[3].value+ " has been received!";
    
    carosel.style.display="none";
    hideForm();
    showForm[step].style.display="block";
    BtngoBack.style.display="none";
    return false;
    
  }

  var BookUs = document.getElementById('BookUs');
  var BookTable = document.querySelector('.reser-cont');

  BookUs.onclick = toggleBooking;

  function toggleBooking() {
    BookTable.classList.toggle("show-booking");
  }
  
  //When click on the form Container
  window.onclick = windowOnClick;
    function windowOnClick(event) {
      if (event.target === BookTable) {
        console.log("click");
        toggleBooking();
        
      }
  }

  // Go back is click
  BtngoBack.onclick = Initialize;
  //Call the Initialization 
  Initialize();
}
//Call The booking Function
Booking();

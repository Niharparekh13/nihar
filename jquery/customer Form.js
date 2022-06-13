$(document).ready(function(){
    $("#firstname").blur(function(){
        let firstname = $('#firstname').val();
        let firstname_pattern = "[a-zA-Z]{2,30}$";

        if(!firstname.match(firstname_pattern)){
        let text;
        text = 'First name is required';
        $('#OP1').text(text); 
        }
        
    });
    $("#lastname").blur(function(){
      let lastname = $('#lastname').val();
      let lastname_pattern = "[a-zA-Z]{2,30}$";

      if(!lastname.match(lastname_pattern)){
      let text;
      text = 'Last name is required';
      $('#OP2').text(text); 
      }
  });
  $("#staddress").blur(function(){
    let staddress = $('#staddress').val();
    let staddress_pattern = "[a-zA-Z]{2,30}$";

    if(!staddress.match(staddress_pattern)){
    let text;
    text = 'Address is required';
    $('#OP3').text(text); 
    }
});
$("#city").blur(function(){
  let city = $('#city').val();
  let city_pattern = "[a-zA-Z]{2,30}$";

  if(!city.match(city_pattern)){
  let text;
  text = 'City is required';
  $('#OP4').text(text); 
  }
});
$("#state").blur(function(){
  let state = $('#state').val();
  let state_pattern = "[a-zA-Z]{2,30}$";

  if(!state.match(state_pattern)){
  let text;
  text = 'State is required';
  $('#OP5').text(text); 
  }
});
$("#zipcode").blur(function(){
  let zipcode = $('#zipcode').val();
  let zipcode_pattern = "^[0-9]{6}$";

  if(!zipcode.match(zipcode_pattern)){
  let text;
  text = 'zipcode is required';
  $('#OP6').text(text); 
  }
});
$("#phone").blur(function(){
  let phone = $('#phone').val();
  let phone_pattern = "/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/";

  if(!phone.match(phone_pattern)){
  let text;
  text = 'Contact number is required';
  $('#OP7').text(text); 
  }
});
$("#email").blur(function(){
  let email = $('#email').val();
  let email_pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

  if(!email.match(email_pattern)){
  let text;
  text = 'E-mail is required';
  $('#OP8').text(text); 
  }
});
$("#feedback").blur(function(){
  let feedback = $('#feedback').val();
  let feedback_pattern = "[a-zA-Z]{3,30}$";

  if(!feedback.match(feedback_pattern)){
  let text;
  text = 'Please give us some feedback';
  $('#OP9').text(text); 
  }
});
$("#suggestion").blur(function(){
  let suggestion = $('#suggestion').val();
  let suggestion_pattern = "[a-zA-Z]{3,30}$";

  if(!suggestion.match(suggestion_pattern)){
  let text;
  text = 'Please enter your suggestions';
  $('#OP10').text(text); 
  }
});
$('#submit').click(function(){
  event.preventDefault();

  let gender = $('input[name="gender"]');
  let checked = false;
 
  for(let i=0; i<gender.length;i++){
      if(gender[i].checked){
          checked = true;
      }
      // console.log(gender[i]);
  }
  // console.log(checked);
  if(!checked){
      // console.log("Hello");
      $('#OP11').text("You have to select atleast one value")
  }

});
});
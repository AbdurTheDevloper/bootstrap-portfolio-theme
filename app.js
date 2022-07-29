let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let textArea = document.getElementById("textArea");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){
   if(fullName.value=='' || email.value=='' || phone.value=='' || textArea.value== ''){
      alert("Leaving any input blank is not acceptable")
      submitBtn.style.backgroundColor = " red";
      fullName.style.borderColor = "red";
      email.style.borderColor = "red";
      phone.style.borderColor = "red";
      textArea.style.borderColor = "red";
   }else{
      alert("SuccessFully Send Your Massege");
      submitBtn.style.backgroundColor = "green";
      fullName.style.borderColor = "green";
      email.style.borderColor = "green";
      phone.style.borderColor = "green";
      textArea.style.borderColor = "green";

      fullName.value = "";
      email.value = "";
      phone.value = "";
      textArea.value = "";
   }

})

//  form controls  class select

let formControle = document.querySelectorAll(".form-control");

  for(var i=0; i<formControle.length; i++){
     formControle[i].addEventListener("click", function(){
     
         if(this.value == ""){
                this.style.borderColor = "red";
         }else{
            this.style.borderColor = 'green'
         }
     })
  };


 

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let textArea = document.getElementById("textArea");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){
   if(fullName.value=='' || email.value=='' || phone.value=='' || textArea.value== ''){
      alert("missing")
      submitBtn.style.backgroundColor = " red";
   }else{
      alert("SuccessFully Send");
      submitBtn.style.backgroundColor = "transfarent";
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


  //  portfolio image selector 

  let image = document.querySelectorAll(".portImg");

  for(var i= 0; i<image.length ; i++){
         image[i].addEventListener("click", function(){
            console.log(11111)
         })
  }


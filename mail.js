function sendEmail(e) {

    console.log("Boton Presionado");

    e.preventDefault();
    var URL = "https://32aplhhu5j.execute-api.us-east-1.amazonaws.com/Prod/mail";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#contactName").val())) {
                      alert ("Name can not less than 2 char");
             return;
         }
    
         if ($("#contactEmail").val()=="") {
             alert ("Please enter your email id");
             return;
         }

         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#contactEmail").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var name = $("#contactName").val();
    var email = $("#contactEmail").val();
    var subject = $("#contactSubject").val();
    var desc = $("#contactMessage").val();


    console.log("Parametro: ", name);
    console.log("Parametro: ", email);
    console.log("Parametro: ", desc);
    console.log("Parametro: ", subject);



    var data = {
       name : name,
       email : email,
       subject: subject,
       desc : desc
     };

    $.ajax({
      type: "POST",
      url : "https://32aplhhu5j.execute-api.us-east-1.amazonaws.com/Prod/mail",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contact-form").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }});
  }

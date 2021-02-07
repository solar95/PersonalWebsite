function counter(){

    var honey = document.getElementById("honeyPot").textContent;

    if(honey == ""){

      console.log("Message Sent!")

      var URL = "https://06lr2lwqd7.execute-api.us-east-1.amazonaws.com/Prod/visitors";
      var resultado;

      $.ajax({
          url: URL,
          type: 'GET',
    
          
      success: function(res) {
          console.log(res);
          resultado = res;
          console.log(resultado);
          visitors.innerText = res.body;        
          },
      error: function () {
          // show an error message
          console.log("LLamada sin Exito Dynamo")
          }});

    }

    else{
      console.log("Mensaje Enviado!")
    }

    


}


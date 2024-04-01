var generateButton=document.querySelector(".generate-button")
var enteredText= document.getElementById("entered-text")
var imageQr=document.getElementById("image-qr")


  generateButton.addEventListener("click",function(){
    if(enteredText.value=="")
    {
      alert("Enter The Url or Text in the Text box")
    }
    else
    {
      imageQr.src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data="+enteredText.value
  }})


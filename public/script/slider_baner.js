 //script for automatic sliding effect start 
 let counter = 1;

 setInterval(function () {
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if (counter > 6) {
         counter = 1;
     }
 }, 3000);

  //script for automatic sliding effect end
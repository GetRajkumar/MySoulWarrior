/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/
// spy and scroll menu boogey
$("#mainMenu ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault()

   // store hash
   var hash = this.hash

   // animate
    var w = window.innerWidth;
   // if(w > 1000){
   $('html, body').animate({   
       scrollTop: $(this.hash).offset().top -50 
     }, 1000, function(){
       window.location.hash = hash
     })
   // }

});

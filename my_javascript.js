//no waiting
console.log("Hello World - I don't like to wait!")



//wait for document.ready
$(document).ready(function() {
 
    console.log('document ready');

    //use the id to create an onclick
    $( "#jslink" ).click(function( event ) {
 
        console.log('Click!!');
 		
 		//don't redirect
        event.preventDefault();
 
    });
 
});


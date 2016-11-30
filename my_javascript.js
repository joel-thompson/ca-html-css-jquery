//no waiting
console.log("Hello World - I don't like to wait!")



//wait for document.ready
$(document).ready(function() {
 
    console.log('document ready');

    //use the id to create an onclick
    $( "#jslink" ).click(function( event ) {
 
        console.log('Click');
 		
 		//don't redirect
        event.preventDefault();
 
    });

    // fades list items inside #right on the page when they are clicked
    $('#right li').click(function() {
    	$(this).fadeOut('slow');
    });

    //brings back the #right list items when clicking #comeback
    $('#comeback').click(function(){
    	$('#right li').fadeIn('slow');
    });
 
});


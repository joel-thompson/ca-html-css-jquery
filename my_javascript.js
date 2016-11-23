window.addEventListener('load', function () {
  console.log('Site loaded with my_javascript.js');
});

window.onload = function() {

	//Get a reference to the link on the page
	// with an id of "mylink"
	var a = document.getElementById("jslink");

	//Set code to run when the link is clicked
	// by assigning a function to "onclick"
	a.onclick = function() {

		console.log('Click!!');

		

		//don't want the link to redirect
		return false;
	}
}
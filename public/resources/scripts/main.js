window.onload = function () {

	/* A function to lazy-load
	 javascript files */

	function loadJS(file) {

		// DOM: Create the script element

		var jsElm = document.createElement("script");

		// set the type attribute

		jsElm.type = "application/javascript";

		// make the script element load file

		jsElm.src = file;

		// finally insert the element to the body element in order to load the script

		document.body.appendChild(jsElm);
	}

	/* Lazy-load necessary scripts */

	loadJS('resources/scripts/jquery.min.js');
	loadJS('resources/scripts/jquery-ui.min.js');
	loadJS('resources/scripts/materialize.min.js');
	loadJS('resources/scripts/sweetalert.js');
	loadJS('resources/scripts/firebase-app.js');
	setTimeout(function () {
		loadJS('resources/scripts/firebase-analytics.js');
		loadJS('resources/scripts/firebase-auth.js');
		loadJS('resources/scripts/firebase-firestore.js');
		loadJS('resources/scripts/firebase-storage.js');
		loadJS('resources/scripts/firebase-performance.js');
		loadJS('resources/scripts/firebase-messaging.js');
		setTimeout(function () {
			loadJS('resources/scripts/firebase-init.js');
			$('.parallax').parallax();
		}, 3000);
	}, 3000);

}
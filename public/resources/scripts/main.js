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

		/* Prepare UI */

		$('.parallax').parallax();
		$('.modal#progressDialogModal').modal({ dismissible: false });

		M.Modal.getInstance(progressDialogModal).open();

		loadJS('resources/scripts/firebase-analytics.js');
		loadJS('resources/scripts/firebase-auth.js');
		loadJS('resources/scripts/firebase-firestore.js');
		loadJS('resources/scripts/firebase-storage.js');
		loadJS('resources/scripts/firebase-performance.js');
		loadJS('resources/scripts/firebase-messaging.js');
		setTimeout(function () {
			loadJS('resources/scripts/firebase-init.js');

			/* Kill UI Blocker */

			M.Modal.getInstance(progressDialogModal).close();

			/* Inject Content (Section 1) */

			$('#s1h1').html('<i class="material-icons left" style="font-size: 1em; color:#FF0000;">error</i>What?');
			$('#s1p1').html('All India Women\'s Conference(AIWC) is a non - profit organisation founded in 1927 registered under Societies Registration Act XXI of 1850. It is a national organisation with one of the largest number of voluntary workers spread across five hundred branches across the country with more than a lakh and a half members.In 1928 the Mysore State Women\'s Conference was established in Bangalore, which changed it\'s name to AIWC Bangalore branch in 1932.');
			$('#s1h2').html('<i class="material-icons left" style="font-size: 1em; color: #FFBB00;">help</i>Why?');
			$('#s1p2').html('Our organisation is dedicated to the upliftment and betterment of the society. Since inception, AIWC has been deeply concerned about the economic, social and legal needs of women and society as whole and modification of laws pertaining dowry, child marriage, etc. The organisation has always adopted participatory approach in the implementation of it\'s programs focusing on women\'s education, health (both physical and mental), capacity building and income generation, etc. through a network of it\'s branches spread across the country.');

			/* Inject Content (Section 2) */

			$('#s2h1').html('<i class="material-icons left" style="font-size: 1em; color:#009900;">history</i>A Brief History');
			$('#s2p1').html('AIWC has, over the years, grown and spread all over India. Members across the country carry on the work zealously with selfless dedication. AIWC is recognised the world over as a premier organisation working for empowerment of women.');
			$('#s2h2').html('<i class="material-icons left" style="font-size: 1em; color: #0000FF;">emoji_objects</i>Our Mission');
			$('#s2p2').html('Work actively for the progress and welfare of women and children. Help women utilize to the fullest the Fundamental Rights conferred on them by the Constitution of India. To work for a society where women are free from all types of violence, especially domestic violence and sexual harassment. To empower women and prepare them for taking up leadership roles.');

			/* Begin Execution */

		}, 3000);
	}, 3000);

}
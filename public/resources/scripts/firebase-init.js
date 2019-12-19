var firebaseConfig = {
	apiKey: "AIzaSyD1Iz_74EZFY0YnYPzTUgP-5ikshIGxp_U",
	authDomain: "aiwcbangalore.firebaseapp.com",
	databaseURL: "https://aiwcbangalore.firebaseio.com",
	projectId: "aiwcbangalore",
	storageBucket: "aiwcbangalore.appspot.com",
	messagingSenderId: "368426264616",
	appId: "1:368426264616:web:a363e8f4888a1286f52d1d",
	measurementId: "G-8T9HR2WRQP"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().useDeviceLanguage();
window.perf = firebase.performance();
window.messaging = firebase.messaging();
window.messaging.usePublicVapidKey("BN9nMIAer_ewk7AwkSPlpMGIE5SBjnV2x5gwhGqXTR2sfd9lvlSuhICcXklPsj76ULTV9qP_HftuvVjxvl4J0SE");
Notification.requestPermission().then((permission) => {
	if (permission === 'granted') {
		// TODO(developer): Retrieve an Instance ID token for use with FCM.
		// ...
	} else {
		console.log('Unable to get permission to notify.');
	}
});
firebaseConfig = null;
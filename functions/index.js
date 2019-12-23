const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

const USERNAME = 'admin'
const PASSWORD = 'admin'
const denyAccess = (res) => {
	res.statusCode = 401;
	res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required');
	res.end('Unauthorized');
}

exports.authorizeAccess = functions.https.onRequest((req, res) => {
	if (typeof req.headers.authorization !== 'string') {
		denyAccess(res);
		return;
	}

	const base64Auth = req.headers.authorization.split(' ')[1];
	if (typeof base64Auth !== 'string') {
		denyAccess(res);
		return;
	}

	const [user, pass] = Buffer.from(base64Auth,
		'base64').toString().split(':');
	if (user !== USERNAME || pass !== PASSWORD) {
		denyAccess(res);
		return;
	}

	db.collection('email_list').orderBy('created_on', 'desc').get().then((querySnapshot) => {
		var csv = "Email Address,Collected On";
		querySnapshot.forEach((doc) => {
			csv += '\n' + doc.data().email + ',' + doc.data().created_on.toDate();
		});
		res.setHeader('Content-disposition', 'attachment; filename=aiwcbangalore_emails_' + new Date() + '.csv');
		res.set('Content-Type', 'text/csv');
		res.status(200).send(csv);
		res.end();
		return true;
	}).catch((error) => {
		console.error(error);
	});

});
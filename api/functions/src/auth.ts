import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

export const signUpHandler = functions.auth.user().onCreate(user => {
	const newUser = {
		email: user.email,
		name: user.displayName,
		userId: user.uid,
	};
	db.collection('users').add(newUser);
});

export const deleteAccountHandler = functions.auth.user().onDelete(user => {
	db.collection('missions')
		.where('userId', '==', user.uid)
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				doc.ref.delete();
			});
		});

	db.collection('heores')
		.where('userId', '==', user.uid)
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				doc.ref.delete();
			});
		});

	db.collection('users')
		.doc(user.uid)
		.delete();
});

import * as functions from 'firebase-functions';

export function getSignUpHandler(db: FirebaseFirestore.Firestore) {
	return functions.auth.user().onCreate(user => {
		const newUser = {
			email: user.email,
			name: user.displayName,
			userId: user.uid,
		};
		db.collection('users')
			.add(newUser)
			.catch(error => 'some error');
	});
}

export function getDeleteAccountHandler(db: FirebaseFirestore.Firestore) {
	return functions.auth.user().onDelete(user => {
		db.collection('missions')
			.where('userId', '==', user.uid)
			.get()
			.then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					void doc.ref.delete();
				});
			})
			.catch(error => 'some error');

		db.collection('heores')
			.where('userId', '==', user.uid)
			.get()
			.then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					void doc.ref.delete();
				});
			})
			.catch(error => 'some error');

		db.collection('users')
			.doc(user.uid)
			.delete()
			.catch(error => 'some error');
	});
}

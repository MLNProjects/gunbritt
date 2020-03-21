import * as functions from 'firebase-functions';
import validateFirebaseIdToken from './middleware/validateFirebaseIdToken';
import { Application } from 'express';

export function getUsersRoute(app: Application, db: FirebaseFirestore.Firestore) {
	//update user
	app.put('/users', validateFirebaseIdToken, async (req: any, res: any) => {
		try {
			const fieldNames = ['name', 'phoneNumber', 'description'];

			const updatedFields: any = {};
			fieldNames.forEach(fn => {
				if (req.body[fn]) {
					updatedFields[fn] = req.body[fn];
				}
			});

			const userRef = db.collection('users').doc(req.user);

			userRef
				.update(updatedFields)
				.then(res.status(201).send(`UpdatedUser: ${req.user}`))
				.catch(error => res.status(400).send(`Couldnt update user!!!`));
		} catch (error) {
			res.status(400).send(`Couldnt update user!!!`);
		}
	});

	return functions.https.onRequest(app);
}

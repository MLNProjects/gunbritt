import * as express from 'express';
const router = express.Router();
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

//update user

router.put('/', async (req: any, res: any) => {
	try {
		let fieldNames = ['name', 'phoneNumber', 'description'];

		let updatedFields: any;
		fieldNames.forEach(fn => {
			if (req.body[fn]) {
				updatedFields[fn] = req.body[fn];
			}
		});

		let userRef = db.collection('users').doc(req.user);

		userRef.update(updatedFields);
		res.status(201).send(`UpdatedUser: ${req.user}`);
	} catch (error) {
		res.status(400).send(`Couldnt update user!!!`);
	}
});

// // // Create new user
// router.post('/', async (req, res) => {
// 	try {
// 		const user: User = {
// 			name: req.body['name'],
// 			password: req.body['password'],
// 			email: req.body['email'],
// 			phoneNumber: req.body['phoneNumber'],
// 		};

// 		const newDoc = await db.collection('users').add(user);
// 		res.status(201).send(`Created a new user: ${newDoc.id}`);
// 	} catch (error) {
// 		res.status(400).send(
// 			`User should cointain firstName, lastName, email, areaNumber, department, id and contactNumber!!!`
// 		);
// 	}
// });

export default router;

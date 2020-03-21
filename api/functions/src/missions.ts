import * as express from 'express';
const router = express.Router();
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { firestore } from 'firebase';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

interface Mission {
	userId?: string;
	createdAt: firestore.Timestamp;
	description: boolean;
	location: firestore.GeoPoint;
	isActive: boolean;
}

router.get('/', async (req, res) => {
	await db
		.collection('missions')
		.get()
		.then(snapshot => {
			if (snapshot.empty) {
				console.log('No matching documents.');
				return;
			}
			const missions: any[] = [];
			snapshot.forEach(doc => {
				missions.push(doc.data());
			});
			res.status(200).send(missions);
		})
		.catch(err => {
			console.log('Error getting documents', err);
		});
});

// Create new mission
router.post('/', async (req: any, res) => {
	try {
		const mission: Mission = {
			userId: req.user,
			location: new firestore.GeoPoint(req.body['location']['latitude'], req.body['location']['longitude']),
			description: req.body['description'],
			isActive: true,
			createdAt: firestore.Timestamp.now(),
		};
		const newDoc = await db.collection('missions').add(mission);
		res.status(201).send(`Created a new mission: ${newDoc.id}`);
	} catch (error) {
		res.status(400).send(`Mission should contain location, description`);
	}
});

export default router;

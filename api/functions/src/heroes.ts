import { firestore } from 'firebase';
import * as functions from 'firebase-functions';
import validateFirebaseIdToken from './middleware/validateFirebaseIdToken';
import { Application } from 'express';

interface Hero {
	userId?: string;
	radius: Number;
	createdAt: firestore.Timestamp;
	description: string;
	location: firestore.GeoPoint;
	isActive: boolean;
}

export function getHeroesRoute(app: Application, db: FirebaseFirestore.Firestore) {
	app.get('/', async (req, res) => {
		await db
			.collection('heroes')
			.get()
			.then(snapshot => {
				if (snapshot.empty) {
					console.log('No matching documents.');
					return;
				}
				const heroes: any[] = [];
				snapshot.forEach(doc => {
					heroes.push(doc.data());
				});
				res.status(200).send(heroes);
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});
	});

	// Create new hero
	app.post('/', validateFirebaseIdToken, async (req: any, res) => {
		try {
			const hero: Hero = {
				userId: req.user,
				radius: req.body['radius'],
				location: new firestore.GeoPoint(req.body['location']['latitude'], req.body['location']['longitude']),
				description: req.body['description'],
				isActive: true,
				createdAt: firestore.Timestamp.now(),
			};
			const newDoc = await db.collection('heroes').add(hero);
			res.status(201).send(`Created a new hero: ${newDoc.id}`);
		} catch (error) {
			res.status(400).send(`Hero should contain location, description`);
		}
	});

	return functions.https.onRequest(app);
}

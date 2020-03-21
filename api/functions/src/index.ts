//import libraries
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { getUsersRoute } from './users';
import { getHeroesRoute } from './heroes';
import { getMissionsRoute } from './missions';
import * as admin from 'firebase-admin';
import { getSignUpHandler, getDeleteAccountHandler } from './auth';

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

//initialize express server
const app = express();

//apply middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

export const signUp = getSignUpHandler(db);

export const deleteAccount = getDeleteAccountHandler(db);

export const users = getUsersRoute(app, db);

export const heroes = getHeroesRoute(app, db);

export const missions = getMissionsRoute(app, db);

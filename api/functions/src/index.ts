//import libraries
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import validateFirebaseIdToken from './validateFirebaseIdToken';
import users from './users';
import { signUpHandler, deleteAccountHandler } from './auth';

//initialize firebase inorder to access its services
//initialize express server
const app = express();

//add the path to receive request and set json as bodyParser to process the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', validateFirebaseIdToken, users);

app.use(cors({ origin: true }));

export const api = functions.https.onRequest(app);

export const signUp = signUpHandler;

export const deleteAccount = deleteAccountHandler;

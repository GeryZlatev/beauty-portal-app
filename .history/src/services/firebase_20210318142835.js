import firebase from 'firebase';

const config = {
apiKey: "AIzaSyA67_Qq13Qp0WQCqhsigdOmGyk5m3TMVV0",
authDomain: "beauty-portal-85a4b.firebaseapp.com",
databaseURL: "ADD-YOUR-DETAILS-HERE"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
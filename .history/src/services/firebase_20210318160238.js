import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCkMlcM3YkA2kohpOt6Rp-wJ_6TaNZdEkg",
    authDomain: "react-exam-d8178.firebaseapp.com",
    databaseURL: "https://react-exam-d8178-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-exam-d8178",
    storageBucket: "react-exam-d8178.appspot.com",
    messagingSenderId: "154753023232",
    appId: "1:154753023232:web:281fb52770f4c6f36747e5"
};
  // Initialize Firebase
Firebase.initializeApp(firebaseConfig);
export default firebase;
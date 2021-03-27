import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/storage';
const DB = firebase.firestore();
const STORAGE = firebase.storage();

export const addSpecialist = (specialist) => {
    const { name, practice, city, phone } = specialist;
    return DB.collection('specialist')
            .add({
            name,
            practice,
            city,
            phone
    })
}

export const addSpecialistImage = (image) => {
    
}
import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/storage';
const DB = firebase.firestore();
const STORAGE = firebase.storage();

export const addSpecialist = (specialist) => {
    const { name, practice, city, phone, image } = specialist;
    return DB.collection('specialist')
            .add({
            name,
            practice,
            city,
            phone,
            image
    })
}

export const addSpecialistImage = (image) => {
    const storageRef = STORAGE.ref();
    const imageRef = storageRef.child('specialists');
    return imageRef.put(image);
    
}
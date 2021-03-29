import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/storage';
const DB = firebase.firestore();
const STORAGE = firebase.storage();

export const addSpecialist = (specialist) => {
    const { name, practice, city, phone, image, bio } = specialist;
    return DB.collection('specialist')
            .add({
            name,
            practice,
            city,
            phone,
            image,
            bio
    })
}

export const getAll = (catalogue) => {
    return DB.collection(catalogue)
        .get()
}

export const getProcedure = (procedureId) => {
    return
}


export const addLikedProcedures = (userId) => {
    return;
}

export const getMoreDetails = (itemId, catalogue) => {
    DB.collection(catalogue)
        .doc(itemId)
        .get()
    
}
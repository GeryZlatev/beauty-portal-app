import firebase from './firebase';
const DB = firebase.firestore();

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
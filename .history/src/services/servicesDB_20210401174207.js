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

export const askQuestion = (catalogue, id, data) => {
    return DB.collection(catalogue)
        .doc(id)
        .get()
        .then((res) => {
            const doctor = { ...res.data() };
            const userId = JSON.parse(localStorage.getItem('user'));
            const questions = doctor.questions;
            questions.push(data);
            return DB.collection(catalogue)
            .doc(id)
            .set(doctor)
        })
    .catch (err => console.log(err))
}

export const getProcedureLikes = (procedureId, catalogue) => {
    return DB.collection(catalogue)
        .doc(procedureId)
        .get()
        .then(res => {
            const procedure = { ...res.data() };
            const userId = JSON.parse(localStorage.getItem('user'));
            const isLiked = procedure.likes.find(x => x === userId);
            if (!isLiked){
                procedure.likes.push(userId) 
                return DB.collection(catalogue)
                .doc(procedureId)
                .set(procedure)  
            } else {
                return {message: "You have already liked it!"}
            }
        })
    .catch(err => console.log(err))
}

export const dislikeProcedure = (procedureId, catalogue, userId) => {
    return DB.collection(catalogue)
    .doc
}


export const addLikedProcedures = (userId) => {
    return;
}

export const getMoreDetails = (itemId, catalogue) => {
    return DB.collection(catalogue)
        .doc(itemId)
        .get()
        .then((res) => console.log(res))
    
}
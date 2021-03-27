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

// export const addSpecialistImage = (image) => {
//     const storageRef = STORAGE.ref();
//     const imageRef = storageRef.child('specialists');
//     return imageRef.put(image);
    
// }

export const getAllSpecialists = () => {
    return DB.collection('specialist')
        .get()

}
    //     .then((res) => {
    //     res
    //     .docs
    //     .map((specialist) => {
    //         return {id: specialist.id, ...specialist.data()}
    //     })
            
    //     })
    // .catch((err) => console.log(err))

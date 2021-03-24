import { auth } from './services/firebase';

const handleLogin = () => {
    clearErrors();
    auth
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
        switch (err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
            setEmailErr(err.message);
            break;
        case 'auth/wrong-password':
            setPasswordErr(err.message);
            break;
    }
    })
}

const handleSignup = () => {
    clearErrors()
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
        setUser(res.user.uid)
        })
    .catch(err => {
        switch (err.code) {
        case 'auth/email-already-in-use':
        case 'auth/invalid-email':
            setEmailErr(err.message);
            break;
        case 'auth/weak-password':
            setPasswordErr(err.message);
            break;
        }
    })
}

const handleLogout = () => {
    auth.signOut()
}

const authListener = () => {
    auth
    .onAuthStateChanged(user => {
        if (user) {
        clearInputs()
        setUser(user)
        } else {
        setUser('')
    }
    })
}

export {
    handleLogin,
    handleSignup,
    handleLogout,
    authListener
}
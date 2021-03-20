import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../services/firebase';
const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        })
        
        return unsubscribe;
    }, [])


    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
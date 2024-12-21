import { createContext, useEffect, useState } from "react";
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const passwordSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const passwordSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curUser) => {
            setUser(curUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [auth])

    const authValue = {
        loading,
        user,
        passwordSignUp,
        passwordSignIn,
        logOut,

    };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;
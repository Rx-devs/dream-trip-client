import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/Firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();

    // register new user
    const registerUser = (email, password, name, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // registration successfull.
                setAuthError('');

                // change displayName
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to db 
                saveUserToDB(email, name, 'POST');

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                });
                navigate('/');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // logIn User 
    const logInUser = (email, password, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setLoading(false));
    }

    // Google Sign In
    const signInWithGoogle = (location, navigate) => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // save to db
                saveUserToDB(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setLoading(false));
    }

    // Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                })
            }
            else {
                // user is signed out
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    useEffect(() => {
        fetch(`https://young-castle-89002.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);
    
    // User Log Out
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful
        })
            .catch((error) => { })
            .finally(() => setLoading(false));
    }

    // send user data to database
    const saveUserToDB = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`https://young-castle-89002.herokuapp.com/users`, {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)  
        })
        .then()
    }
    return {
        user,
        admin,
        token,
        registerUser,
        logInUser,
        signInWithGoogle,
        logOut,
        loading,
        authError
    }
};

export default useFirebase;
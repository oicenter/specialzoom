import React from 'react';

import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

function signIn() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        console.log(result);

        if (!user) {
            return Promise.reject({message: 'no user'});
        }
        
        const userDocRef = db.collection('users').doc(user.uid);
        return userDocRef.set({
            name: user.displayName,
            zoomToken: null,
        }, {merge: true});
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.error(error);
        
        // ...
    });
}

function logout() {
    firebase.auth().signOut();
}

function Login() {
    const [user, setUser] = React.useState<firebase.User | null>(null);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            setUser(user);
        });
    }, []);
    return (
        <div>
            {user ? (
                <p>Welcome <b>{user.displayName}</b>. <button onClick={logout}>Log out</button></p>
            ) : (
                <button onClick={signIn}>Sign in with Google</button>
            )}
        </div>
    )
}

export default Login;
import React from 'react';

import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential?.accessToken;
        // The signed-in user info.
        var user = result.user;
        
        console.log(result)
        
        
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
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
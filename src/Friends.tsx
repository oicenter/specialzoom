import React from 'react';

import firebase from './firebase';
const db = firebase.firestore();


function Friends() {
    const [user, setUser] = React.useState<firebase.User | null>(null);
    const [friends, setFriends] = React.useState<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]>([]);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            setUser(user);
            console.log('logged in', user);
            
        });
    }, []);
    React.useEffect(() => {
        console.log('fetching friends for ' + user?.uid);
        
        if (user) {
            db.collection(`users/${user.uid}/friends`).get().then(querySnapshot => {
                console.log(querySnapshot);

                setFriends(querySnapshot.docs);
            })
        } else {
            setFriends([]);
        }
        
    }, [user?.uid]);
    console.log(friends);
    
    return (
        <div>
            <h3>Friends</h3>
            <ul>
                {friends.map(user => (
                    <li key={user.id}>{user.data().name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Friends;
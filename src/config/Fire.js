import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCRD_HPIgdcqdb5wVUfEmrWpOqv2SGxsYw",
    authDomain: "diveworld-inventory.firebaseapp.com",
    databaseURL: "https://diveworld-inventory.firebaseio.com",
    projectId: "diveworld-inventory",
    storageBucket: "diveworld-inventory.appspot.com",
    messagingSenderId: "41919790367",
    appId: "1:41919790367:web:b7d7a087893206cebc042a"
};
const fire = firebase.initializeApp(config);

export default fire;

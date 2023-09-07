
import { initializeApp } from 'firebase/app';
// Importa los módulos que desees utilizar, como Firestore, Authentication, etc.

const firebaseConfig = {
    apiKey: "AIzaSyBxYln5XKY4O_fldKY0hUis8zYN-JoLEks",
    authDomain: "inmobidik-a702b.firebaseapp.com",
    projectId: "inmobidik-a702b",
    storageBucket: "inmobidik-a702b.appspot.com",
    messagingSenderId: "836683761172",
    appId: "1:836683761172:web:2072b76f99bbedbb3a0901",
    measurementId: "G-KTFF2S3N9B"
};

const app = initializeApp(firebaseConfig);

export default app;
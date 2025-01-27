import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBHhmsKYtAUzzdpAN-COxsOlWp9mszuQwM",
  authDomain: "morent-257fc.firebaseapp.com",
  projectId: "morent-257fc",
  storageBucket: "morent-257fc.appspot.com",
  messagingSenderId: "854737597842",
  appId: "1:854737597842:web:3becc2fe3c1303797cbd4b",
  measurementId: "G-RTBN06VF4P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
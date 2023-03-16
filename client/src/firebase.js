import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    `AIzaSyD--iblomv-wsPF778-Kj3ixJR-Rsft0po`,
  authDomain:
    import.meta.env.VITE_AUTH_DOMAIN ||
    `auth-development-97fe9.firebaseapp.com`,
  projectId: import.meta.env.VITE_PROJECT_ID || `auth-development-97fe9`,
  storageBucket:
    import.meta.env.VITE_STORAGE_BUCKET || `auth-development-97fe9.appspot.com`,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID || `59341879917`,
  appId:
    import.meta.env.VITE_APP_ID || `1:59341879917:web:d464e3a71ab77055519d64`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

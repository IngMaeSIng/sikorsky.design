import { initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, type Database } from "firebase/database";

// We need to handle both SSR and client-side
let firebaseApp: FirebaseApp | null = null;
let firebaseDatabase: Database | null = null;

function getFirebaseConfig() {
  // Try to get config from environment variables
  // These are the standard PUBLIC_FIREBASE_* variables
  return {
    apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.PUBLIC_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.PUBLIC_FIREBASE_APP_ID
  };
}

function initializeFirebase() {
  if (!firebaseApp) {
    const config = getFirebaseConfig();

    // Only initialize if we have a valid config
    if (config.apiKey && config.databaseURL) {
      firebaseApp = initializeApp(config);
      firebaseDatabase = getDatabase(firebaseApp);
    } else {
      console.warn("[@sikorsky/astro-theme] Firebase not configured. " + "Set PUBLIC_FIREBASE_* environment variables to enable the like system.");
    }
  }
  return { app: firebaseApp, database: firebaseDatabase };
}

// Initialize on module load
const firebase = initializeFirebase();

export const app = firebase.app;
export const database = firebase.database;

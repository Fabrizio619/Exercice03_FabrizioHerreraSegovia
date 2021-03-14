import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmvduajDhL68xQPkVCbPfCF7lVwAzhjLM",
  authDomain: "pvt-h21-fabrizio.firebaseapp.com",
  databaseURL: "https://pvt-h21-fabrizio-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-fabrizio",
  storageBucket: "pvt-h21-fabrizio.appspot.com",
  messagingSenderId: "818019251943",
  appId: "1:818019251943:web:f3d9d2e289f10a5722d442",
  measurementId: "G-4G9HLKMYDX"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
 const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;

//a mettre dans liste produits

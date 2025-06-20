// Importa o núcleo do Firebase
import { initializeApp } from "firebase/app";
// Importa os serviços que você realmente vai usar
import { getDatabase } from "firebase/database";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcXsn2UJZmP1GUuBFqFCsrzekun0xcCE0",
  authDomain: "ecommerce-react-ee407.firebaseapp.com",
  projectId: "ecommerce-react-ee407",
  storageBucket: "ecommerce-react-ee407.appspot.com",
  messagingSenderId: "813234865480",
  appId: "1:813234865480:web:e8e2da2fe476535cbd9f7d",
  measurementId: "G-664Y79Z4DG"
};

// Inicializa o Firebase App
const app = initializeApp(firebaseConfig);

// Exporta os serviços que você vai usar no React
export const database = getDatabase(app);


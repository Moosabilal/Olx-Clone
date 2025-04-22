
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"; 
import {getStorage} from 'firebase/storage'
import { collection, getDocs, getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDmNuScmarzDdt-KuzGss_sj9Yb72OkkBY",
  authDomain: "olx-clone-c0391.firebaseapp.com",
  databaseURL: "https://olx-clone-c0391-default-rtdb.firebaseio.com",
  projectId: "olx-clone-c0391",
  storageBucket: "olx-clone-c0391.firebasestorage.app",
  messagingSenderId: "722211915562",
  appId: "1:722211915562:web:ef7864c6936dcee6244053"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const fireStore = getFirestore(app);


const fetchFromFirestore = async () => {
    try {
      const productsCollection = collection(fireStore, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) 
      console.log("Fetched products from Firestore:", productList);
      return productList;
    } catch (error) {
      console.error("Error fetching products from Firestore:", error);
      return [];
    }
  };
  

  export {
    auth,
    provider,
    storage,
    fireStore,
    fetchFromFirestore
  }


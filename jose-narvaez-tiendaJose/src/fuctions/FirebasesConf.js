
import { initializeApp } from "@firebase/app";
import { getFirestore , collection, doc, getDocs,getDoc, where, query, addDoc } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtA8nqu_TXPvZIQ9mnMb_tMU8EpMeqGdI",
  authDomain: "cursoreact-47391.firebaseapp.com",
  projectId: "cursoreact-47391",
  storageBucket: "cursoreact-47391.appspot.com",
  messagingSenderId: "665401680935",
  appId: "1:665401680935:web:a6f3e1a9c29895aa51da02"
};


const app = initializeApp(firebaseConfig);


export const  getAllProduct = () => {
  const dbFirebases = getFirestore(app);
  const queryAll = collection(dbFirebases, 'product')
  return getDocs(queryAll)
    .then((documents) => documents.docs.map(product => ({ id: product.id, ...product.data() })))
    .catch((err) => console.log(err));
}


export const  getProductById = (id) => {
  const dbFirebases = getFirestore();
  const queryDocument = doc(dbFirebases, 'product', id)
  return getDoc(queryDocument)
    .then((document) => ({ id: document.id, ...document.data() }))
    .catch((err) => console.log(err));
}

export const  getProductByCategory = (categoria) => {
  const dbFirebases = getFirestore();
  const queryCollection = collection(dbFirebases, 'product')
  const queryFilter = query(queryCollection, where('categoria', '==', categoria))
  return getDocs(queryFilter)
    .then((documents) => documents.docs.map(product => ({ id: product.id, ...product.data() })))
    .catch((err) => console.log(err));
}

export const  saveOrder = (order) => {
  const dbFirebases = getFirestore();
  const ordersCollection = collection(dbFirebases, 'orders');
  return addDoc(ordersCollection,order);
}
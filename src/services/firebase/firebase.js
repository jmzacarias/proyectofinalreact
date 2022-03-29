import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDocs, collection, query, where, doc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const getProducts =(categoryId)=>{
  return new Promise((resolve,reject)=>{
      const collectionRef = categoryId ? 
      query(collection(db, 'productos'),where('category', '==', categoryId)):
      collection(db, 'productos')
    getDocs(collectionRef).then(res=>{
      const products = res.docs.map(doc=>{
        return {id: doc.id, ...doc.data()}
      })
      resolve(products)
    }).catch((error)=>{
      reject({error: error})
    })
  })
}

export const getProductById = (id)=>{
  return new Promise((resolve,reject)=>{
    const docRef = doc(db, 'productos', id);

        getDoc(docRef).then(res=>{
            const product = {id: res.id, ...res.data()}
            resolve(product)
        }).catch((error)=>{
          reject(`Error obteniendo detalle de objeto: ${error}`)
        })
  })
}
export const getCategories = ()=>{
  return new Promise((resolve,reject)=>{
    getDocs(collection(db, 'categories')).then(res => {
  const categories = res.docs.map(cat=>{
      return { id: cat.id, ...cat.data()}
  })
  resolve(categories)
}).catch((error)=>{
  reject(`Error obteniendo categorias: ${error}`)
})
})
}


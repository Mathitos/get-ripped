import { initializeApp } from 'firebase/app'
import { addDoc, getFirestore } from 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'
import { IRoutine } from '../types'

const firebaseConfig = {
  apiKey: 'AIzaSyB04DESfgHT_zMAOmBBFhwrirujOdfbtf0',
  authDomain: 'get-ripped-c79f1.firebaseapp.com',
  projectId: 'get-ripped-c79f1',
  storageBucket: 'get-ripped-c79f1.appspot.com',
  messagingSenderId: '485268575681',
  appId: '1:485268575681:web:67774ff0909a8b1c7ccb40',
}
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const fetchRoutines = async (): Promise<Array<IRoutine>> => {
  return await getDocs(collection(db, 'routines')).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as IRoutine))
  })
}

const updateRoutine = async (routine: IRoutine) => {
  try {
    const docRef = await addDoc(collection(db, 'routines'), {
      routine,
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

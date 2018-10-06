import * as firebase from 'firebase';
 const firebaseConfig = {
  apiKey: "AIzaSyAiI6Iloa9Pp_VdU3rRMcdfOlLpx26C2MI",
  authDomain: "bookshare-80b74.firebaseapp.com",
  databaseURL: "https://bookshare-80b74.firebaseio.com",
  projectId: "bookshare-80b74",
  storageBucket: "bookshare-80b74.appspot.com",
  messagingSenderId: "469942000623"
  };
  export const firebaseApp=firebase.initializeApp(firebaseConfig);
  export const db=firebase.database();
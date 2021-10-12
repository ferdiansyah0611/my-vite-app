import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


const firebaseConfig = {
  apiKey: import.meta.env.FIRE_APIKEY,
  authDomain: import.meta.env.FIRE_AUTHDOMAIN,
  projectId: import.meta.env.FIRE_PROJECTID,
  storageBucket: import.meta.env.FIRE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.FIRE_SENDERID,
  appId: import.meta.env.FIRE_APPID
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

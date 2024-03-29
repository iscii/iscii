import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

// import { initializeApp } from "firebase/app";

// const config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
// const app = initializeApp(config);


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

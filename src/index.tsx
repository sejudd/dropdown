import React from 'react';
import ReactDOM from 'react-dom/client';
import '@aranda/aranda.icons/lib/aranda-icon.css';
import { StylesProvider } from "@aranda/aranda.ui";
import App from './App';
import MyComponent from "./Prueba"
import './index.css'


const root = ReactDOM.createRoot( 
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StylesProvider product="ADM">
      <App />
    </StylesProvider>
    <br />
    
    
  </React.StrictMode>
);



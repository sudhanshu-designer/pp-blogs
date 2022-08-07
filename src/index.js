import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FavouritesContextProvider } from './store/FavouritesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
<FavouritesContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavouritesContextProvider>
  </React.StrictMode>
  

);

reportWebVitals();

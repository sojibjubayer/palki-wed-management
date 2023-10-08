import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Routers.jsx';
import AuthProvider from './provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles



AOS.init(); // Initialize AOS





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

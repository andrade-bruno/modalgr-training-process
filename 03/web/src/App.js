import React from 'react';

import AppRoutes from 'routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />

      <ToastContainer
        position='top-right'
        autoClose={2500}
        closeButton={false}
        hideProgressBar={false}
        rtl={false}
        draggable
        theme='dark'
      />
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import Path from './Routes';

const App= () => (

    <>
      <React.StrictMode>
          <Path />
      </React.StrictMode>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
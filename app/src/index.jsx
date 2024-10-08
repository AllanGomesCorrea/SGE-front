import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'

const App= () => (

    <>
      <React.StrictMode>
          <Home />
      </React.StrictMode>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
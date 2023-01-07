import React from 'react';
import ReactDOM from 'react-dom/client';
import CopyCatContainer from './Containers/CopyCatContainer'


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <CopyCatContainer />
  </React.StrictMode>
);


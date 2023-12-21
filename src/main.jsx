import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyComponent from './MyComponent.jsx';


const BackgroundComponent = () => {
  return (
    <div className=" fixed object-cover  overflow-hidden top-0 left-0 w-screen h-screen">
       <MyComponent width={1600} height={1000} step={25} />
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundComponent/>
    <App />
  </React.StrictMode>,
)

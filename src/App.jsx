import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './MainContent';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="flex">
    
      <div className='sm:hidden xxs:hidden xs:hidden md:hidden lg:flex fixed'><Sidebar /></div>

    
      <div className="flex-1 lg:pl-48">
        <MainContent />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

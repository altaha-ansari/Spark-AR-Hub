import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import EffectsTabsDisplay from './components/Dashboard/EffectsTabsDisplay';
import UploadNew from './components/UploadNew';


function App() {
  return (<>
  <NavigationBar/>
  <UploadNew/>
  <EffectsTabsDisplay/>  
    </>);
}

export default App;

import React from 'react';
import Home from './components/task0'; 
import './App.css';
import Menu from './components/menu/menu';
import Congratcard from './components/task2';
import SuperOverLeague from './components/task3';
import SocialButtons from './components/task4';
import Notification from './components/task5';
import Counter from './components/task9/task9';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path='/home'  element={<Home/>}/>
        <Route path='/task2' element={<Congratcard/>}/>
        <Route path='/task3' element={<SuperOverLeague/>}/>
        <Route path='/task4' element={<SocialButtons/>}/>
        <Route path='/task5' element={<Notification/>}/>

        <Route path='/task9' element={<Counter/>}/>
        
        


        
        

      </Routes>
      </BrowserRouter> 
      {/* <button variant="warning">warning</button>{''} */}


      
    </>
  );
}

export default App;

import React from 'react';
import FetchAllItems from '../Components/Products'; 
import CountdownTimer from '../Components/Timer';
import Todays from '../Components/Todays';
import ViewAll from '../Components/Viewallproducts';


function App() {
  return (
    <>
      <Todays/>
      <CountdownTimer/>
      <FetchAllItems /> 
      <ViewAll/>
    </>
  );
}


export default App;

import FetchAllItems from '../Components/Products';
import CountdownTimer from '../Components/Timer';
import Today from '../Components/Today';
import ViewAll from '../Components/Viewallproducts';


function Home() {
  return (
    <>
      <Today/>
      <CountdownTimer/>
      <FetchAllItems /> 
      <ViewAll/>
    </>
  );
}


export default Home;

import { useEffect } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import { useSelector,  } from "react-redux";
import axios from 'axios';
// import { getAllData } from './features/gatewayOptimizerSlice';
// import { useSelector } from "react-redux";
function App() {
// console.log(getAllData);
//   const dispatch = useDispatch();
//   const data = useSelector((state) => {
//     console.log("../state",state.gitUser);
//     return state.app;
//   })

const opti = useSelector((state) => {
  console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
  return state.gatewayOptimizer.OptimizerId;
});
const gate = useSelector((state) => {
  console.log("Graph        G", state.gatewayOptimizer.GatewayId);
  return state.gatewayOptimizer.GatewayId;
});


// useEffect(()=>{
//   async function hello(){
//     const res = await axios.get('http://192.168.1.9:8081');
//     console.log(res);
//   }
//   hello();
// })
  return (
    <>
      <div className='main'>
       <Cards/>
        {/* <button onClick={()=>dispatch(getAllData())}>get github users</button> */}
      </div>
    </>
  );
}

export default App;

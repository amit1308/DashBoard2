import './App.css'
import Cards from './components/Cards/Cards.jsx';
import { useSelector, useDispatch } from "react-redux";
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

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
// const [client, setClient] = useState(null);
// const [texts, setText] = useState([])

// useDispatch()(updateClient(client)); 

// useEffect(() => {
//   if (!client) {
//     const localclient = mqtt.connect("mqtt://localhost:1884");
//     localclient.on("connect", () => {
//       console.log("Connect");
      
//     }) 
//     setClient(localclient);
//   }
//   else {
//     client.subscribe("myTopic", (err) => {
//       if (err) { 
//         console.log("Error", err);
//       } else {
//         console.log("Subscribed myTopic");
//       }
//     })
//     // client.on("message", (topic, message) => {
//       //   setText(prev=>[...prev,message.toString()])
//     //   // console.log(topic, message.toString());
//     // })
//     // console.log(client);
//   }
// }, [client])
// function publishSomething() {
//   if (client && client.connected) {
//     client.publish("myTopic", "Message sent to the subscriber");
//   } else {
//     console.log("Not connected to mqtt");
//   }
// }

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

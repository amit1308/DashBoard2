import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./Card.css";
// import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Graph() {
  const [updatedOptimizer, setupdatedOptimizer] = useState([]);

  // const getData = ()=>{

  //   // const data = {opti,gate};
  //   axios.post("http://13.53.205.103/getGraphData", data)
  //   .then((response)=>{
  //     console.log("what is ",response);
  //     setupdatedOptimizer(response);
  //   })
  // }  

  const gate = useSelector((state) => {
    console.log("Graph        G", state.gatewayOptimizer.GatewayId);
    return state.gatewayOptimizer.GatewayId;
  });
  
  const opti = useSelector((state) => {
    console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
    return state.gatewayOptimizer.OptimizerId;
  });
  const [data, setData] = useState({
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "Room Temp.",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "tranparent",
        borderColor: "green",
        // tension:0.4,
        fill: true,
        pointStyle: false,
        // pointBorderColor:'blue',
        // pointBackgroundColor:'#fff',
        showLine: true,
      },
      {
        label: "Coil Temp.",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "tranparent",
        borderColor: "red",
        // tension:0.4,
        fill: false,
        pointStyle: false,
        // pointBorderColor:'blue',
        // pointBackgroundColor:'#fff',
        showLine: true,
      },
      {
        label: "Humidity",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "tranparent",
        borderColor: "black",
        // tension:0.4,
        fill: false,
        pointStyle: false,
        // pointBorderColor:'blue',
        // pointBackgroundColor:'#fff',
        showLine: true,
      },
    ],
  });

  useEffect(() => {
    if(!opti || !gate){
      setData({
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        datasets: [
          {
            label: "Room Temp.",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: "tranparent",
            borderColor: "green",
            // tension:0.4,
            fill: true,
            pointStyle: false,
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine: true,
          },
          {
            label: "Coil Temp.",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: "tranparent",
            borderColor: "red",
            // tension:0.4,
            fill: false,
            pointStyle: false,
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine: true,
          },
          {
            label: "Humidity",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: "tranparent",
            borderColor: "black",
            // tension:0.4,
            fill: false,
            pointStyle: false,
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine: true,
          },
        ],
      })
      return
    }
    const roomTemp = [];
    const coilTemp = [];
    const humidity = [];
    const labelss = [];
    const graphData = async () => {
      const response = await axios.post("http://44.211.198.14/getGraphData", {
        GatewayId: gate,
        OptimizerId: opti,
      });
      setupdatedOptimizer(response.data);
      response.data.map((item, index) => {
        roomTemp.push(item.RoomTemperature);
        coilTemp.push(item.CoilTemperature);
        humidity.push(item["Humidity(%)"]);
        labelss.push("");
      });

      setData({
        labels: [...labelss],
        datasets: [
          {
            label: "Room Temp.",
            data: [...roomTemp],
            borderColor: "green",
            // backgroundColor: "tranparent",
            tension: 0.4,
            fill: false,
            pointStyle: false,
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine: true,
          },
          {
            label: "Coil Temp.",
            data: [...coilTemp],
            backgroundColor: "tranparent",
            borderColor: "red",
            tension: 0.4,
            fill: false,
            pointStyle: false,
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine: true,
          },
          {
            label: "Humidity",
            data: [...humidity],
            backgroundColor: "tranparent",
            borderColor: "yellow",
            tension: 0.4,
            fill: false,
            pointStyle: false,
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine: true,
          },
        ],
      });
      console.log("what data   ", response.data);
    };
    graphData();
  }, [opti]);
// }, [opti,gate]);

  // async function RecievedData (OptimizerId,GatewayId){
  //     const response = await axios.post(
  //       "http://16.170.208.48/getGraphData",{
  //         GatewayId,
  //         OimizerIdpt,
  //       }
  //     );
  //     console.log(response.data);
  //   }

  // useEffect(() => {
  //   const arr = [];

  //   fetch("https://dummyjson.com/carts")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       json.carts.map((item, index) => {
  //         console.log("json", item.userId);
  //         arr.push(item.userId);
  //       });
  //     });
  //   console.log(arr);
  // }, []);

  const[width, setWidth] = useState(
    "75%"
  )
  console.log("Window size",window.innerHeight);
  useEffect(()=>{
    if(window.screen.width > 310 & window.screen.width<500){
      setWidth("70%")
    }
    if(window.screen.width > 650 & window.screen.width<800){
      setWidth("40%")
    }
    if(window.screen.width > 900 & window.screen.width<1050){
      setWidth("30%")
    }
    if(window.screen.width > 1050 & window.screen.width<1680){
      setWidth("70%")
    }
    if(window.screen.width > 1900 & window.screen.width<2600){
      setWidth("38%")
    }
  },[])

  return (
    <div className="App " style={{width:width}}>
     
      {/* <Heading RecievedData={RecievedData} /> */}
      <Line data={data}></Line>
    </div>
  );
}

export default Graph;

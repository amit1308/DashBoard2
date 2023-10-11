import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./Landing.css";
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



  const gate = useSelector((state) => {
    // console.log("Graph        G", state.gatewayOptimizer.GatewayId);
    return state.gatewayOptimizer.GatewayId;
  });
  
  const opti = useSelector((state) => {
    // console.log("Graph        O", state.gatewayOptimizer.OptimizerId);
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
        label:"Total Energy Consumption ",
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
            label:"Total Energy Consumption ",
           
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: "tranparent",
            borderColor: "green",
            // tension:0.4,
            fill: true,
            pointStyle: false,
            display:false,
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine: true,
          },
        
        ],
      })
      return
    }
    const roomTemp = [];
  
    const labelss = [];
    const graphData = async () => {
      const response = await axios.post("http://3.106.217.161:5000/getGraphData", {
        GatewayId: gate,
        OptimizerId: opti,
      });
      setupdatedOptimizer(response.data);
      console.log("radhe",response.data);
      response.data.map((item, index) => {
        roomTemp.push(item.RoomTemperature);
      
        labelss.push("");
      });

      setData({
        labels: [...labelss],
        datasets: [
          {
            label:"Total Energy Consumption ",
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
      
        ],
      });
      console.log("what data   ", response.data);
    };
    graphData();
  }, [opti]);


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
     
    
      <Line data={data}></Line>
    </div>
  );
}

export default Graph;

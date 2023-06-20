import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Heading from "../Heading/Heading";
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
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

  // async function RecievedData (OptimizerId,GatewayId){
  //     const response = await axios.post(
  //       "http://16.170.208.48/getGraphData",{
  //         GatewayId,
  //         OimizerIdpt,
  //       }
  //     );
  //     console.log(response.data);
  //   }

  useEffect(() => {
    const arr = [];
    
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((json) => {
        json.carts.map((item, index) => {
          console.log("json", item.userId);
          arr.push(item.userId);
        });

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
              data: [...arr],
              backgroundColor: 'tranparent',
              borderColor: "green",
              tension:0.4,
              // fill: true,
              pointStyle: false,
              // pointBorderColor:'blue',
              // pointBackgroundColor:'#fff',
              showLine: true,
            },
            {
              label: "Room Temp.",
              data: [...arr.reverse()],
              backgroundColor: "tranparent",
              borderColor: "red",
              tension:0.4,
              // fill: true,
              pointStyle: false,
              // pointBorderColor:'blue',
              // pointBackgroundColor:'#fff',
              showLine: true,
            },
          ],
        });
      });
    console.log(arr);
  }, []);
  return (
    
    <div className="App" style={{ height: "50%", width: "70%" }}>
       {/* <Heading RecievedData={RecievedData} /> */}
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default Graph;

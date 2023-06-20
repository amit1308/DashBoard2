// Sidebar imports
import {

  UilClipboardAlt,

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";


// Analytics Cards Data
export const cardsData = [
  {
    title: "Temperature",
    color: {
      backGround: "linear-gradient(180deg, #250340 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25 celcius",
    png: UilUsdSquare,
 
  
  },
  {
    title: "Pressure",
    color: {
      backGround: "linear-gradient(180deg, #ed2137 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14Pa",
    png: UilMoneyWithdrawal,
 
  },
  {
    title: "Humadity",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "20%",
    png: UilClipboardAlt,
 
  },
];

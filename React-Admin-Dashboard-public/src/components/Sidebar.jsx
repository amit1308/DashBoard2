import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaCog,
    FaBolt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Landing",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Monitor",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Control",
            icon:<FaCog/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaBolt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div  className="sidebar">
               <div className="top_section">
                   {/* <h1  className="logo">Logo</h1> */}
                   <div  className="bars">
                       {/* <FaBars onClick={toggle}/> */}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           {/* <div  className="link_text">{item.name}</div> */}
                       </NavLink>
                   ))
               }
                <NavLink to='/login' onClick={()=> window.localStorage.clear()} className="link" activeclassName="active">Logout</NavLink>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
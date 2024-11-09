import React, { useState } from "react";
import { FaBars, FaTh, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";

const AdminSidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    const menuItem = [
      {
        path: "/admin-addProject",
        name: "Add Project",
        icon: <FaTh />,
      },
      {
        path: "/addClient",
        name: "Add Client",
        icon: <FaUser />,
      },
      {
        path: "/viewContacts",
        name: "View Contacts",
        icon: <FaUser />,
      },
      {
        path: "/viewSubscribers",
        name: "View Subscribers",
        icon: <FaUser />,
      },
      {
        path: "/",
        name: "Logout",
        icon: <FaUser />,
      },
    ];
    return (
      <>
        <div className="top-navone">
          <FaBars style={{ color: "white",cursor:"pointer", fontSize:"20px", margin:"8px"}} onClick={toggle} />
          <h4 className="top-text">Admin Dashboard</h4>
        </div>
        <div>
          <div style={{ width: isOpen ? "200px" : "45px" }} className="sidebar">
            <div className="top_section"></div>
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link">
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
          <main>{children}</main>
        </div>
      </>
    );
  };
  
  export const isOpen = () => {
    return isOpen;
  };
  export default AdminSidebar;
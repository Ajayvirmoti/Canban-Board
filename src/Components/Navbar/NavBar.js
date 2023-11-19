import SortButton from '../SortButton';
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { BsSliders, BsChevronDown } from "react-icons/bs"; //BsSliders2
const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const Navbar = ({ groupBy, setGroupBy, sortBy, onSelectHandler, sortTickets }) => {
  const [slider, setSlider] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarButton">
        <button className="groupButton" onClick={() => setSlider(!slider)}>
          <BsSliders /> Display <BsChevronDown />
        </button>

        {slider && (
          <>
            <div className="dropDown">
              <div className="group">
                <span style={{ color: "grey" }}>Grouping</span>
                <select
                  onChange={(e) => setGroupBy(e.target.value)}
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="userId">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="group">
                <span style={{ color: "grey" }}>Ordering</span>
                <select  
                  value={sortBy} onChange={(e) => onSelectHandler(e.target.value)}
                  name="order"
                  id="order"
                >
                  <SortButton onSelect={() => sortTickets()} value="priority" label="Priority" />
                  <SortButton onSelect={() => sortTickets()} value="title" label="Title" />
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;




// // Ticket.js
// import React from 'react';
// import "./Ticket.css";
// import {Card } from "./Card/Card";

// const Ticket = ({ ticket, user }) => (
//   <div className="ticket">
//     {/* <div><h1>{user.name}</h1></div> */}
//     <div>Title: {ticket.title}</div>
//     <div>Status: {ticket.status}</div>
//     <div>User: {ticket.id}</div>
//     <div>Priority: {ticket.priority}</div>
//   </div>
// );

// export default Ticket;


// Ticket.js
import React from 'react';
import "./Ticket.css";
import Card from "./Card/Card.js";

const Ticket = ({ ticket, user }) => (
  <div className='ticket1'>
    <Card
    id = {ticket.id}
    title={ticket.title}
    tags = {"Feature Request"}
  />
  </div>
);

export default Ticket;

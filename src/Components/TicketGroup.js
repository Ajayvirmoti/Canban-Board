// TicketGroup.js
import React from 'react';
import Ticket from './Ticket';
import "./TicketGroup.css";

const TicketGroup = ({ groupKey, tickets }) => (
  <div className='canvas'>
    <div className="ticket-group" >
    {/* {console.log(groupKey)}
    {groupKey.map((ticket) => (
      <h1>{key =ticket.name}</h1>
    ))} */}
    {tickets.map((ticket) => (
      <Ticket user = {groupKey.name} key={ticket.id} ticket={ticket} />
    ))}
  </div>
  </div>
);

export default TicketGroup;

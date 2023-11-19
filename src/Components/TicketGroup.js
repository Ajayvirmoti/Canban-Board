// TicketGroup.js
import React from 'react';
import Ticket from './Ticket';
import "./TicketGroup.css";

const TicketGroup = ({ groupKey, tickets }) => (
  <div className="ticket-group" key={groupKey}>
    {/* {console.log(groupKey)}
    {groupKey.map((ticket) => (
      <h1>{key =ticket.name}</h1>
    ))} */}
    {tickets.map((ticket) => (
      <Ticket user = {groupKey.name} key={ticket.id} ticket={ticket} />
    ))}
  </div>
);

export default TicketGroup;

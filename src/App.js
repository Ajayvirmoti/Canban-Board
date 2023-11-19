// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TicketGroup from './Components/TicketGroup';
import NavBar from './Components/Navbar/NavBar';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [sortBy, setSortBy] = useState('priority');
  const [groupBy, setGroupBy] = useState('status');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    groupTickets();
  }, [tickets, groupBy]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data.users);
      setUsers(data.users);
      setTickets(data.tickets);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const groupTickets = () => {
    const groupedTickets = {};
    tickets.forEach((ticket) => {
      const key = ticket[groupBy];
      if (!groupedTickets[key]) {
        groupedTickets[key] = [];
      }
      groupedTickets[key].push(ticket);
    });
    setGroupedTickets(groupedTickets);
  };

  const onSelectHandler = (selected) => {
    setSortBy(selected);
  };

  const sortTickets = () => {
    const sortedTickets = { ...groupedTickets };

    Object.keys(sortedTickets).forEach((key) => {
      sortedTickets[key] = sortTicketsByCriteria(sortedTickets[key]);
    });

    setGroupedTickets(sortedTickets);
  };

  const sortTicketsByCriteria = (ticketGroup) => {
    switch (sortBy) {
      case 'priority':
        return [...ticketGroup].sort((a, b) => b.priority - a.priority);
      case 'title':
        return [...ticketGroup].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return ticketGroup;
    }
  };

  return (
    <div>
      <NavBar
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        onSelectHandler={onSelectHandler}
        sortTickets={sortTickets}
      />
      <div className="kanban-board">
        {Object.keys(groupedTickets).map((groupKey) => (
          <TicketGroup key={groupKey} groupKey={users} tickets={groupedTickets[groupKey]} />
        ))}
      </div>

          


    </div>
  );
};

export default App;

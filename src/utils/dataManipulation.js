export function groupTickets(tickets, groupBy) {
    return tickets.reduce((acc, ticket) => {
      const key = groupBy === 'user' ? ticket.userId : 
                  groupBy === 'priority' ? getPriorityLabel(ticket.priority) : 
                  ticket.status;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});
  }
  
  export function sortTickets(groupedTickets, sortBy) {
    const sortFunction = sortBy === 'priority' ? 
      (a, b) => b.priority - a.priority :
      (a, b) => a.title.localeCompare(b.title);
  
    return Object.entries(groupedTickets).reduce((acc, [key, tickets]) => {
      acc[key] = tickets.sort(sortFunction);
      return acc;
    }, {});
  }
  
  function getPriorityLabel(priority) {
    const labels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return labels[priority];
  }
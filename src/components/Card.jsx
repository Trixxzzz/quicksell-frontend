import React, { useState } from "react";
import "./Card.css";
import ProfilePicIcon from "../logos/icons_FEtask/profile.png"
import ProgressIcon from "../logos/icons_FEtask/in-progress.svg";
import TodoIcon from "../logos/icons_FEtask/To-do.svg";
import BacklogIcon from "../logos/icons_FEtask/Backlog.svg";
import NoPriorityIcon from "../logos/icons_FEtask/No-priority.svg";
import HighPriorityIcon from "../logos/icons_FEtask/Img - High Priority.svg";
import LowPriorityIcon from "../logos/icons_FEtask/Img - Low Priority.svg";
import MediumPriorityIcon from "../logos/icons_FEtask/Img - Medium Priority.svg";
import UrgentPriorityColorIcon from "../logos/icons_FEtask/SVG - Urgent Priority colour.svg";


function Card({ ticket, user, groupBy }) {
  let icon=""
  if(ticket.status==="Todo")
    icon=TodoIcon
  else if (ticket.status === "In progress") 
    icon = ProgressIcon;
  else
    icon=BacklogIcon

  let sign=""
   if (ticket.priority === "Urgent") 
    sign = UrgentPriorityColorIcon;
  else if(ticket.priority==="Low")
    sign=LowPriorityIcon;
  else if (ticket.priority === "High") 
  sign = HighPriorityIcon;
  else if (ticket.priority === "Medium") 
  sign = MediumPriorityIcon;
  else 
  sign = NoPriorityIcon;


  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== "user" && (
          <div class="avatar-container">
  <img src={ProfilePicIcon} alt="User Avatar" class="user-avatar" />
  <span class="status-dot"></span>
</div>
        )}
      </div>
      <div className="message">
      <img src={icon} alt="Display Icon" className="dis-icon" />
      <h3 className="card-title">{ticket.title}</h3>
      </div>
      <div className="card-footer">
        {groupBy !== "priority" && (
          <span className={`priority priority-${ticket.priority}`}>
      <img src={sign} alt="Display Icon"/>
            
            {/* {getPriorityLabel(ticket.priority)} */}
          </span>
        )}
        {groupBy !== "status" && (
          <span className={`status status-${ticket.status.toLowerCase()}`}>
            {ticket.tag}
            {/* {ticket.status} */}
          </span>
        )}
      </div>
    </div>
  );
}

// function getPriorityLabel(priority) {
//   const labels = ["No priority", "Low", "Medium", "High", "Urgent"];
//   return labels[priority];
// }

export default Card;

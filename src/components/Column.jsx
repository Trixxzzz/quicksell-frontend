import React from "react";
import Card from "./Card.jsx";
import "./Column.css";
import DisplayIcon from "../logos/icons_FEtask/Display.svg";
import ProgressIcon from "../logos/icons_FEtask/in-progress.svg";
import TodoIcon from "../logos/icons_FEtask/To-do.svg";
import BacklogIcon from "../logos/icons_FEtask/Backlog.svg";
import AddIcon from "../logos/icons_FEtask/add.svg";
import ThreedotsIcon from "../logos/icons_FEtask/3 dot menu.svg";
import HighPriorityIcon from "../logos/icons_FEtask/Img - High Priority.svg";
import LowPriorityIcon from "../logos/icons_FEtask/Img - Low Priority.svg";
import MediumPriorityIcon from "../logos/icons_FEtask/Img - Medium Priority.svg";
import UrgentPriorityColorIcon from "../logos/icons_FEtask/SVG - Urgent Priority colour.svg";
import ProfilePic from "../logos/icons_FEtask/profile.png"

function Column({ title, tickets, users, groupBy }) {
  let icon = DisplayIcon;
  let titlename = title;
  if (title === "Todo") {
    icon = TodoIcon;
  } else if (title === "In progress") {
    icon = ProgressIcon;
  } else if (title === "Urgent") {
    icon = UrgentPriorityColorIcon;
  } else if (title === "No priority") {
    icon = ThreedotsIcon;
  } else if (title === "High") {
    icon = HighPriorityIcon;
  } else if (title === "Medium") {
    icon = MediumPriorityIcon;
  } else if (title === "Low") {
    icon = LowPriorityIcon;
  } else if(title === "Backlog"){
    icon = BacklogIcon;
  }
    else{
      icon=ProfilePic;
     if(groupBy === "user") {
      let user = users.find((user) => user.id === title);
      titlename = user.name;
    }
  }
  const ticketCount = tickets.length;
  return (
    <div className="column">
      <div className="headings">
        <h2 className="column-title">
          <img src={icon} alt="Display Icon" className="dis-icon" />
          {titlename}
          <div className="count">{ticketCount}</div>
        </h2>
        <div>
          <img src={AddIcon} alt="Display Icon" className="icon" />
          <img src={ThreedotsIcon} alt="Display Icon" className="icon" />
        </div>
      </div>
      <div className="card-container">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find((user) => user.id === ticket.userId)}
            groupBy={groupBy}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;

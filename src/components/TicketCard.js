import React from 'react';
import { Link } from 'react-router-dom'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import MessageDisplay from './MessageDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'


const TicketCard = ({ color, ticket}) => {
    return (
        <div className="ticket-card">
            <Link to={`/ticket/${ticket.documentId}`} id="link">
                <div className="ticket-color" style={{backgroundColor: color}}></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket.avatar}/>
                <StatusDisplay status ={ticket.status}/>
                <MessageDisplay message ={ticket.message}/>
                <ProgressDisplay progress = {ticket.progress}/>
                <DeleteBlock/>
            </Link>
        </div>
    );
}

export default TicketCard;
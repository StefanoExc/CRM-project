import { Link } from 'react-router-dom'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'


const TicketCard = () => {
    return (
        <div className="ticket-card">
            <div className="ticket-color"></div>
            <Link>
            <h3>Title</h3>
            <AvatarDisplay/>
            <StatusDisplay/>
            <PriorityDisplay/>
            <ProgressDisplay/>
            <DeleteBlock/>
            </Link>
        </div>
    );
}

export default TicketCard;
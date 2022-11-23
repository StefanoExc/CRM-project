import TicketCard from '../components/TicketCard'
const Dashboard = () => {

    const data = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Shawn',
            avatar: 'https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
            status: 'fatto',
            priority : 5,
            progress: 40,
            description: 'Make  video showcasing how to work whit NFTs safetly',
            timestamp: '2022-11-23T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Build and Sell AI Model',
            owner: 'Shawn',
            avatar: 'https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
            status: 'working on it',
            priority : 2,
            progress: 70,
            description: 'Make  video about AI',
            timestamp: '2022-11-26T07:36:17+0000'
        }

    ]

    return (
        <div className="dashboard">
            <h1>CRM project</h1>
            <div className={"ticket-container"}>
                <TicketCard/>

            </div>
        </div>
    );
}

export default Dashboard;
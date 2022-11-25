import TicketCard from '../components/TicketCard'
const Dashboard = () => {

    const tickets = [
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
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build a bot',
            owner: 'Shawn',
            avatar: 'https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
            status: 'working on it',
            priority : 3,
            progress: 10,
            description: 'Make  video about making a bot',
            timestamp: '2022-11-15T07:36:17+0000'
        }

    ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]

    //mi torna tutti i valori unici e li mette in un array, che sarà una uniqueCategories
    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ];
    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>CRM project</h1>
            <div className="ticket-container">
                {/* se i biglietti esistono, e le uniqueCategories esistono, vado a mappare ogni unica categoria. Mi prendo anche la index, che differenzia una index da un'altra*/}
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {/* per ogni ticket nel mio tickets, vado a verificare che il ticket.category sia uguale alla uniqueCategory*/}
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, ticketIndex) => (
                                <TicketCard id={ticketIndex} 
                                color={colors[categoryIndex] || colors[0]}
                                ticket={filteredTicket}/>   
                            ))
                        }
                        {/* poi vado a mapparmi quello che ritorna nel ticket */}
                    </div>
                ))}  

            </div>
        </div>
    );
}

export default Dashboard;
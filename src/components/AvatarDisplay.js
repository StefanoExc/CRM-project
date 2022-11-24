import blankAvatar from '../images/blank-profile-avatar.png'

const AvatarDisplay = ({ticket}) => {
    return (
        <div className="avatar-container">
            <div className={"img-container"}>
                {/* se esiste, mostrami il ticket.avatar oppure il blankAvatar */}
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'Foto di ' + ticket.owner}/>
            </div>
        </div>
    );
}

export default AvatarDisplay;
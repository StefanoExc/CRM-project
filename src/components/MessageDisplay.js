import React from 'react';
import { Button,ButtonToolbar } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

const MessageDisplay = ({message}) => {
    return (
        <div className="message-display">
            <>
            <ButtonToolbar>
                <div className="message-container">
                    <Button className="message-button" size="md" >Chat ✉☭</Button>
                </div>                
            </ButtonToolbar>
            </>
            
        </div>
    );
}

export default MessageDisplay;
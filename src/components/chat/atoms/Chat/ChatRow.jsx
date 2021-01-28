import React from 'react'
import propTypes from 'prop-types'
import './ChatRow.css'

const ChatRow = (params) => {
    const className = ["chat__row__container"]

    // If this chat is for sender
    if(params.isSender) className.push("chat__sender")

    return (
        <div className={className.join(" ")}>
                {/* <span className="chat__row__username">Daniel Pithecantropus</span><br/> */}
                <p className="chat__message">{params.text}</p>
                <span className="chat__row__timestamp">23.40</span>
        </div>
    )
}

ChatRow.propTypes = {
    isSender : propTypes.bool,
    text : propTypes.string,
}

export default ChatRow

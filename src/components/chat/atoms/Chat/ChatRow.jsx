import React from 'react'
import propTypes from 'prop-types'
import './ChatRow.css'

const ChatRow = (params) => {

    return (
        <div className={params.className}>
                {/* <span className="chat__row__username">Daniel Pithecantropus</span><br/> */}
                <p className="chat__message">{params.text}</p>
                <span className="chat__row__timestamp">{params.timestamp}</span>
        </div>
    )
}

ChatRow.propTypes = {
    className: propTypes.string,
    text : propTypes.string,
    timestamp: propTypes.string,
}

export default ChatRow

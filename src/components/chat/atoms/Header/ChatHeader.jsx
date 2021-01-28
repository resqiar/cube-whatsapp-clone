import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './ChatHeader.css'

import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ChatHeader = () => {
    return (
        <div className="chat__header__container">
            <IconButton>
            < Avatar />
            </IconButton>
        
            <div className="chat__header__info">
                <h4>Obligated Man</h4>
                <p>Last seen 1000 BC at 00:05</p>
            </div>

            <div className="chat__header__icon">
            <IconButton>
                <SearchIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader

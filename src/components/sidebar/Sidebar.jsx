import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './atoms/SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar__container">
            <div className="sidebar__header">
                <div className="sidebar__header__avatar">
                    <IconButton>
                        <Avatar/>
                    </IconButton>
                </div>
                <div className="sidebar__header__right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="search__input__container">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search or start new..." className="search__input"/>
                </div>
            </div>


            <div className="sidebar__chat__container">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar

import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

const SidebarChat = () => {
    return (
        <div className="container">
            <div className="avatar">
                <Avatar />
            </div>
            <div className="list-tile">
                <h4>Example</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non perspiciatis pariatur ullam. Unde velit cumque nobis impedit, nisi delectus.</p>
            </div>
        </div>
    )
}

export default SidebarChat

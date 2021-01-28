import { IconButton } from '@material-ui/core'
import React from 'react'
import ChatRow from './atoms/Chat/ChatRow'
import ChatHeader from './atoms/Header/ChatHeader'

import './Chat.css'

import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

const Chat = () => {
    return (
        <div className="chat__container">
            <div className="chat__header">
                < ChatHeader />
            </div>

            <div className="chat__column">
                < ChatRow text={"Mike?"}/>
                < ChatRow isSender text={"What?"}/>
                < ChatRow text={"I’ve been thinking about it for a while, but haven’t concretized anything so far."}/>
                < ChatRow isSender text={"What have you been thinking, if you can share?"}/>
                < ChatRow text={"Well, I’ve been thinking of switching to an industry that has at least few decades of growth left."}/>
                < ChatRow isSender text={"That’s the right approsch, but you need to reskill yourself for the industry you’re targeting."}/>
                < ChatRow isSender text={"*approach"}/>
                < ChatRow text={"I realize that, and I’ve been leaning toward digital marketing because in that industry I can carry over some of my skills from the current job. Another reason for this inclination is that digital marketing requires far less hardcore technical skills, which will make it relatively easier for me to acquire new skills."}/>
                < ChatRow isSender text={"Your choice makes sense. So are you thinking of making the transition in near future?"}/>
                < ChatRow text={"Not immediately. I need to keep the job, as I’ve EMIs to pay. I’m 80-90 percent sure I’ll go with digital marketing as the industry to reskill in, but in the next 2-3 weeks I’ll take more opinions on other options, after all I wouldn’t want to change the industry again. And once I finalize the industry, I’ll explore different options to reskill while keeping my current job."}/>
                < ChatRow isSender text={"Sounds like a plan. If you need I can put you in touch with few friends who can help you finalize your future industry."} />
            </div>
            
            <div className="chat__input__container">
                <div className="chat__input__left">
                    <IconButton>
                        <InsertEmoticonOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                </div>
                <div className="chat__input">
                    <input type="text" placeholder="Type a message"/>
                </div>
                <div className="chat__input__right">
                    <IconButton>
                        <MicOutlinedIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Chat

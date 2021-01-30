import "./App.css";
import Chat from "components/chat/Chat";
import Sidebar from "components/sidebar/Sidebar";
import Pusher from 'pusher-js'
import { useEffect, useState } from "react";
import axios from "../api/axios";

function App() {
  // TODO : Save all messages here => update accordingly
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // TODO : Fetch all initial messages
    axios.get('/api/v1/messages').then((res) => {

      // Set messages 
      setMessages(res.data) // all previous data in the db
    })
  }, [])

  useEffect(() => { // tell react components needs updates afterwards
    
    var pusher = new Pusher('1670cbdca7939dff9895', {
      cluster: 'ap1'
    });

    var channel = pusher.subscribe('message');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data]) // => set any messages input
    });


    // TODO: Unbind 
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages]);
  
  return (
    <div className="app">
      <div className="app__body">
        {/* SIDEBAR */}
        <Sidebar />

        {/* CHAT */}
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;

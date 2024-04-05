import React from 'react';
import './styles.css';

import SendIcon from '@mui/icons-material/Send';

function ChatBot() {
  return (
    <div className="inbox_chatbot">
      <ChatBotHeader />
      <Messages />
      <TextBack />
    </div>
  );
}

function ChatBotHeader() {
  return (
    <div className="chatbot_header">
      <img
        className="chatbot_header_img"
        src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
        alt="profile pic"
      />
      <p>Eleanor Pena</p>
    </div>
  );
}

function Messages() {
  return (
    <div className="messages_container">
      <p className="recieved_message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quo suscipit corporis deleniti voluptatem cumque velit porro non, itaque saepe?
      </p>
      <p className="sent_message">Lorem ipsum dolor sit amet.</p>
      <p className="recieved_message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quo suscipit corporis deleniti voluptatem cumque velit porro non, itaque saepe?
      </p>
      <p className="sent_message">Lorem ipsum dolor sit amet.</p>
      <p className="recieved_message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quo suscipit corporis deleniti voluptatem cumque velit porro non, itaque saepe?
      </p>
      <p className="sent_message">Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

function TextBack() {
  return (
    <div className="textback_input">
      <input type="text" placeholder="Write your message..." />
      <button>
        Send <SendIcon />
      </button>
    </div>
  );
}

export default ChatBot;

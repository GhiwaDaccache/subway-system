import React, { useState } from 'react';
import './styles.css';
import InboxSidebar from './InboxSidebar';

import ChatBot from './ChatBot';

function Inbox() {
  return (
    <div className="inbox_container">
      <InboxSidebar />
      <ChatBot />
    </div>
  );
}

export default Inbox;

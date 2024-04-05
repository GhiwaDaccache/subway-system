import React, { useState, userState } from 'react';
import './styles.css';

function InboxSidebar() {
  const [activeUser, setActiveUser] = useState(1);

  const handleClick = (userId) => {
    setActiveUser(userId);
  };

  return (
    <div className="inbox_sidebar">
      <User id={1} active={activeUser === 1} onClick={() => handleClick(1)} />
      <User id={2} active={activeUser === 2} onClick={() => handleClick(2)} />
      <User id={3} active={activeUser === 3} onClick={() => handleClick(3)} />
      <User id={4} active={activeUser === 4} onClick={() => handleClick(4)} />
      <User id={5} active={activeUser === 5} onClick={() => handleClick(5)} />
      <User id={6} active={activeUser === 6} onClick={() => handleClick(6)} />
      <User id={7} active={activeUser === 7} onClick={() => handleClick(7)} />
    </div>
  );
}

function User({ id, active, onClick }) {
  return (
    <aside className={`inbox_user ${active ? 'active_user' : ''}`} onClick={onClick}>
      <div>
        <img
          className="inbox_user_img"
          src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="inbox_user_info">
        <p className="user_name">Eleanor Pena</p>
        <p className="inbox_active">Message preview...</p>
      </div>
    </aside>
  );
}

export default InboxSidebar;

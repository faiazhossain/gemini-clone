import { IoMenu, IoSettings } from 'react-icons/io5';
import './Sidebar.css';
import { FaHistory, FaPlus, FaQuestion } from 'react-icons/fa';
import { TbMessageChatbotFilled } from 'react-icons/tb';
import { useState } from 'react';
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className='sidebar'>
      <div className='top'>
        <IoMenu
          onClick={() => setExtended((prev) => !prev)}
          className='img menu'
        />
        <div className='new-chat'>
          <FaPlus className='img' />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            <div className='recent-entry'>
              <TbMessageChatbotFilled className='img' />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <FaQuestion className='img' />
          {extended ? <p>Help</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <FaHistory className='img' />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <IoSettings className='img' />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { IoMenu, IoSettings } from 'react-icons/io5';
import './Sidebar.css';
import { FaHistory, FaPlus, FaQuestion } from 'react-icons/fa';
import { TbMessageChatbotFilled } from 'react-icons/tb';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <IoMenu className='img menu' />
        <div className='new-chat'>
          <FaPlus className='img' />
          <p>New Chat</p>
        </div>
        <div className='recent'>
          <p className='recent-title'>Recent</p>
          <div className='recent-entry'>
            <TbMessageChatbotFilled className='img' />
            <p>What is React...</p>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <FaQuestion className='img' />
          <p>Help</p>
        </div>
        <div className='bottom-item recent-entry'>
          <FaHistory className='img' />
          <p>Activity</p>
        </div>
        <div className='bottom-item recent-entry'>
          <IoSettings className='img' />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

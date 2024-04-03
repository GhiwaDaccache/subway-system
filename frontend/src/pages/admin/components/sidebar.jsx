import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="side-bar secondary-bg">
      <ul className="ul-side-bar">
        <li onClick={()=>navigate('/admin/')}>Dashboard</li>
        <li onClick={()=>navigate('/admin/managers')}>Invite Managers</li>
        <li onClick={()=>navigate('/admin/branches')}>Edit Branches</li>
        <li onClick={()=>navigate('/admin/coinrequests')}>Coin Requests</li>
      </ul>
    </div>
  );
}

export default Sidebar;

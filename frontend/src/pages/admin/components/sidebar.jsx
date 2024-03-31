import { useNavigate } from 'react-router-dom';



function Sidebar() {
    const navigate = useNavigate();
    const handleNavigation= (path)=>{
        console.log("ashraf");
        navigate(path);
    }

    

return <div className="side-bar secondary-bg">
    <ul>
        <li>Dashboard</li>
        <li>Invite Managers</li>
        <li>Edit Branches</li>
        <li>Coin Requests</li>
    </ul>
</div>

}

export default Sidebar;
import { useNavigate } from 'react-router-dom';



function Sidebar() {
    const navigate = useNavigate();
    const handleNavigation= ()=>{
        console.log("ashraf");
        navigate('/admin');
    }

    

return <div className="side-bar secondary-bg">
    <ul>
        <li>Dashboard</li>
        <li onClick={handleNavigation}>Add Managers</li>
        <li>Edit Branches</li>
        <li>Coin Requests</li>
    </ul>
</div>

}

export default Sidebar;
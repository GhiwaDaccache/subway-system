import "./index.css";

function InviteManagers() {
  return (
    <div className="admin-container flex column">
      <div className="invite-input flex justify-around align-center">
        <input className="email-input light-blue-bg" type="email" placeholder="  Enter Manager's Email"></input>
        <button>Invite</button>
      
      </div>
      <div className="admin-veiw flex column">
  
      </div>
    </div>
  );
}
export default InviteManagers;

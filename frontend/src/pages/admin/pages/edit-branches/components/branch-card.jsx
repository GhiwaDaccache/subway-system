function ViewBranches({station}) {
  const {name,location,opening_time,closing_time}=station;
    return (
      <div className="branch-cards flex   justify-around">
        <div className=" flex column  justify-around">
          <div>Branch Name:</div>
          <div>Location:</div>
        </div>
        <div className=" flex column  justify-around">
          <div>{name}</div>
          <div>{location}</div>
        </div>
        <div className=" flex column justify-around">
          <div>Opening hour:</div>
          <div>Closing hour:</div>
        </div>
        <div className=" flex column  justify-around">
          <div>{opening_time}</div>
          <div>{closing_time}</div>
        </div>
        <div className=" flex column  justify-around">
       <div> <button className="branch-buttons">Disable</button></div>
       <div> <button className="branch-buttons">Remove</button></div>
        </div>
      </div>
    );
  }
  export default ViewBranches;
  
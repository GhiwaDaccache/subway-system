function ViewBranches() {
    return (
      <div className="branch-cards flex   justify-around">
        <div className=" flex column  justify-around">
          <div>Branch Name:</div>
          <div>Location</div>
        </div>
        <div className=" flex column  justify-around">
          <div>Tripoli Station</div>
          <div>Tripoli</div>
        </div>
        <div className=" flex column justify-around">
          <div>Opening hour:</div>
          <div>Closing hour:</div>
        </div>
        <div className=" flex column  justify-around">
          <div>6:00 AM</div>
          <div>10:00 PM</div>
        </div>
        <div className=" flex column  justify-around">
       <div> <button className="branch-buttons">Disable</button></div>
       <div> <button className="branch-buttons">Remove</button></div>
        </div>
      </div>
    );
  }
  export default ViewBranches;
  
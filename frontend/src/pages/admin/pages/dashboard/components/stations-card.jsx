function StationCard() {
  return (
    <div className="passenger-card flex   justify-around">
      <div className=" flex column  justify-around">
        <div>Station Name:</div>
        <div>Manager Name:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>Saida Station</div>
        <div>Manager</div>
      </div>
      <div className=" flex column justify-around">
        <div>Location:</div>
        <div>Closing hour:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>Saida</div>
        <div>From 6:00 AM to 10:00 PM</div>
      </div>
    </div>
  );
}
export default StationCard;

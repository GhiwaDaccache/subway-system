function RideCard() {
  return (
    <div className="admin-cards  flex   justify-around">
      <div className=" flex column  justify-around">
        <div>Ride Number:</div>
        <div>Departure Station:</div>
        <div>Departure Time:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>23</div>
        <div>Saida</div>
        <div>7:00 AM</div>
      </div>
      <div className=" flex column justify-around">
        <div>Date:</div>
        <div>Arrival Station:</div>
        <div>Arrival Time:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>22/5/2024</div>
        <div>Saida</div>
        <div>8:00 AM</div>
      </div>
    </div>
  );
}
export default RideCard;

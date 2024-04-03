function RideCard({ride}) {
 const {id,date,departure_time,arrival_time}=ride;
  return (
    <div className="admin-cards  flex   justify-around">
      <div className=" flex column  justify-around">
        <div>Ride Number:</div>
        <div>Departure Station:</div>
        <div>Departure Time:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>{id}</div>
        <div>Saida</div>
        <div>{departure_time}</div>
      </div>
      <div className=" flex column justify-around">
        <div>Date:</div>
        <div>Arrival Station:</div>
        <div>Arrival Time:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>{date}</div>
        <div>Saida</div>
        <div>{arrival_time}</div>
      </div>
    </div>
  );
}
export default RideCard;

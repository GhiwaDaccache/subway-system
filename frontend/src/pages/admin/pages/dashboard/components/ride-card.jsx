function RideCard({ride}) {
 const {id,date,departure_time,arrival_time,departure_station,arrival_station}=ride;

 const departure_station_name = departure_station ? departure_station.name : 'No station';
 const arrival_station_name = arrival_station? arrival_station.name : 'No station';

  return (
    <div className="admin-cards  flex   justify-around">
      <div className=" flex column  justify-around">
        <div>Ride Number:</div>
        <div>Departure Station:</div>
        <div>Departure Time:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>{id}</div>
        <div>{departure_station_name}</div>
        <div>{departure_time}</div>
      </div>
      <div className=" flex column justify-around">
        <div>Date:</div>
        <div>Arrival Station:</div>
        <div>Arrival Time:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>{date}</div>
        <div>{arrival_station_name}</div>
        <div>{arrival_time}</div>
      </div>
    </div>
  );
}
export default RideCard;

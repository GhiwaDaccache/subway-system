function StationCard({ station }) {
  const { name, location, opening_time, closing_time, user } = station;

  
  const managerName = user ? user.name : 'No manager';

  return (
    <div className="admin-cards flex justify-around">
      <div className="flex column justify-around">
        <div>Station Name:</div>
        <div>Manager Name:</div>
      </div>
      <div className="flex column justify-around">
        <div>{name}</div>
        <div>{managerName}</div>
      </div>
      <div className="flex column justify-around">
        <div>Location:</div>
        <div>Closing hour:</div>
      </div>
      <div className="flex column justify-around">
        <div>{location}</div>
        <div>From {opening_time} to {closing_time}</div>
      </div>
    </div>
  );
}

export default StationCard;


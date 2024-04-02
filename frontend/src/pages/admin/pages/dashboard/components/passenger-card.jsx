function PassengerCard({passenger}) {
  console.log(passenger);
  const {name,email,coins}=passenger;
  return (
    <div className="admin-cards flex   justify-around">
      <div className=" flex column  justify-around">
        <div>Passenger Name:</div>
        <div>Email:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <div className=" flex column justify-around">
        <div>Coins:</div>
        <div>Premium:</div>
      </div>
      <div className=" flex column  justify-around">
        <div>{coins}</div>
        <div>Yes</div>
      </div>
    </div>
  );
}
export default PassengerCard;

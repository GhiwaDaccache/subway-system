function CoinRequestCard({coinrequest}) {
  const{amount,user}=coinrequest;
  const userName=user.name;
  const userID=user.id;
  



  
    return (
      <div className="coin-cards flex   justify-around">
        <div className=" flex column  justify-around">
          <div>Passenger ID:</div>
          <div>Name:</div>
          <div>Amount:</div>
          <div><button className="coin-buttons">Accept</button></div>
        </div>
        <div className=" flex column  justify-around">
          <div>{userID}</div>
          <div>{userName}</div>
          <div>{amount}</div>
          <div><button className="coin-buttons">Decline</button></div>
        </div>
      </div>
    );
  }
  export default CoinRequestCard;
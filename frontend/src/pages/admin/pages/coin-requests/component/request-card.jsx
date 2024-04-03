

function CoinRequestCard() {
    return (
      <div className="coin-cards flex   justify-around">
        <div className=" flex column  justify-around">
          <div>Passenger ID:</div>
          <div>Name:</div>
          <div>Amount:</div>
          <div><button className="coin-buttons">Accept</button></div>
        </div>
        <div className=" flex column  justify-around">
          <div>33</div>
          <div>User User</div>
          <div>250</div>
          <div><button className="coin-buttons">Decline</button></div>
        </div>
      </div>
    );
  }
  export default CoinRequestCard;
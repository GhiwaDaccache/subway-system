import React from "react";
import axios from "axios";

function CoinRequestCard({coinrequest, updateRequests}) {
  const{id,amount,user}=coinrequest;
  const userName=user.name;
  const userID=user.id;
  

  const handleRequest = async (isAccepted) => {
    try {
      const coinsAmount = isAccepted ? amount : 0;
      await axios.post("http://127.0.0.1:8000/api/handle_coin_request", {
        "user_id": userID,
        "amount":coinsAmount
      });
  
    
    } catch (error) {
      console.error("An error occurred:", error);
    }

    updateRequests(id);  
  };

  
    return (
      <div className="coin-cards flex   justify-around">
        <div className=" flex column  justify-around">
          <div>Passenger ID:</div>
          <div>Name:</div>
          <div>Amount:</div>
          <div><button className="coin-buttons" onClick={()=>{handleRequest(true)}}>Accept</button></div>
        </div>
        <div className=" flex column  justify-around">
          <div>{userID}</div>
          <div>{userName}</div>
          <div>{amount}</div>
          <div><button className="coin-buttons" onClick={()=>{handleRequest(false)}}>Decline</button></div>
        </div>
      </div>
    );
  }
  export default CoinRequestCard;
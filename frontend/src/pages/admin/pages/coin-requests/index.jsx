import CoinRequestCard from "./component/request-card";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function CoinRequest() {
  
  const [coinRequests, setCoinRequests] = useState([]);

  const loadCoinRequests = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_coin_request"
      );

      setCoinRequests(response.data);
    } catch (error) {
      console.error("Error loading coin requests data:", error);
    }
  };
  useEffect(() => {
    loadCoinRequests();
  }, []);

  const updateRequests = (deletedRequestId) => {
    setCoinRequests(coinRequests.filter(coinrequest => coinrequest.id !== deletedRequestId));
  };

  return (
    <div className="admin-container flex column">

      <div className="coin-requests-view flex center">
          
          {coinRequests.map((coinrequest) => {
            return <CoinRequestCard coinrequest={coinrequest} key={coinrequest.id} updateRequests={updateRequests}/>;
          })}
          
      </div>
    </div>
  );
}
export default CoinRequest;

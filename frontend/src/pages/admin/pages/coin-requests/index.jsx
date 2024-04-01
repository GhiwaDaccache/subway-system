import CoinRequestCard from "./component/request-card";
import "./index.css";


function CoinRequest() {
  return (
    <div className="admin-container flex column">

      <div className="coin-requests-view flex center">
          <CoinRequestCard/>
          <CoinRequestCard/>
          <CoinRequestCard/>
          <CoinRequestCard/>
          
      </div>
    </div>
  );
}
export default CoinRequest;

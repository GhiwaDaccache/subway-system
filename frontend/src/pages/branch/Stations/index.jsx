import StationInfo from '../components/StationInfo';
import RideCard from '../components/RideCard';
import RideCardForm from '../components/RideCardForm';

import AddIcon from '@mui/icons-material/Add';
import '../branch.css';

function Stations() {
  return (
    <section className="flex branch-page">
      <StationInfo />
      <section className="rides-container flex column align-center gap">
        <div className="flex align-center full-w">
          <AddIcon className="icon" />
          <RideCardForm />
        </div>
        <div className="flex align-center full-w gap">
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
        </div>
      </section>
    </section>
  );
}

export default Stations;

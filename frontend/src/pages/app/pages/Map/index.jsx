import MapSideBar from './components/MapSideBar';
import LiveMap from './components/LiveMap';

import './map.css';

function Map() {
  return (
    <div className="section map_container_section">
      <MapSideBar />
      <LiveMap />
    </div>
  );
}

export default Map;

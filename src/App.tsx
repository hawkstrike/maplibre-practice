import { Map, MapProvider } from 'react-map-gl';
import './App.css';

function App() {

  return (
    <MapProvider>
      <Map
        accessToken=''
        id='maplibre-practice'
        initialViewState={{
          latitude: 37.7749,
          longitude: 122.4194,
          zoom: 11
        }}
        onLoad={(event) => {
          event.target.resize();
        }}
      />
    </MapProvider>
  );
}

export default App;

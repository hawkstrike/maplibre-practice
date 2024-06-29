import MapboxLanguage from '@mapbox/mapbox-gl-language';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, MapProvider, MapWheelEvent, Marker, NavigationControl } from 'react-map-gl';
import './App.css';

const accessToken: string = (import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN || '').trim();

function App() {

  return (
    <MapProvider>
      <Map
        mapboxAccessToken={accessToken}
        id='maplibre-practice'
        initialViewState={{
          longitude: 126.9170971,
          latitude: 37.3981977,
          zoom: 16.3
        }}
        onLoad={(event) => {
          console.log('event onLoad :', event);
          // event.target.resize();
        }}
        onStyleData={(event) => {
          console.log('event onStyleData :', event);
          event.target.addControl(new MapboxLanguage({ defaultLanguage: 'ko' }));
          // event.target.resize();
        }}
        onRender={(event) => {
          // console.log('event onRender :', event);
        }}
        onMove={(event) => {
          // console.log('event onMove :', event);
        }}
        onWheel={(event: MapWheelEvent) => {
          console.log('event onWheel :', event);
        }}
        onIdle={(event) => {
          console.log('event onIdle :', event);
        }}
        doubleClickZoom={false}
        dragRotate={false}
        attributionControl={false}
        style={{
          width: '1200px',
          height: '1000px'
        }}
        mapStyle="mapbox://styles/mapbox/light-v11" /* https://docs.mapbox.com/api/maps/styles/ */
      >
        <NavigationControl
          showCompass={true}
          showZoom={true}
          position='bottom-right'
        />
        <Marker longitude={126.9170971} latitude={37.3981977} anchor="bottom">
        </Marker>
      </Map>
    </MapProvider>
  );
}

export default App;

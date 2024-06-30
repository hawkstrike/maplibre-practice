import MapboxLanguage from '@mapbox/mapbox-gl-language';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, MapProvider, MapRef, MapWheelEvent, Marker, NavigationControl } from 'react-map-gl';
import './App.css';
import DaySun from './assets/day-sun.svg?react';
import NightMoon from './assets/night-moon.svg?react';
import { useRef, useState } from 'react';

const accessToken: string = (import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN || '').trim();

function App() {
  const mapRef = useRef<MapRef>(null);
  const [theme, setTheme] = useState<'day' | 'night'>('night');

  return (
    <>
      <DaySun onClick={() => setTheme('day')} style={{ cursor: 'pointer' }} />
      <NightMoon onClick={() => setTheme('night')} style={{ cursor: 'pointer' }} />
      <MapProvider>
        <Map
          ref={mapRef}
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
          // cursor='default'
          doubleClickZoom={false}
          dragRotate={false}
          attributionControl={false}
          style={{
            width: '1200px',
            height: '1000px'
          }}
          // mapStyle="mapbox://styles/mapbox/light-v11" /* https://docs.mapbox.com/api/maps/styles/ */
          mapStyle={`mapbox://styles/mapbox/${theme === 'day' ? 'light' : 'dark'}-v11`}
        >
          <NavigationControl
            showCompass={true}
            showZoom={true}
            position='bottom-right'
          />
          <Marker
            longitude={126.9170971}
            latitude={37.3981977}
            anchor="center"
            onClick={(event) => {
              console.log('event marker onClick :', event);
            }}
            style={{
              cursor: 'pointer'
            }}
          />
        </Map>
      </MapProvider>
    </>
  );
}

export default App;

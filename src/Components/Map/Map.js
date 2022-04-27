import "./Map.scss";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'


const Map = () => {
  const position = [-41.131087, -73.047224];
  //const position = [51.505, -0.09]

  return (
    <>
    
    <div className="map-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
         
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Venid a por mi <br /> pero con la cara destapada. <br/> hijos de puta
          </Popup>
        </Marker>
      </MapContainer>      
    </div>
    <div className="info-map">
        Las Amapolas 143
        <br/>
        Frutillar
        <br/>
        X región de los lagos Chile
        <span>james18bt@gmail.com</span>
    </div>
    </>
  );
};

export default Map;

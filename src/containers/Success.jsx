import React, { useContext } from 'react';
import { isEmpty } from 'lodash';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

//Context
import AppContext from '../context/AppContext';

//Hooks
import useAddress from '../hooks/useAddress';

export default function Success() {
  const { state } = useContext(AppContext);
  const [buyer] = state.buyer;
  const addressCoord = useAddress(
    `${buyer.address},${buyer.city},${buyer.state},${buyer.country}`
  );

  const [customerName] = buyer.name.split(' ');

  return (
    <div>
      <div>
        <h2 className="font-semibold text-xl">
          {customerName}, Gracias por tu compra
        </h2>
        <p>Tu pedido llegará en 3 días a tu dirección:</p>
        {!isEmpty(addressCoord) && (
          <div>
            <MapContainer
              center={addressCoord}
              zoom={20}
              scrollWheelZoom
              className="h-96"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={addressCoord}>
                <Popup>
                  {buyer.address}
                  <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
}

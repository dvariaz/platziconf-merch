import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';

axios.defaults.paramsSerializer = (params) => {
  let result = '';
  Object.keys(params).forEach((key) => {
    result += `${key}=${encodeURIComponent(params[key])}&`;
  });
  return result.substr(0, result.length - 1);
};

export default function useAddress(address) {
  const [mapLocation, setMapLocation] = useState([]);

  const API_URL = `http://open.mapquestapi.com/geocoding/v1/address`;

  useEffect(() => {
    (async () => {
      const response = await axios.get(API_URL, {
        params: { key: process.env.MQ_CONSUMER_KEY, location: address },
      });
      const [result] = response.data.results;
      console.log(result.locations[0]);

      if (!isEmpty(result)) {
        const coord = Object.values(result.locations[0].latLng);

        console.log(API_URL, coord);
        setMapLocation(coord);
      }
    })();
  }, []);

  return mapLocation;
}

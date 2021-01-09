import axios from 'axios';
import { getDistance } from 'geolib';

module.exports = (app) => {
  const getGeocoding = async (req, res) => {
    try {
      const { addresses } = req.body;

      let distances = [];
      const response = [];

      for (let i = 0; i < addresses.length; i++) {
        addresses[i] = addresses[i]
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .split(' ')
          .join('+');
      }

      for (let i = 0; i < addresses.length; i++) {
        const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addresses[i]}&key=${process.env.API_KEY}`;

        const responseFromGoogle = await axios.get(googleUrl).catch((err) => {
          console.log(err);
        });

        response.push(responseFromGoogle.data.results[0]);
      }

      for (let i = 0; i < response.length; i++) {
        for (let j = 0; j < response.length; j++) {
          if (i !== j && i < j) {
            const distanceOfPoints = {
              pointA: '',
              pointB: '',
              distance: 0,
            };

            distanceOfPoints.pointA = response[i].formatted_address;
            distanceOfPoints.pointB = response[j].formatted_address;
            distanceOfPoints.distance = getDistance(
              response[i].geometry.location,
              response[j].geometry.location
            );
            distances.push(distanceOfPoints);

            distances = distances.sort((a, b) => {
              if (a.distance > b.distance) {
                return 1;
              } else if (a.distance < b.distance) {
                return -1;
              } else {
                return 0;
              }
            });
          }
        }
      }

      return res.status(200).send(distances);
    } catch (e) {
      console.log(e);
      return res.status(500).send('Erro');
    }
  };
  return { getGeocoding };
};

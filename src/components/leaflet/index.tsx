import {
  component$,
  useBrowserVisibleTask$, // <=== Se añade esta función
  useStyles$,
} from '@builder.io/qwik';
import { LatLngExpression, Map, tileLayer } from 'leaflet';
import leafletCSS from './../../../node_modules/leaflet/dist/leaflet.css?inline';
export const LeafletMap = component$(() => {
  useStyles$(leafletCSS);
  useStyles$(`
    #map {
      height: 250px;
      border: 2px solid blue;
    }
 `);
  useBrowserVisibleTask$(() => {
    console.log('Ejecutando en el navegador', new Date().toISOString());

    const centerPosition: LatLngExpression = [
      51.505,
      -0.09,
    ] as LatLngExpression;
    const map = new Map('map').setView(centerPosition, 13);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  });
  return <div id='map'></div>;
});

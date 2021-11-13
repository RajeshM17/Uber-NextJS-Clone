import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoicmFqZXNobTE3IiwiYSI6ImNrdm92OHo4djd6Z3MydXF3ank1NjF4N3IifQ.lAlVui9fWMcOxuJ8qTP0zQ";
const Map = (props) => {
  const {dropoffCoordinates,pickupCoordinates}=props;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29811, 39.39172],
      zoom: 3,
    });
    if(pickupCoordinates){
      addToMap(map,pickupCoordinates);
    }
    if(dropoffCoordinates){
      addToMap(map,dropoffCoordinates);
    }
    if(pickupCoordinates&&dropoffCoordinates){
      map.fitBounds([
        pickupCoordinates,dropoffCoordinates
      ],{
        padding:60
      })
    }
    
  },[pickupCoordinates,dropoffCoordinates]);
  const addToMap = (map,coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`
flex-1 h-1/2
`;

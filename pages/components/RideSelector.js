import { accessToken } from "mapbox-gl";
import React,{useState,useEffect} from "react";
import tw from "tailwind-styled-components";
import {carList} from '../data/data'
const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
  const [rideDuration,setRideDuration]=useState(0);
  useEffect(() => {
    //get ride duration from mapbox api with pickup 
   fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoicmFqZXNobTE3IiwiYSI6ImNrdm92OHo4djd6Z3MydXF3ank1NjF4N3IifQ.lAlVui9fWMcOxuJ8qTP0zQ`)
   .then(res=>res.json()
   .then(data=>{
     console.log(data);
     setRideDuration(data.routes[0].duration/100)
   }))
  }, [pickupCoordinates,dropoffCoordinates])
  return (
    <Wrapper>

      <Title>Choose a Ride or swipe up for more</Title>
      <CarList>
      {carList.map((car,index)=>{
        return(
        <Car key={index}>
          <CarImage src={car.imgUrl}></CarImage>
          <CarDetails>
            <Service>{car.service}</Service>
            <Time>5 mins away</Time>
          </CarDetails>
          <Price>{'$'+(rideDuration*car.multiplier).toFixed(2)}</Price>
        </Car>)
      })}
        
      
      
        
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;
const Title = tw.div`
text-gray-500 text-center text-xm py-2 border-b
`;

const CarList = tw.div`
overflow-y-scroll
`;

const Car = tw.div`
flex p-4 items-center
`;

const CarImage = tw.div`
h-14 mr-4
`;
const CarDetails = tw.div`
flex-1
`;
const Service = tw.div`
font-medium 
`;
const Time = tw.div`
text-xs text-blue-500
`;
const Price = tw.div`
text-sm
`;

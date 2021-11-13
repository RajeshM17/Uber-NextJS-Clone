import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import Link from 'next/link'
const confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoicmFqZXNobTE3IiwiYSI6ImNrdm92OHo4djd6Z3MydXF3ank1NjF4N3IifQ.lAlVui9fWMcOxuJ8qTP0zQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoicmFqZXNobTE3IiwiYSI6ImNrdm92OHo4djd6Z3MydXF3ank1NjF4N3IifQ.lAlVui9fWMcOxuJ8qTP0zQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
            <ButtonContainer>
        <Link href='/search'>
        <BackButton src="img.icons8.com/ios-filled/50/000000/left.png"/>
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates} />
        <ConfirmButtonContainer>
          <ConfirmButton> confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default confirm;
const Wrapper = tw.div`
flex h-screen flex-col
`;
const RideContainer = tw.div`
flex-1  flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmButton = tw.div`
bg-black text-white mx-4 my-4 py-4 text-center text-xl
`;
const ButtonContainer=tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton=tw.img`
h-full object-contain
`
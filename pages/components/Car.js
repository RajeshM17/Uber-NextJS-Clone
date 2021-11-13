import React from 'react'
import tw from "tailwind-styled-components";

const Car = ({src}) => {
    return (
        <Wrapper>
            <CarImage src={src}/>
        </Wrapper>
    )
}

export default Car;
const Wrapper=tw.div`
`
const CarImage=tw.div`
`
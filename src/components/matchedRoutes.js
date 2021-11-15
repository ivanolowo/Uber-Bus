import React from 'react'
import tw from 'tailwind-styled-components';// eslint-disable-
import { Link } from 'react-router-dom';
/* import Map from './components/destinationPage'
 */
function matchedRoutes() {
    return (
        <Wrapper>
            <ButtonContainer>
                <Link to="/destinationPage">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                    </Link>
        </ButtonContainer>

        <HederContainer>
            <Header>Matched Routes</Header>
        </HederContainer>

            <MapContainer>
                
        </MapContainer>
    </Wrapper>
    )
}

export default matchedRoutes;

const Wrapper = tw.div`
bg-gray-200 h-screen p-8
`
const ButtonContainer = tw.div`
bg-white h-12 w-12 rounded-full shadow-2xl
`
const BackButton = tw.img`
h-12 cursor-pointer
`
const HederContainer = tw.div`
flex w-screen justify-center items-center
`
const Header = tw.text`
text-6xl
`
const MapContainer = tw.div`

`
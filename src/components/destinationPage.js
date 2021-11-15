import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';// eslint-disable-
import mapboxgl from '!mapbox-gl';// eslint-disable-line import/no-webpack-loader-syntax
import { Link } from 'react-router-dom'


mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbi1vbG93byIsImEiOiJja3ZyYWR1OWQwNXdiMm9tOWRqd2d1NXNlIn0.EKNrNl03-K_0vAKalgrYFA';


export default function DestinationPage() {
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [18.068581, 59.329323],
      zoom: 10
    })

    
  });

  return (
    <Wrapper>
      <Map id='map'>Map</Map>
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Ivan Olowo</Name>
            <UserImage src="https://i.postimg.cc/7PG8Qk7T/profile-Pic.jpg" />
          </Profile>
        </Header>

        <InputBoxes>
        <Input placeholder="Put your location here">
          
        </Input>
        <Input placeholder="Where to">
          
        </Input>
        </InputBoxes>

        <ActionButtons>
          <Link to="/matchedRoutes">
            <SubmitButton>Matched Routes</SubmitButton>
            </Link>
          <SubmitButton>All Routes</SubmitButton>
        </ActionButtons>
      </ActionItems>
    </Wrapper>

  )}
  

const Wrapper = tw.div`
flex flex-col h-screen justify-center w-full 
`
const Map = tw.div`
flex-1
 
`
const ActionItems = tw.div`
flex-1 p-4
` 
const Header = tw.div`
flex justify-between items-center
`

const UberLogo = tw.img`
h-32 
`
const Profile = tw.div`
flex items-center 
`
const Name = tw.div`
mr-6 w-30 text-sm
`

const UserImage = tw.img`
h-20 w-20 rounded-full border border-gray-200 p-px 
`
const InputBoxes = tw.div`
flex flex-col flex-1 px-2
`

const Input = tw.input`
h-20 bg-gray-200 my-4 outline-none border-none p-2
`
const ActionButtons = tw.div`
px-2
`
const SubmitButton = tw.div`
h-10 bg-black text-xl p-4 flex items-center justify-center mt-8 rounded-md  
text-white cursor-pointer
`
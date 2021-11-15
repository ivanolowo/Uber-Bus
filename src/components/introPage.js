import React from 'react'
import styled from "styled-components";

const Container = styled.section`
position: absolute;
background-color: #000000;
height: 100vh;
width: 100%;
padding-top: 50%;
padding-bottom: 50%;
`;

export const Title = styled.h1`
width: 100px;
height: 100px;
font-family: var(--font-family-uber_move_text-light);
font-weight:300;
color: #FFFFFF;
font-size: 70px;
letter-spacing: 0;
line-height: 64px;
white-space: nowrap;
text-align: center;
margin-left: auto;
margin-right: auto;
width: 8em;
justify-content: center;
align-items: center;

.intro,
.intro.animate-enter {
  background-color: var(--black);
  height: 100vh;
  min-height: 896px;
  min-width: 414px;
  width: 100%;
  opacity: 0;
}

@font-face {
  font-family: "Uber Move Text-Light";
  font-style: normal;
  font-weight: 300;
  src: url("https://fonts.animaapp.com/UberMoveText-Light") format("opentype");
}

.screen a {
  display: contents;
  text-decoration: none;
}
`;

export default function introPage(props) {
 
    return (
        <Container className="intro animate-enter screen">
            <Title>
                <h1>Uber-Bus</h1>
            </Title>
        </Container>
    )
}


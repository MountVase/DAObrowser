import React from "react"

import styled, { keyframes } from "styled-components"


const Body = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #fcf1c7;
`

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;


const Loading = () => {


    return (
        <Body>
            <DotWrapper>
                <Dot delay="0s" />
                <Dot delay=".1s" />
                <Dot delay=".2s" />
            </DotWrapper>
        </Body>
    )

}

export default Loading
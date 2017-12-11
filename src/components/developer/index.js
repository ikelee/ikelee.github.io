import React from 'react';
import styled from 'styled-components'

import Developer from '../../images/developer.png'

const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  max-width: 100vw;
  max-height: inherit; 
`
const Title = styled.div`
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 120px;
  color: #ffffff;
  position: absolute;
  text-align: center;
  vertical-align: middle;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;  
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`

export default () => (
  <FlexBox>
    <Img src={Developer}/>
    <Title>Developer</Title>
  </FlexBox>
)
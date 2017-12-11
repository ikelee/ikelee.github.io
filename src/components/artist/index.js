import React from 'react';
import styled from 'styled-components'

import Artist from '../../images/artist.jpg'

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
  color: #525252;
  position: absolute;
  text-align: center;
  vertical-align: middle;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`

export default () => (
  <FlexBox>
    <Img src={Artist}/>
    <Title>Artist</Title>
  </FlexBox>
)
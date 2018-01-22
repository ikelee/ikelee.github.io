import React from 'react';
import styled from 'styled-components'

import Artist from '../../images/artist.jpg'

const Title = styled.div`
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 120px;
  color: #ffffff;
  position: absolute;
  text-align: center;
  vertical-align: middle;
`

const FlexBox = styled.div`
  background-image: url(${Artist});
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  background-repeat:no-repeat;
  background-position: center center;
  background-size: cover;
  background-position: center;
`
export default () => (
  <FlexBox>
    <Title>Artist</Title>
  </FlexBox>
)
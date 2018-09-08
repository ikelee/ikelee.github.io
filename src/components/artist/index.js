import React from 'react';
import styled from 'styled-components'

import Artist from '../../images/artist.jpg'

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
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
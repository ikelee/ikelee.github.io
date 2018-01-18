import React from 'react';
import styled from 'styled-components'

import Developer from '../../images/developer.png'

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
  width: 100%;
  height: 100%;
  background-image: url(${Developer});
  background-repeat:no-repeat;
  background-position: center center;
  background-size: cover;
  background-position: center;
`

export default () => (
  <FlexBox>
    <Title>Developer</Title>
  </FlexBox>
)
import React from 'react';
import styled from 'styled-components'

import Journalism from '../../images/journalism.jpg'

const Title = styled.div`
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 120px;
  color: #000000;
  position: absolute;
  text-align: center;
  vertical-align: middle;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  background-image: url(${Journalism});
  background-repeat:no-repeat;
  background-position: center center;
  background-size: cover;
  background-position: center;
`
export default () => (
  <FlexBox>
    <Title>Journalist</Title>
  </FlexBox>
)
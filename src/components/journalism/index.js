import React from 'react';
import styled from 'styled-components'

import Journalism from '../../images/journalism.jpg'

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  vertical-align: middle;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  height: -webkit-fill-available;
  background-image: url(${Journalism});
  background-repeat:no-repeat;
  background-position: center center;
  background-size: cover;
  background-position: center;
`

const Heading = styled.div`
  width: 100%;
  background: #ffffff;
  margin: 0;
  overflow: auto;
  text-align: -webkit-center;
`

export default () => (
  <div>
    <FlexBox>
      <Title>Journalist</Title>
    </FlexBox>
  </div>
)
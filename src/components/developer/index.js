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
  height: -webkit-fill-available;
  background-image: url(${Developer});
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
const Header = styled.div`
  font-size: 80px;
  font-weight: 800;
  text-align: center;
  margin-top: 35px;
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
`

const Paragraph = styled.div`
  font-size: 20px;
  max-width: 80vw;
  margin-top: 27px;
  margin-bottom: 40px; 
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
  white-space: pre-wrap;
`

export default () => (
  <div>
    <FlexBox>
      <Title>Developer</Title>
    </FlexBox>
    <Heading>
      <Header>Biography</Header>
      <Paragraph>Lorem Ipsum</Paragraph>
    </Heading>
  </div>
)
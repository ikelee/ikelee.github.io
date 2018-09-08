import React from 'react';
import styled from 'styled-components'

import Developer from '../../images/developer.png'

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
      <Header>Projects</Header>
      <Paragraph>These are some of the projects I have worked on over the last couple years. </Paragraph>
    </Heading>
  </div>
)
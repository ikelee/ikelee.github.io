import React from 'react';
import styled from 'styled-components'

import About from '../../images/about.jpg'

import Facebook from '../../logos/facebook.svg'
import Github from '../../logos/github.svg'
import Insta from '../../logos/instagram.svg'
import Linkedin from '../../logos/linkedin.svg'
import Twitter from '../../logos/twitter.svg'
import Document from '../../logos/document.svg'

const Title = styled.div`
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 120px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
`

const TitleDescription = styled.div`
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 30px;
  color: #fff;
  text-align: center;
`

const Heading = styled.div`
  width: 100%;
  background: #c5c5c5;
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

const FlexBox = styled.div`
  background-image: url(${About});
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  height: -webkit-fill-available;
  background-repeat:no-repeat;
  background-position: center center;
  background-size: cover;
  background-position: center;
`

const ContentBox = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`

const Contact = styled.div`
  width: 100%;
  background: #ffffff;
  margin: 0;
  overflow: auto;
  text-align: -webkit-center;
`

const LogoBar = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  display: inline-block;
`

const Logos = styled.a`
  margin: 15px;
`

const Logo = styled.img`
  height: 70px;
`

const Footing = styled.div`
  width: 100%;
  background: #000000;
  margin: 0;
  overflow: auto;
  text-align: -webkit-center;
`

const paragraphContent = "Welcome, my name is Ike, and I am a Korean-Canadian developer and a computer engineering student. I'm also an aspiring musician, journalist and an entrepreneur. \n\nI currently attend University of Waterloo, and have worked at several different companies including Hootsuite in Vancouver. I love imagining, talking about, building and breaking new technologies. I am also fascinated by what big data/deep learning is enabling us to create.\n\nOn my spare time, I love to cook, produce music and be out in nature. Check out my Instagram page for more pictures and updates! \n\nDon’t hesitate to reach out - I love meeting new people, and thanks for visiting"

export default () => (
  <div>
    <FlexBox>
      <ContentBox>
        <Title>Ike Lee</Title>
        <TitleDescription>Developer, Journalist, Musician</TitleDescription>
      </ContentBox>
    </FlexBox>
    <Heading>
      <Header>Biography</Header>
      <Paragraph>{paragraphContent}</Paragraph>
    </Heading>
    <Contact>
      <Header>Contact</Header>
      <LogoBar>
        <Logos href="https://www.facebook.com/ike.lee.9898"> 
          <Logo src={Facebook}/>
        </Logos>
        <Logos href="https://github.com/ikelee"> 
          <Logo src={Github}/>
        </Logos>
        <Logos href="https://www.instagram.com/ikeleee/"> 
          <Logo src={Insta}/>
        </Logos>
        <Logos href="https://www.linkedin.com/in/eekseunglee/"> 
          <Logo src={Linkedin}/>
        </Logos>
        <Logos> 
          <Logo src={Twitter}/>
        </Logos>
        <Logos href="https://github.com/ikelee/Resume/blob/master/IkeLeeW18Resume.pdf"> 
          <Logo src={Document}/>
        </Logos>
      </LogoBar>
    </Contact>
    <Footing>
      <div>Thanks for visiting</div>
    </Footing>
  </div>
)
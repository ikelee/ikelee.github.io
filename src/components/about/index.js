import React from 'react';
import styled from 'styled-components'

import About from '../../images/portrait.jpg'

import Facebook from '../../logos/facebook.svg'
import Github from '../../logos/github.svg'
import Insta from '../../logos/instagram.svg'
import Linkedin from '../../logos/linkedin.svg'
import Twitter from '../../logos/twitter.svg'
import Document from '../../logos/document.svg'
import Portrait from '../../images/portrait2.jpg'
import Search from '../../images/search.jpg'

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  vertical-align: middle;
`

const TitleDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 300;
  color: #fff;
  text-align: center;
`

const LineSpacer = styled.div`
  width: 80px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #fff;
`

const Heading = styled.div`
  width: 100%;
  background: #c5c5c5;
  margin: 0;
  overflow: auto;
  text-align: -webkit-center;
`
const Header = styled.h2`
  text-align: center;
  margin-top: 35px;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #000;
  vertical-align: middle;
`

const Paragraph = styled.div`
  font-size: 15px;
  margin-top: 27px;
  margin-bottom: 20px; 
  font-family: 'Open Sans', sans-serif;
  line-height: 26px;
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

const LogoCTA = styled.a`
  margin: 15px;
`

const Logo = styled.img`
  height: 70px;
`

const InsertedImage = styled.img`
  height: 400px;
`

const ParallaxImage = styled.div`
  height: 300px;
  width: auto;
  background-image: url(${Search});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  flex-direction: column;
  display: flex;
`

const Footing = styled.div`
  width: 100%;
  background: #000000;
  margin: 0;
  overflow: auto;
  text-align: -webkit-center;
`

const paragraphContent = "Hi, welcome to my website. I'm Ike, and I am a Korean-Canadian developer and a computer engineering student."
const paragraphHeader = "I'm also an aspiring musician, journalist and an entrepreneur, and I currently attend University of Waterloo"
const paragraphItalic = "I have worked at several different companies including Toast, Rave and Hootsuite. "
const paragraphDetail = "I love imagining, talking about, building and breaking new technologies. I am also fascinated by what big data/deep learning is enabling us to create.\n\nOn my spare time, I love to cook, produce music and be out in nature. Check out my Instagram page for more pictures and updates! \n\nDon’t hesitate to reach out - I love meeting new people, and thanks for visiting \n\n (This webpage is still under construction)"

const searchForString = "Currently in search for Winter 2019 Internship"
const searchForParagraph = "Please feel free to contact me for any internship opportunities!"
export default () => (
  <div>
    <FlexBox>
      <ContentBox>
        <Title>Ike Lee</Title>
        <LineSpacer/>
        <TitleDescription>Developer, Journalist, Musician</TitleDescription>
      </ContentBox>
    </FlexBox>
    <Heading>
      <Header>Biography</Header>
      <LineSpacer/>
      <Paragraph style={{maxWidth: '80vw'}}>{paragraphContent}</Paragraph>
      <div style={{marginBottom: '20px',display: 'flex', maxWidth: '70vw', flexWrap: 'wrap', justifyContent:'center',alignItems: 'center'}}>
        <InsertedImage src={Portrait}/>
        <div style={{maxWidth: '40vw', minWidth: '300px'}}>
          <Paragraph style={{marginLeft: '15px', marginTop: '10px', fontWeight: 700, fontSize: '20px'}}>{paragraphHeader}</Paragraph>
          <Paragraph style={{marginLeft: '15px', marginTop: '5px', fontWeight: 300, fontStyle: 'italic'}}>{paragraphItalic}</Paragraph>
          <Paragraph style={{marginLeft: '15px', marginTop: '5px'}}>{paragraphDetail}</Paragraph>
        </div>
      </div>
    </Heading>
    <ParallaxImage>
      <ContentBox>
        <Title style={{fontSize: '40px'}}>{searchForString}</Title>
        <LineSpacer/>
        <TitleDescription style={{fontSize: '20px'}}>{searchForParagraph}</TitleDescription>
      </ContentBox>
    </ParallaxImage>
    <Contact>
      <Header>Contact</Header>
      <LogoBar>
        <LogoCTA href="https://www.facebook.com/ike.lee.9898"> 
          <Logo src={Facebook}/>
        </LogoCTA>
        <LogoCTA href="https://github.com/ikelee"> 
          <Logo src={Github}/>
        </LogoCTA>
        <LogoCTA href="https://www.instagram.com/ikeleee/"> 
          <Logo src={Insta}/>
        </LogoCTA>
        <LogoCTA href="https://www.linkedin.com/in/eekseunglee/"> 
          <Logo src={Linkedin}/>
        </LogoCTA>
        <LogoCTA> 
          <Logo src={Twitter}/>
        </LogoCTA>
        <LogoCTA href="https://github.com/ikelee/Resume/blob/master/IkeLeeW18Resume.pdf"> 
          <Logo src={Document}/>
        </LogoCTA>
      </LogoBar>
    </Contact>
    <Footing>
      <div>Thanks for visiting</div>
    </Footing>
  </div>
)
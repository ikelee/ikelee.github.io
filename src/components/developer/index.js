import React from 'react';
import styled from 'styled-components'

import Developer from '../../images/developer.png'
import Toast from '../../images/toast.jpg'
import Hootsuite from '../../images/hootsuite.jpg'

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  vertical-align: middle;
`

const ContentBox = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`

const LineSpacer = styled.div`
  width: 80px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #fff;
`

const TitleDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 300;
  color: #fff;
  text-align: center;
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
  background: #1111112e;
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

const InsertedImage = styled.img`
  height: 400px;
`
const paragraphContentToast = "Toast is a Boston based company that makes cloud powered restaurant point of sales devices. Toast utlizies the versatility and customizability of Android devices to create custom hardware as an all-in-one restaurant management platform, with features such as kitchen display, front of service display, online ordering, etc."
const paragraphHeaderToast = "My role at Toast was managing and improving the core orders system. I made performance and feature improvements, as well as making big infrastructural changes to the way payment refunds were being stored."
const paragraphItalicToast = "Tech Stack: Java, Play, Dropwizard, Angular, Kotlin, Postgres"
const paragraphDetailToast = "As part of the core orders team, I was given an opportunity to be able to take initiatives on big infrastructural projects. Along with the members of my team, I brainstormed potential solutions to big pain points in our current system, and got to pitch these ideas to the rest of the company. Some of the big projects I worked on during my time at Toast was ensuring that refunds were being stored in a correct way that preserved data integrity, and ensuring that all Toast devices were referring to the right version of data. "

const paragraphContentHootsuite = "Hootsuite is a Vancouver-based SaaS company. They specialize in social media management, allowing customers to be able to manage high volume social media accounts and distribute work between multiple social media representatives."
const paragraphHeaderHootsuite = "My role at Hootsuite was working on their new messages service. The team I was on was releasing a new feature that would aggregate all social media updates and display them on a messaging-service-like UI with the ability to reply to these updates. "
const paragraphItalicHootsuite = "Tech Stack: Scala, Go, React, Play 2"
const paragraphDetailHootsuite = "As part of this project, I got to make React components responsible for indicating state of the messaging inbox, build endpoints responsible for retrieving social media updates and build the GraphQL service for data aggregation."


export default () => (
  <div>
    <FlexBox>
      <ContentBox>
        <Title>Work Experience</Title>
        <LineSpacer/>
        <TitleDescription>These are some of the companies I have previously worked at.</TitleDescription>
      </ContentBox>
    </FlexBox>
    <Heading>
      <Header>Toast</Header>
      <LineSpacer/>
      <Paragraph style={{maxWidth: '80vw'}}>{paragraphContentToast}</Paragraph>
      <div style={{marginBottom: '20px',display: 'flex', maxWidth: '90vw', flexWrap: 'wrap', justifyContent:'center',alignItems: 'center'}}>
        <InsertedImage src={Toast}/>
        <div style={{maxWidth: '40vw', minWidth: '300px'}}>
          <Paragraph style={{marginLeft: '15px', marginTop: '10px', fontWeight: 700, fontSize: '20px'}}>{paragraphHeaderToast}</Paragraph>
          <Paragraph style={{marginLeft: '15px', marginTop: '5px', fontWeight: 300, fontStyle: 'italic'}}>{paragraphItalicToast}</Paragraph>
          <Paragraph style={{marginLeft: '15px', marginTop: '5px'}}>{paragraphDetailToast}</Paragraph>
        </div>
      </div>
    </Heading>
    <Heading style={{background: '#1111114a'}}>
      <Header>Hootsuite</Header>
      <LineSpacer/>
      <Paragraph style={{maxWidth: '80vw'}}>{paragraphContentHootsuite}</Paragraph>
      <div style={{marginBottom: '20px',display: 'flex', maxWidth: '90vw', flexWrap: 'wrap', justifyContent:'center',alignItems: 'center'}}>
        <InsertedImage src={Hootsuite}/>
        <div style={{maxWidth: '40vw', minWidth: '300px'}}>
          <Paragraph style={{marginLeft: '15px', marginTop: '10px', fontWeight: 700, fontSize: '20px'}}>{paragraphHeaderHootsuite}</Paragraph>
          <Paragraph style={{marginLeft: '15px', marginTop: '5px', fontWeight: 300, fontStyle: 'italic'}}>{paragraphItalicHootsuite}</Paragraph>
          <Paragraph style={{marginLeft: '15px', marginTop: '5px'}}>{paragraphDetailHootsuite}</Paragraph>
        </div>
      </div>
    </Heading>
  </div>
)
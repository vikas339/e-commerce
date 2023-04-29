import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: reletive;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
 height: 100px;
 display: flex;
 transform: translateX(-200vw)
`

const Slide = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const Image = styled.img`
  height: 80%;
  wight:100%;
`

const ImgContainer = styled.div`
  height:100%;
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  backbround-color: transparent;
  cursor: pointer;
`

const InfoContainer = styled.div`
flex: 1;
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {

  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
         <ArrowLeftOutlinedIcon/>
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd" >
          <ImgContainer>
            <Image src="https://user-images.githubusercontent.com/75200810/235105280-90f8739c-6e13-4c46-97ec-0f552f3b225a.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR ALL NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fcfled'>
          <ImgContainer>
            <Image src="https://user-images.githubusercontent.com/75200810/235105280-90f8739c-6e13-4c46-97ec-0f552f3b225a.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUPER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR ALL NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fbf0f4'>
          <ImgContainer>
            <Image src="https://user-images.githubusercontent.com/75200810/235105280-90f8739c-6e13-4c46-97ec-0f552f3b225a.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>POPULER</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR ALL NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>  
      <Arrow  direction="right" onClick={()=>handleClick("right")}>
         <ArrowRightOutlinedIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider

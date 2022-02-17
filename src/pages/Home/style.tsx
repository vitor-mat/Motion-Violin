import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MaxWidthSection = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 120px);
  margin: 0 24px;
`

export const Main = styled(motion.main)`
  display: flex;
  width: 100%;
  height: calc(100% - 170px);

  @media(max-width: 820px){
    flex-direction: column;
    justify-content: flex-start;
  }

`

export const ViolinContainer = styled(motion.div)`
  width: 100%;
  min-width: 200px;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ViolinBackground = styled(motion.div)`
  background: linear-gradient(90deg, rgba(199,199,200,0.3477766106442577) 0%, rgba(199,199,200,1) 100%);  width: 400px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: visible;
  padding-top: 50px;

  img{
    width: 400px;
    height: 400px;
  }

  @media(max-width: 768px){
    height: 300px;
    width: 300px;
  
    img{
      width: 300px;
      height: 300px;
    }
  }

  @media(max-width: 320px){
    height: 250px;
    width: 250px;
  
    img{
      width: 250px;
      height: 250px;
    }
  }
`

export const textContainer = styled(motion.div)`
  width: 100%;
  padding-left: 100px; 
  display: flex;
  flex-direction: column;
  justify-content: center;

  span{
    font-size: 120px;
    font-weight: 500;
    text-align: center;
  }
  
  @media(max-width: 1024px){
    span{
      font-size: 104px;
    }
  }

  @media(max-width: 768px){
    padding-left: 50px;

    span{
      font-size: 88px;
    }
  }

  @media(max-width: 540px){
    padding: 0;
    align-items: center;
    span{
      width: 100%;
    }
  }

  @media(max-width: 375px){
    span{
      font-size: 72px;
    }
  }
`

export const Footer = styled(motion.footer)`
  width: 100%;
  position: relative;
  padding-top: 10px;
  height: 160px;

  svg{
    width: 150px;
    position: absolute;
    top: 20px;
    right: 60px;
    path {
      fill: transparent;
    }

    font-size: 60px;
    font-weight: 900; 
    text-transform: uppercase;
    letter-spacing: 21px;
    fill: black;
  }
`
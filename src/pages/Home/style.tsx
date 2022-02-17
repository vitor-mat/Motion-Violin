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
  display: flex;
  position: relative;

  svg{
    width: 150px;
    position: absolute;
    bottom: 60px;
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


  @media(max-width: 1024px){
    svg{
      width: 110px;
      bottom: 20px;
      right: 20px;
    }
  }

  @media(max-width: 540px){
    flex-direction: column;
    justify-content: flex-start;
  }

  @media(max-width: 375px){
    height: calc(100vh + 30px);
  }
`

export const ViolinContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  min-width: 200px;
  height: 100%;
  display: flex;
  align-items: center;

  @media(max-width: 425px){
    align-items: flex-start;
    justify-content: center;
    height: 400px;
  }

  @media(max-width: 320px){
    height: 350px;
  }
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

  @media(max-width: 425px){
    padding: 0;
    align-items: center;
  }

  @media(max-width: 375px){
    span{
      font-size: 72px;
    }
  }
`
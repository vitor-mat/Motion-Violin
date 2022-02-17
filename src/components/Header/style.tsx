import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MaxWidthSection = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled(MaxWidthSection)`
  max-width: 1440px;
  margin: 0 24px;
`

export const Header = styled(motion.header)`
  width: 100%;
  padding: 10px 0;
  height: 120px;
  h1{
    font-size: 40px;
    font-weight: 300;
  }
`
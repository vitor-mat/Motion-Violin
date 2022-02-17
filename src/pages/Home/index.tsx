import { motion } from 'framer-motion';

import * as S from './style';
import * as V from './variants';

import image from '../../assets/images/violin.svg';

function Home() {
  return (
    <S.MaxWidthSection>
      <S.Container>
        <S.Main>
        <S.ViolinContainer>
          <S.ViolinBackground
            variants={V.violinBackgroundVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img src={image} alt="ola mundo"
              variants={V.violinImageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </S.ViolinBackground>
        </S.ViolinContainer>
        <S.textContainer>
          <motion.span
            variants={V.spanTextVariant1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Motion
          </motion.span>
          <motion.span
            variants={V.spanTextVariant2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Violin
          </motion.span>
        </S.textContainer>
        </S.Main>
        <S.Footer>
          <motion.svg viewBox="0 0 500 500"
            variants={V.svgVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <title>Red Hot Chilli Peppers Logo</title>
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
              </path>
            </defs>
            <text dy="70" textLength="1220">
              <textPath xlinkHref="#textcircle">MUSIC MUSIC MUSIC</textPath>
            </text>
          </motion.svg>
        </S.Footer>
      </S.Container>
    </S.MaxWidthSection>
  )
}

export default Home
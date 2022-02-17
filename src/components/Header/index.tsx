import * as S from './style';

import * as V from './variants';

function Header (){
  return(
    <S.MaxWidthSection>
      <S.Container>
        <S.Header
          variants={V.logoVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          <h1>Violin</h1>
        </S.Header>
      </S.Container>
    </S.MaxWidthSection>
  )
}

export default Header
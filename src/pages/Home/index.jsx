// import { useState } from 'react'
// import styled from 'styled-components'

// const HomeContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `

// const Balloon = styled.div`
//   height: 100px;
//   width: 100px;
//   border-radius: 50px;
//   background-color: #e20202;
//   transform: scale(${({ size }) => size});
// `

// function Home() {
//   const [size, setSize] = useState(1)

//   return (
//     <HomeContainer>
//       <h1 onClick={() => setSize(size + 0.1)}>Page d'accueil 🏡</h1>
//       <Balloon size={size} />
//     </HomeContainer>
//   )
// }

// export default Home

import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home

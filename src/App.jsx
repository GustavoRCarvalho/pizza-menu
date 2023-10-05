import styled from "styled-components"
import { Flavors } from "./components/Flavors/Flavors"

export const App = () => {
  return (
    <MainContainer>
      <Flavors />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

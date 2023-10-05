import styled from "styled-components"
import { Flavors } from "./components/Flavors/Flavors"
import { createArray } from "./components/Common/utils"

export const App = () => {
  let listFlavors = createArray(4, { name: "", color: "" })

  return (
    <MainContainer>
      <Flavors listFlavors={listFlavors} />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

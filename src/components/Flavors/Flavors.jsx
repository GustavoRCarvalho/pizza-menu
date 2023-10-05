import styled from "styled-components"
import { ContentLimit } from "../Common/ContentLimit"
import { useState } from "react"
import { OptionButton } from "./OptionButton"

const flavorsList = [
  { name: "Calabresa", color: "#ff2525" },
  { name: "Filé c/ Fritas", color: "#8f4d22" },
  { name: "Fritas", color: "#eeda24" },
  { name: "Lombo", color: "#fa7373" },
  { name: "Moda da Casa", color: "#28378b" },
  { name: "Quatro Queijos", color: "#db9e19" },
]

export const Flavors = ({ listFlavors }) => {
  const [flavors, setFlavors] = useState(listFlavors)

  console.log(flavors)

  return (
    <Container>
      Flavors
      {flavors.map(({ name, color }, index) => (
        <OptionButton
          key={index}
          nameChoose={name}
          colorChoose={color}
          flavorsList={flavorsList}
          onClick={(name, color) =>
            setFlavors((state) => {
              state[index] = { name, color }
              return [...state]
            })
          }
        />
      ))}
      {/* {flavorsList.map(({ name, color }) => (
        <ButtonBackground
          $color={color}
          key={name}
        >
          <ButtonLabel $color={color}>{name}</ButtonLabel>
        </ButtonBackground>
      ))} */}
    </Container>
  )
}

const Container = styled(ContentLimit)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.3em;

  font-family: "Rubik", sans-serif;

  height: 100%;
`

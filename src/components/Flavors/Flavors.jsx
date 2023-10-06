import styled from "styled-components"
import { ContentLimit } from "../Common/ContentLimit"
import { useState } from "react"
import { OptionButton } from "./OptionButton"
import { Pizza } from "./Pizza"
import { createArray } from "../Common/utils"
import PizzaFile from "../../assets/Pizza-File.png"
import PizzaCalabresa from "../../assets/Pizza-Calabresa.png"
import PizzaLombo from "../../assets/Pizza-Lombo.png"
import PizzaQuatro from "../../assets/Pizza-Quatro.png"
import PizzaFritas from "../../assets/Pizza-Fritas.png"

const flavorsList = [
  { name: "Calabresa", color: "#ff2525", src: PizzaCalabresa },
  { name: "Filé c/ Fritas", color: "#8f4d22", src: PizzaFile },
  { name: "Fritas", color: "#eeda24", src: PizzaFritas },
  { name: "Lombo", color: "#fa7373", src: PizzaLombo },
  { name: "Quatro Queijos", color: "#db9e19", src: PizzaQuatro },
]

export const Flavors = () => {
  const [flavors, setFlavors] = useState(
    createArray(4, { name: "", color: "", src: "" })
  )

  return (
    <Container>
      Flavors
      <Pizza flavors={flavors} />
      {flavors.map(({ name, color }, index) => (
        <OptionButton
          key={index}
          nameChoose={name}
          colorChoose={color}
          flavorsList={flavorsList}
          active={flavors[index !== 0 && index - 1]?.name !== ""}
          onClick={(name, color, src) =>
            setFlavors((state) => {
              state[index] = { name, color, src }
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

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
import { SizeSlider } from "./SizeSlider"

const flavorsList = [
  { name: "Calabresa", color: "#ff2525", src: PizzaCalabresa },
  { name: "Filé c/ Fritas", color: "#8f4d22", src: PizzaFile },
  { name: "Fritas", color: "#eeda24", src: PizzaFritas },
  { name: "Lombo", color: "#fa7373", src: PizzaLombo },
  { name: "Quatro Queijos", color: "#db9e19", src: PizzaQuatro },
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
  const [size, setSize] = useState(0)

  return (
    <Container>
      <SizeSlider size={size} setSize={setSize} />
      <Pizza flavors={flavors} size={size} />
      Sabores:
      {flavors.map(({ name, color }, index) => (
        <OptionButton
          key={index}
          index={index}
          nameChoose={name}
          colorChoose={color}
          flavorsList={flavorsList}
          setFlavors={setFlavors}
          active={flavors[index !== 0 && index - 1]?.name !== ""}
          onClick={(name, color, src) =>
            setFlavors((state) => {
              state[index] = { name, color, src }
              return [...state]
            })
          }
        />
      ))}
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

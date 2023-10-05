import { useState } from "react"
import styled from "styled-components"

export const OptionButton = ({
  nameChoose,
  colorChoose,
  flavorsList,
  onClick,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <ButtonBackground
      $color={colorChoose}
      onClick={() => setOpen((state) => !state)}
      $open={open}
    >
      <ButtonLabel $color={colorChoose} $open={open}>
        {open ? "" : nameChoose !== "" ? nameChoose : "Opções"}
        {open &&
          flavorsList.map(({ name, color }) => {
            let active = nameChoose === name

            return (
              <ButtonFlavorLabel
                key={"flavor" + name}
                onClick={() => onClick(name, color)}
                $active={active}
              >
                {active && "* "}
                {name}
                {active && " *"}
              </ButtonFlavorLabel>
            )
          })}
      </ButtonLabel>
    </ButtonBackground>
  )
}

const ButtonFlavorLabel = styled.span.attrs((props) => ({
  style: {
    textDecoration: props.$active ? "underline" : "none",
  },
}))`
  display: block;
`

const ButtonLabel = styled.label.attrs((props) => ({
  style: {
    backgroundColor: props.$color !== "" ? "#ffffff84" : "#ffffff7a",
    borderRadius: props.$open ? "0.5em" : "2em",
  },
}))`
  display: block;
  color: #222;

  width: max-content;
  min-width: 8em;

  padding-block: 0.5em;
  padding-inline: 1em;

  cursor: pointer;
  transition: 500ms;
`

const ButtonBackground = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.$color !== "" ? props.$color : "#cccccc77",
    borderRadius: props.$open ? "1em" : "2em",
  },
}))`
  padding: 0.5em;

  cursor: pointer;
  transition: 500ms;
`

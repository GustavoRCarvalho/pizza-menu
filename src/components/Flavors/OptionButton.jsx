import { useState } from "react"
import styled from "styled-components"
import { AiOutlineCheck } from "react-icons/ai"

export const OptionButton = ({
  nameChoose,
  colorChoose,
  flavorsList,
  onClick,
  active,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <ButtonBackground
      onClick={() => active && setOpen((state) => !state)}
      $color={colorChoose}
      $active={active}
      $open={open}
    >
      <ButtonLabel $color={colorChoose} $open={open} $active={active}>
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
                {name}
                {active && <CheckIcon />}
              </ButtonFlavorLabel>
            )
          })}
      </ButtonLabel>
    </ButtonBackground>
  )
}

const CheckIcon = styled(AiOutlineCheck)`
  position: absolute;
  right: 0.25em;

  width: 1em;
  height: 1em;
`

const ButtonFlavorLabel = styled.span.attrs((props) => ({
  style: {
    border: props.$active ? "1px solid #222" : "none",
  },
}))`
  position: relative;
  background-color: #ffffff86;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 0.15em;
  margin-block: 0.25em;

  border-radius: 0.25em;
`

const ButtonLabel = styled.label.attrs((props) => ({
  style: {
    backgroundColor: props.$color !== "" ? "#ffffff84" : "#ffffff7a",
    borderRadius: props.$open ? "0.5em" : "2em",
    cursor: props.$active ? "pointer" : "normal",
  },
}))`
  display: block;
  color: #222;

  width: max-content;
  min-width: 8em;

  padding-block: 0.5em;
  padding-inline: 1em;

  transition: 500ms;
`

const ButtonBackground = styled.div.attrs((props) => ({
  style: {
    backgroundColor:
      props.$color !== ""
        ? props.$color
        : props.$active
        ? "#cccccc77"
        : "#cccccc32",
    borderRadius: props.$open ? "1em" : "2em",
    cursor: props.$active ? "pointer" : "normal",
  },
}))`
  padding: 0.5em;

  transition: 500ms;
`

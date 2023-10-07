import styled from "styled-components"

export const SizeSlider = ({ size, setSize }) => {
  return (
    <>
      <Labels>
        <SizeLabel $position={"0%"} $active={size === 0}>
          Pequena
        </SizeLabel>
        <SizeLabel $position={"33%"} $active={size === 1}>
          Média
        </SizeLabel>
        <SizeLabel $position={"66%"} $active={size === 2}>
          Grande
        </SizeLabel>
        <SizeLabel $position={"100%"} $active={size === 3}>
          Família
        </SizeLabel>
      </Labels>
      <Slider>
        <SliderButton
          $position={"0%"}
          $active={size === 0}
          onClick={() => setSize(0)}
        />
        <SliderButton
          $position={"33%"}
          $active={size === 1}
          onClick={() => setSize(1)}
        />
        <SliderButton
          $position={"66%"}
          $active={size === 2}
          onClick={() => setSize(2)}
        />
        <SliderButton
          $position={"100%"}
          $active={size === 3}
          onClick={() => setSize(3)}
        />
      </Slider>
    </>
  )
}

const SizeLabel = styled.span.attrs((props) => ({
  style: {
    textDecoration: props.$active ? "underline" : "none",
    left: `calc(${props.$position} - 2em)`,
  },
}))`
  position: absolute;
  text-align: center;

  width: 4em;
`

const SliderButton = styled.div.attrs((props) => ({
  style: {
    width: props.$active ? "1.5em" : "1em",
    height: props.$active ? "1.5em" : "1em",
    left: `calc(${props.$position} - 0.75em)`,
  },
}))`
  position: absolute;
  background-color: orange;

  border-radius: 50%;
  cursor: pointer;
`

const Labels = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  min-width: 14em;
  height: 4em;
`

const Slider = styled.div`
  position: relative;
  background-color: orange;
  display: flex;
  align-items: center;

  height: 0.5em;
  min-width: 14em;

  border-radius: 1em;
`

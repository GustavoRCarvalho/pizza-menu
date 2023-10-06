import styled from "styled-components"
import image from "../../assets/Pizza-Calabresa.png"

export const Pizza = ({ flavors }) => {
  const numberFlavors = () => {
    let count = 0
    flavors.map(({ name }) => {
      if (name !== "") {
        return (count += 1)
      }
    })
    return count
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Pizza - {numberFlavors()} Sabores
      <ImageContainer>
        <Image
          src={flavors[3].src !== "" ? flavors[3].src : image}
          $porcent={numberFlavors() === 4 ? "100%" : "0%"}
        />
        <Image
          src={flavors[2].src !== "" ? flavors[2].src : image}
          $porcent={
            numberFlavors() === 3
              ? "100%"
              : numberFlavors() === 4
              ? "75%"
              : "0%"
          }
        />
        <Image
          src={flavors[1].src !== "" ? flavors[1].src : image}
          $porcent={
            numberFlavors() === 2
              ? "100%"
              : numberFlavors() === 3
              ? "66%"
              : numberFlavors() === 4
              ? "50%"
              : "0%"
          }
        />
        <Image
          src={flavors[0].src !== "" ? flavors[0].src : image}
          $porcent={
            numberFlavors() === 1
              ? "100%"
              : numberFlavors() === 2
              ? "50%"
              : numberFlavors() === 3
              ? "33%"
              : numberFlavors() === 4
              ? "25%"
              : "0%"
          }
        />
      </ImageContainer>
    </div>
  )
}

const ImageContainer = styled.div`
  position: relative;

  width: 10em;
  height: 10em;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img.attrs((props) => ({
  style: {
    "--clock-hands-position": props.$porcent,
  },
}))`
  position: absolute;
  width: 100%;
  height: 100%;

  -webkit-mask-image: conic-gradient(
    black var(--clock-hands-position),
    transparent 0deg
  );

  transition: --clock-hands-position 1s linear;

  @property --clock-hands-position {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 0%;
  }
`

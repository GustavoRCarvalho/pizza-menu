import styled from "styled-components"
import image from "../../assets/Pizza-Calabresa.png"
import caixaBaixo from "../../assets/Caixa-Baixo.png"
import caixaCima from "../../assets/Caixa-Cima.png"

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
          title="Image 1 Pizza"
          src={flavors[3].src !== "" ? flavors[3].src : image}
          $porcent={numberFlavors() === 4 ? "100%" : "0%"}
        />
        <Image
          title="Image 2 Pizza"
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
          title="Image 3 Pizza"
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
          title="Image 4 Pizza"
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
        <CaixaCimaImage src={caixaCima} $open={numberFlavors() !== 0} />
      </ImageContainer>
    </div>
  )
}

const ImageContainer = styled.div`
  background-image: url(${caixaBaixo});
  position: relative;

  width: 10em;
  height: 10em;

  display: flex;
  align-items: center;
  justify-content: center;
`

const CaixaCimaImage = styled.img.attrs((props) => ({
  style: {
    transform: props.$open ? "rotateX(90deg)" : "rotateX(0deg)",
    bottom: props.$open ? "50%" : "0%",
  },
}))`
  position: absolute;
  width: 100%;
  height: 100%;

  transition: 1s linear;
`

const Image = styled.img.attrs((props) => ({
  style: {
    "--clock-hands-position": props.$porcent,
  },
}))`
  position: absolute;
  width: 90%;
  height: 90%;
  padding: 1em;

  -webkit-mask-image: conic-gradient(
    black var(--clock-hands-position),
    transparent 0deg
  );

  filter: drop-shadow(0px 0px 1px white);
  transition: --clock-hands-position 1s linear;

  @property --clock-hands-position {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 0%;
  }
`

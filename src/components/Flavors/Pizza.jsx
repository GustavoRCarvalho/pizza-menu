import styled from "styled-components"
import image from "../../assets/Pizza.png"

export const Pizza = ({ flavors }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Pizza
      <ImageContainer>
        <Image
          src={image}
          $filter={"grayscale(20%)"}
          $porcent={flavors[3].name !== "" ? "100%" : "0%"}
        />
        <Image
          src={image}
          $filter={"grayscale(40%)"}
          $porcent={flavors[2].name !== "" ? "75%" : "0%"}
        />
        <Image
          src={image}
          $filter={"grayscale(60%)"}
          $porcent={flavors[1].name !== "" ? "50%" : "0%"}
        />
        <Image
          src={image}
          $filter={"grayscale(80%)"}
          $porcent={flavors[0].name !== "" ? "25%" : "0%"}
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
    filter: props.$filter,
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

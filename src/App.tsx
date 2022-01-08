import { useRef } from "react";
import { Container, StyledParchment, SaveButton } from "./App.styles";
import domtoimage from "dom-to-image";
import { FaRegSave } from "react-icons/fa";

const App = () => {
  const letter = useRef(document.createElement("div"));

  return (
    <Container>
      <StyledParchment ref={letter} contentEditable={true}>
        <div>Dearest Kobold,</div>
      </StyledParchment>
      <SaveButton
        onClick={() =>
          domtoimage.toPng(letter.current).then((dataUrl) => {
            const link = document.createElement("a");
            link.download = `kobold-express-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
          })
        }
      >
        <FaRegSave />
      </SaveButton>
    </Container>
  );
};

export default App;

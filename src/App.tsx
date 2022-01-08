import { useRef, useState } from "react";
import { Container, StyledParchment, SaveButton } from "./App.styles";
import domtoimage from "dom-to-image";
import { FaRegSave } from "react-icons/fa";
import { ImHourGlass } from "react-icons/im";

const App = () => {
  const letter = useRef(document.createElement("div"));
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <StyledParchment ref={letter} contentEditable={true}>
        <div>Dearest Kobold,</div>
      </StyledParchment>
      <SaveButton
        onClick={() => {
          setLoading(true);
          domtoimage.toPng(letter.current).then((dataUrl) => {
            const link = document.createElement("a");
            link.download = `kobold-express-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
            setLoading(false);
          });
        }}
      >
        {loading ? <ImHourGlass /> : <FaRegSave />}
      </SaveButton>
    </Container>
  );
};

export default App;

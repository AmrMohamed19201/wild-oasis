import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">the wild oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button>check in</Button>
              <Button size="small" variation="danger">
                check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">form</Heading>
            <form>
              <Input placeholder="number of guests" />
              <Input placeholder="number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

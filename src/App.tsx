import {CardList} from "./components/card-list";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <h1>Learning App</h1>

        <CardListContainer>
            <CardList />
        </CardListContainer>
    </div>
  )
}

const CardListContainer = styled.div`
    margin: 88px auto 0 auto;
    width: 80%;
`;

export default App

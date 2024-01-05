import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1023px) {
    padding: 0 10px;
    position: relative;
  }
`;
export default MainContainer;

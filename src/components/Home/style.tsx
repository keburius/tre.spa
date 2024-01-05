import styled from "styled-components";

export const InfoContainer = styled("div")`
  position: relative;
  background: rgb(252 234 237);
  height: 600px;
  margin-top: 60px;
  border-radius: 10px;
  overflow: hidden;

  background-image: url("/icons/dots.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  @media (max-width: 1023px) {
    margin-top: 0px;
    border-radius: 0;
    margin-left: -10px;
    width: calc(100% + 20px);
    min-height: calc(100vh - 70px);
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;

    padding-bottom: 20px;
  }
`;
export const InfoContainerInner = styled("div")`
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 1023px) {
    align-items: center;
    text-align: center;
    position: static;
    width: 100%;
    transform: none;

    margin-top: 55px;
  }
`;
export const Dots = styled("img")`
  position: absolute;
  left: 10px;
  top: 10px;
  object-fit: cover;

  @media (max-width: 1023px) {
    display: none;
  }
`;
export const Phones = styled("img")`
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  object-fit: cover;

  @media (max-width: 1023px) {
    position: static;
    width: 340px;
    transform: none;
    margin-top: 50px;
  }
`;
export const TreLogo = styled("img")`
  height: 65px;

  @media (max-width: 1023px) {
    height: 40px;
  }
`;
export const ApplicationsContentApps = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`;

export const Title = styled("h1")`
  color: #222;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;

  max-width: 500px;

  @media (max-width: 1023px) {
    font-size: 26px;
    line-height: 25px;
  }
`;
export const Description = styled("p")`
  color: #717171;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;

  max-width: 550px;

  @media (max-width: 1023px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

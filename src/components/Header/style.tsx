import styled from "styled-components";

export const DesktopLogo = styled("img")`
  @media (max-width: 1023px) {
    display: none;
  }
`;
export const MobileLogo = styled("img")`
  display: none;
  @media (max-width: 1023px) {
    display: inline;
  }
`;
export const HeaderWrapper = styled("div")`
  height: 80px;
  border-bottom: 1px solid #ddd;
  background: #fff;

  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    height: 70px;
  }
`;
export const HeaderInner = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Socials = styled("div")`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const SocialItem = styled("a")`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Phone = styled("p")`
  color: #222;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1023px) {
    display: none;
  }
`;

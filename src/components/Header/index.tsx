import React from "react";
import MainContainer from "../MainContainer";
import {
  DesktopLogo,
  HeaderInner,
  HeaderWrapper,
  MobileLogo,
  Phone,
  SocialItem,
  Socials,
} from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <MainContainer>
        <HeaderInner>
          <DesktopLogo src="/icons/tre.svg" alt="tre-svg" />
          <MobileLogo src="/icons/tre-mobile.svg" alt="tre-svg" />
          <Socials>
            <SocialItem href="tel:0322420405" target="_blank">
              <img src="/icons/phone.svg" alt="phone" />
              <Phone>032 2 40 65 65</Phone>
            </SocialItem>
            <SocialItem href="https://m.me/GeoRailway" target="_blank">
              <img src="/icons/messenger.svg" alt="messenger" />
            </SocialItem>
            <SocialItem href="mailto:support@tre.ge" target="_blank">
              <img src="/icons/mail.svg" alt="mail" />
            </SocialItem>
            <SocialItem href="https://fb.com/TRE.Tickets" target="_blank">
              <img src="/icons/fb.svg" alt="fb" />
            </SocialItem>
          </Socials>
        </HeaderInner>
      </MainContainer>
    </HeaderWrapper>
  );
};

export default Header;

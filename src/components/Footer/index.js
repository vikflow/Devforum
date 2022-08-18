import React from "react";
import {animate as scroll} from "react-scroll"
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About US</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Customer Service</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
                <FooterLink to="/signin">About us</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Languages</FooterLinkTitle>
                <FooterLink to="/signin">Python</FooterLink>
                <FooterLink to="/signin">C#</FooterLink>
                <FooterLink to="/signin">c++</FooterLink>
                <FooterLink to="/signin">Java</FooterLink>
                <FooterLink to="/signin">Javascript/frameworks</FooterLink>
                <FooterLink to="/signin">Swift</FooterLink>
                <FooterLink to="/signin">Rubi</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About US</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Customer Service</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
                <FooterLink to="/signin">About us</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> About US</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Customer Service</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
                <FooterLink to="/signin">About us</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>KEdevforum</SocialLogo>
              <WebsiteRights>
                KEdevforum {new Date().getFullYear()} All Rights Reserved.{" "}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Discord">
                  <FaDiscord />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitch">
                  <FaTwitch />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Github">
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import { Button } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    LogoWords,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';


const Footer = () => {
    return ( 
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Task</FooterLinkTitle>
                        <FooterLink to='/'>Home</FooterLink>
                        <FooterLink to='/Templates'>Templates</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                        <FooterLink to='/Contact'>Contact</FooterLink>
                        <FooterLink to='/SiteMap'>SiteMap</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Learn</FooterLinkTitle>
                        <FooterLink to='/Tutorials/GettingStarted'>Getting Started</FooterLink>
                        <FooterLink to='/Tutorials/ScheduleTasks'>Schedule Tasks</FooterLink>
                        <FooterLink to='/Tutorials/'>See all Tutorials</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        <LogoWords>TASK ORGANIZER</LogoWords>
                    </SocialLogo>
                    <WebsiteRights>
                        Nellak2017 © 2021
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/connor.keenum' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://github.com/Nellak2017' target="_blank" aria-label="GitHub">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/connor-keenum/' target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer>
     );
}
 
export default Footer;
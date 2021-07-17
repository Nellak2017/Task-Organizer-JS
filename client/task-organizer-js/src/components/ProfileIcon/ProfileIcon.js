import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import {
    ProfileContainer,
    ProfilePicture,
    ProfileName,
    ProfilePopUp,
    ProfilePopUpInnerContainer,
    EmailFlexContainer,
    OptionLink
} from './ProfileIcon.elements.js';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

//TODO: Add Data Validation for the username when adding the route
const ProfileIcon = ({ data }) => {

    const location = useLocation();

    return (
        <>
            {data.map((value, key) => {
                return (
                    <IconContext.Provider value={{ color: '#fff', size: '1.5rem' }}>
                        <ProfileContainer to={"/Users/" + value.username} key={key}>
                            <ProfilePicture alt={value.username + " Picture"} src={value.picture} />
                            <ProfileName>{value.username}</ProfileName>
                            <ProfilePopUp className="showMe">
                                <ProfilePopUpInnerContainer>
                                    <img src={require('../../images/beautiful-scenery-over-the-lake.jpg').default} alt={'Default Profile Picture'} />
                                    <p>{value.username}</p>
                                    <EmailFlexContainer to={location.pathname}>
                                        <AiIcons.AiOutlineMail className="icon" />
                                        <a href={"https://" + value.email}>{value.email}</a>
                                    </EmailFlexContainer>
                                    <EmailFlexContainer to={'/ControlPanel'}>
                                        <SiIcons.SiGooglesearchconsole className="icon" />
                                        <OptionLink to={'/ControlPanel'}>{"Control Panel"}</OptionLink>
                                    </EmailFlexContainer>
                                    <EmailFlexContainer to={'/LogOut'}>
                                        <SiIcons.SiGooglesearchconsole className="icon" />
                                        <OptionLink to={'/LogOut'}>{"Log Out"}</OptionLink>
                                    </EmailFlexContainer>
                                </ProfilePopUpInnerContainer>
                            </ProfilePopUp>
                        </ProfileContainer>
                    </IconContext.Provider>
                );
            }
            )
            }

        </>
    );
}

export default ProfileIcon;
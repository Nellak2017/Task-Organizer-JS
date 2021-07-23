import { useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import {
    ProfileContainer,
    ProfilePicture,
    ProfileName,
    ProfilePopUpContainer,
    ProfilePopUp,
    ProfilePopUpInnerContainer,
    EmailFlexContainer,
    OptionLink
} from './ProfileIcon.elements.js';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

//TODO: Add Data Validation for the username when adding the route
//TODO: Get rid of nested links if possible
const ProfileIcon = ({ data }) => {

    const location = useLocation();

    return (
        <IconContext.Provider value={{ color: '#fff', size: '1.5rem' }}>
            <ProfilePopUpContainer>
                {data.map((value, key) => {
                    return (

                        <ProfileContainer to={"/Users/" + value.username} key={value.username + key}>
                            <ProfilePicture alt={value.username + " Picture"} src={value.picture} key={value.username + " Picture"} />
                            <ProfileName key={value.username}>{value.username}</ProfileName>
                        </ProfileContainer>
                    );
                }
                )
                }
                <ProfilePopUp key={data[0].username + "pop-up"} className="showMe">
                    <ProfilePopUpInnerContainer>
                        <img src={require('../../images/beautiful-scenery-over-the-lake.jpg').default} alt={'Default Profile'} />
                        <p>{data[0].username}</p>
                        <EmailFlexContainer to={location.pathname}>
                            <AiIcons.AiOutlineMail className="icon" />
                            <a href={"https://" + data[0].email}>{data[0].email}</a>
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
            </ProfilePopUpContainer>
        </IconContext.Provider>
    );
}

export default ProfileIcon;
import {
    ProfileContainer,
    ProfilePicture,
    ProfileName
} from './ProfileIcon.elements.js';


const ProfileIcon = ({data}) => {
    return (
        <>
            <ProfileContainer>
                <ProfilePicture src={'https://pbs.twimg.com/profile_images/1240639017768701954/88-dgMc5_400x400.jpg'}/>
                <ProfileName>Connor Keenum dddd</ProfileName>
            </ProfileContainer> 
        </>
     );
}
 
export default ProfileIcon;